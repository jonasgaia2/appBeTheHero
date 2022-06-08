const express = require("express");
const routes = express.Router();
const OngsControllers = require("./controllers/OngsControllers");
const IncidentsControllers = require("./controllers/IncidentsControllers");
const ProfileControllers = require("./controllers/ProfileControllers");
const SessionsControllers = require("./controllers/SessionsControllers");
//login
routes.post("/session", SessionsControllers.create);
//ongs
routes.get("/ongs", OngsControllers.index);
routes.post("/ongs", OngsControllers.create);
//incidents
routes.get("/incidents", IncidentsControllers.index);
routes.post("/incidents", IncidentsControllers.create);
routes.delete("/incidents/:id", IncidentsControllers.delete);
//incidents por ongs
routes.get("/profile", ProfileControllers.index);
module.exports = routes;
