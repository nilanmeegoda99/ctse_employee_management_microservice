const mongoose = require("mongoose");

const employerSchema = mongoose.Schema({
  emp_name: {
    type: String,
    required: true,
  },
  emp_bio: {
    type: String,
  },
  age: {
    type: Number,
  },
  salary: {
    type: Number,
    default: 0,
  },
  department: {
    type: String,
  },
});

const Employer = mongoose.model('employer', employerSchema)

module.exports = Employer;
