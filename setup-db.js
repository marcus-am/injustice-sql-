var fs = require('fs');
require("dotenv").config(); // Load environment config

// Load in the SQL statements
var sql = fs.readFileSync('setup.sql').toString();

// Get a link to the database
const db = require("./db");

db.query(sql);