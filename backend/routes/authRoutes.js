const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User Registered");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });

  res.json(user);
});


module.exports = router;
// Get all doctors
router.get("/doctors", async (req, res) => {
  const doctors = await User.find({ role: "doctor" }).select("-password");
  res.json(doctors);
});

