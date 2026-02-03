const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test-db", async (req, res) => {
  const Test = mongoose.model(
    "Test",
    new mongoose.Schema({ name: String })
  );

  await Test.create({ name: "DB Initialized" });
  res.send("Database created");
});


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/slots", require("./routes/slotRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
  console.log("Mongo URI:", process.env.MONGO_URI);

});

