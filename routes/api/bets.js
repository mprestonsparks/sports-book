const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


// Load Bet model
const Bet = require("../../models/Bet");


// CREATE BETS ROUTE
router.get("/", function (req, res) {
    Bet.find()
    .then(
        bet => res.json(bet)
    )         
});
    



module.exports = router;