const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    clientName: { type: String, required: true },
    amountPaid: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Payment", paymentSchema);
