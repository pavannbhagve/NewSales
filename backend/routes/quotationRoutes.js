const express = require("express");
const router = express.Router();
const Quotation = require("../models/quotationModel");

// Get all quotations
router.get("/", async (req, res) => {
    try {
        const quotations = await Quotation.find();
        res.json(quotations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new quotation
router.post("/", async (req, res) => {
    try {
        const newQuotation = new Quotation(req.body);
        await newQuotation.save();
        res.status(201).json(newQuotation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
