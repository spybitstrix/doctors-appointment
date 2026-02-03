const User = require("../models/User");

router.get("/doctor/:id", async (req, res) => {
  const apps = await Appointment.find({
    doctorId: req.params.id,
    status: "Booked"
  });

  const result = await Promise.all(
    apps.map(async a => {
      const patient = await User.findById(a.patientId);
      return {
        ...a._doc,
        patientName: patient ? patient.name : "Unknown"
      };
    })
  );

  res.json(result);
});

