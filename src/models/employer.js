import mongoose from "mongoose";
export const Employer = mongoose.model("Employer", {name: String, contactNO: String, address: String, department: String})