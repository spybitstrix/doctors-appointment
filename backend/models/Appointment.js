const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patientId: mongoose.Schema.Types.ObjectId,
  doctorId: mongoose.Schema.Types.ObjectId,
  date: String,
  time: String,
  status: String
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

