const express = require('express');
const router = express.Router();
const injustice = require("../controllers/injustice");

// const db = require('../db');

router.get("/", injustice.index);

router.get("/wrongs", injustice.wrongs);

router.get("/people", injustice.people);

module.exports = router;