const express = require("express");

const api = express();

api.get("/", (req, res) => res.send("The Wrongs API: track your mistreatment"));

module.exports = api;