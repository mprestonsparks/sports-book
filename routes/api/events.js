const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
// const validateRegisterInput = require("../../validation/register");
// const validateLoginInput = require("../../validation/login");

// Load Event model
const Event = require("../../models/Event");


// CREATE EVENTS ROUTE
router.get("/", function (req, res) {
    Event.find()
    .then(
        event => res.json(event)
    )         
});
    



module.exports = router;