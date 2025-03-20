const express = require("express");
const router = express.Router();
const Lead = require("../models/leadModel");

// Get all leads
router.get("/", async (req, res) => {
    try {
        const leads = await Lead.find();
        res.json(leads);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single lead by ID
router.get("/:id", async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) return res.status(404).json({ message: "Lead not found" });
        res.json(lead);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new lead
router.post("/", async (req, res) => {
    try {
        console.log("Incoming Data:", req.body);  // Log request body
        const newLead = new Lead(req.body);
        await newLead.save();
        console.log("Lead Saved Successfully:", newLead);  // Log saved lead
        res.status(201).json(newLead);
    } catch (error) {
        console.error("Error Saving Lead:", error);
        res.status(400).json({ error: error.message });
    }
});


// Update a lead by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLead) return res.status(404).json({ message: "Lead not found" });
        res.json(updatedLead);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a lead by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedLead = await Lead.findByIdAndDelete(req.params.id);
        if (!deletedLead) return res.status(404).json({ message: "Lead not found" });
        res.json({ message: "Lead deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
