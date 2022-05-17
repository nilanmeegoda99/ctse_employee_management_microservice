require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const employerRoutes = require('./routes/EmployerRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4001;
const URI = "mongodb+srv://nilanmeegoda:admin123@employeecluster.6unxr.mongodb.net/employee_db?retryWrites=true&w=majority"

mongoose
  .connect(URI)
  .then(() => {
    console.log("DB connection Successful");
  })
  .catch((err) => {
    console.log("DB connection Failed - " + err);
  });

app.get("/", (req,res) => {res.send("API is working")})
app.use("/api/employers",employerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });