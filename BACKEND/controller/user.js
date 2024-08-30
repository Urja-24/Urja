const expressAsyncHandler = require("express-async-handler");
const UrjaPlayers = require("../models/UrjaPlayers");

const addUser = expressAsyncHandler(async (req, res) => {
  try {
    const {playerName , registrationNumber , branch , sport , sportId } = req.body;
    const player = await UrjaPlayers.create({
        playerName , registrationNumber , branch , sport , sportId
    });
    res.status(200).json({
      _id: player._id,
      username: player.username,
      district: player.district,
      email: player.email,
      message: "success",
    });
  } catch (e) {
    console.log("Error : ", e);
    res.status(400).json({
      error: e,
    });
  }
});

module.exports = { addUser };


