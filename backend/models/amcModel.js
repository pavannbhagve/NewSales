const mongoose = require("mongoose");

const amcSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    contractStartDate: { type: Date, required: true },
    contractEndDate: { type: Date, required: true },
    status: { type: String, enum: ["Active", "Expired"], default: "Active" },
}, { timestamps: true });

module.exports = mongoose.model("AMC", amcSchema);
