const mongoose = require("mongoose");

const sparePartSchema = new mongoose.Schema({
    partName: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("SparePart", sparePartSchema);
