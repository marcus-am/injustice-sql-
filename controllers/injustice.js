// const InJustice = require("../models/Injustice");
const db = require('../db')

const index = async (req, res) => {
    res.send("The Wrongs API: track injustice.");
}

const wrongs = async (req, res) => {
    const data = await db.query("SELECT * FROM wrong");
    res.send(data.rows);
}


const people = async (req, res) => {
    const data = await db.query("SELECT * FROM person");
    res.send(data.rows)
}


module.exports = { index, wrongs, people }