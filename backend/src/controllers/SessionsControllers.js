const connection = require("../database/connection");
module.exports = {
  async create(req, res) {
    const { id } = req.body;
    console.log(id);

    const session = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!session) {
      return res.status(400).json({ error: "No ongs found with this ID" });
    }
    return res.json(session);
  },
};
