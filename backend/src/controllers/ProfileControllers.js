const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;
    // paginação
    const { page = 1 } = req.query;
    //armaaazena o total de casos da ong 
    const [count] = await connection("incidents").count();
    const incidents = await connection("incidents")
    .where("ong_id", ong_id)
    .join("ongs", "ong_id", "=", "incidents.ong_id")
    .limit(5)
    .offset((page - 1) * 5)
    .select([
      "incidents.*",
      "ongs.name",
      "ongs.email",
      "ongs.whattsapp",
      "ongs.city",
      "ongs.uf"
    ]);
    res.header("X-Total-Count", count["count(*)"]);
    return res.json(incidents);

  },
};
