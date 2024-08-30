const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UrjaPlayersSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  sport: { type: String, required: true },
  sportId: { type: String, required: true },
});

module.exports = mongoose.model("UrjaPlayers", UrjaPlayersSchema);
