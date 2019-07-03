const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
    // id: {
    // type: ,
    // required: true
    // },
  homeTeamName: {
    type: String,
    required: true
  },
  homeTeamOdds: {
    type: Number,
    required: true
  },
  awayTeamName: {
    type: String,
    required: true
  },
  awayTeamOdds: {
    type: Number,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  }
});

module.exports = Event = mongoose.model("events", EventSchema);