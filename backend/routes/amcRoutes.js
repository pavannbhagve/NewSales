const express = require("express");
const router = express.Router();
const AMC = require("../models/amcModel");

// Get all AMC contracts
router.get("/", async (req, res) => {
    try {
        const amcs = await AMC.find();
        res.json(amcs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single AMC contract by ID
router.get("/:id", async (req, res) => {
    try {
        const amc = await AMC.findById(req.params.id);
        if (!amc) return res.status(404).json({ message: "AMC contract not found" });
        res.json(amc);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new AMC contract
router.post("/", async (req, res) => {
    try {
        const newAMC = new AMC(req.body);
        await newAMC.save();
        res.status(201).json(newAMC);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update an AMC contract by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedAMC = await AMC.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAMC) return res.status(404).json({ message: "AMC contract not found" });
        res.json(updatedAMC);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete an AMC contract by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedAMC = await AMC.findByIdAndDelete(req.params.id);
        if (!deletedAMC) return res.status(404).json({ message: "AMC contract not found" });
        res.json({ message: "AMC contract deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
