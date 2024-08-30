const express = require("express");
const {
  addUser
} = require("../controllers/user");
const router = express.Router();


router.route("/register").post(addUser);
// router.route("/resetPassword/:stationId/:token").post(resetPassword) ;  

module.exports = router;
