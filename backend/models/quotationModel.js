const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model("Quotation", quotationSchema);
