const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load profile model
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//@route   get api/profile/test
//@desc    test profile route
//@access  public
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

//@route   get api/profile
//@desc    get current profile route
//@access  private

router.get(
  "/",
  passport.authenticate("jwt", { sessions: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
