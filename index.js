require('dotenv').config();

const api = require("./api");
const db = require("./db");

api.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}...`)
});