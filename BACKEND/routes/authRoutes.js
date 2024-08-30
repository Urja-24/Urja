const express = require("express");
const {
  addUser , getPlayers
} = require("../controller/user");
const router = express.Router();


router.route("/register").post(addUser);
router.route("/getPlayers").post(getPlayers);
// router.route("/resetPassword/:stationId/:token").post(resetPassword) ;  

module.exports = router;
