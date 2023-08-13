const express = require("express");
const cors = require("cors");

const injustice = require("./routes/injustice");

// const db = require('./db');

const api = express();

// Add standard middleware
api.use(express.json());
api.use(cors());

api.use("/", injustice)


// Api routes

// api.get("/", (req, res) => res.send("The Wrongs API: track injustice."));

// api.get("/wrongs", async (req, res) => {

//     // The database isn't controlled by this app, so must be async
//     const data = await db.query("SELECT * FROM wrong");
//     res.send(data.rows);
// })

// api.get("/people", async (req, res) => {
//     const data = await db.query("SELECT * FROM person")
//     res.send(data.rows)
// })

// api.get("/people/:id", async (req, res) => {
//     const id = parseInt(req.params.id);

//     // Insert parameters securely
//     const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id]);

//     res.send(data.rows[0]);
// })

// api.post("/people", async (req, res) => {
//     const {person_name} = req.body
//     console.log(req.body)
//     const data = "INSERT INTO person (person_name) VALUES ($1)";
//     try {
//         await db.query(data, [person_name])
//         console.log('Data inserted success')
//         res.status(200).send('Data inserted success')
//     }   catch(error) {
//         console.log(error)
//         res.status(500).send('error inserting data')
//     }
// })

// api.post("/wrongs", async (req, res) => {
//     const {perpetrator_id, victim_id, description} = req.body
//     console.log(req.body)
//     const data = "INSERT INTO wrong (perpetrator_id, victim_id, description) VALUES ($1, $2, $3)";
//     try {
//         await db.query(data, [perpetrator_id, victim_id, description]);
//         console.log('Data inserted success');
//         res.status(200).send('Data inserted success')
        
//     } catch(error) {
//         console.log(error)
//         res.status(500).send('error inserting data')

        
//     }
// });

module.exports = api;