const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BetSchema = new Schema({
    // id: {
    // type: string,
    // required: true
    // },
    name: {
        type: String,
        required: true
    },
    betDate: {
        type: String,
        required: true
    },
    betAmount: {
        type: Number,
        required: true
    },
    betValue: {
        type: Number,
        required: true
    },
    betTeam: {
        type: String,
        required: true
    },
    awayTeam: {
        type: String,
        required: true
    },
    homeTeam: {
        type: String,
        required: true
  },
    eventDate: {
        type: String,
        required: true
    },
});

module.exports = Bet = mongoose.model("bets", BetSchema);