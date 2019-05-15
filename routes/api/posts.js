const express = require("express");
const router = express.Router();

//@route   get api/post/test
//@desc    test post route
//@access  public
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

module.exports = router;
