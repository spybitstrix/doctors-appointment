const router = require("express").Router();
const Slot = require("../models/Slot");

router.post("/create", async (req, res) => {
  const slot = new Slot(req.body);
  await slot.save();
  res.send("Slot Created");
});

router.get("/:doctorId", async (req, res) => {
  const slots = await Slot.find({
    doctorId: req.params.doctorId,
    isBooked: false
  });
  res.json(slots);
});

module.exports = router;

