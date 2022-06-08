const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  //listar ongs
  async index(req, res) {
    const ongs = await connection ("ongs").select("*");
    return res.json(ongs);
  },
  async create(req, res) {
    //criação do id da ong
    const { name, email, whattsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString("hex");
    await connection("ongs").insert({
      id,
      name,
      email,
      whattsapp,
      city,
      uf,
    });
    return res.json({ id });
  },
  
};
