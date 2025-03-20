const express = require("express");
const router = express.Router();
const SparePart = require("../models/sparePartModel");

// Get all spare parts
router.get("/", async (req, res) => {
    try {
        const spareParts = await SparePart.find();
        res.json(spareParts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a single spare part by ID
router.get("/:id", async (req, res) => {
    try {
        const sparePart = await SparePart.findById(req.params.id);
        if (!sparePart) return res.status(404).json({ message: "Spare part not found" });
        res.json(sparePart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new spare part
router.post("/", async (req, res) => {
    try {
        const newSparePart = new SparePart(req.body);
        await newSparePart.save();
        res.status(201).json(newSparePart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a spare part by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedSparePart = await SparePart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSparePart) return res.status(404).json({ message: "Spare part not found" });
        res.json(updatedSparePart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a spare part by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedSparePart = await SparePart.findByIdAndDelete(req.params.id);
        if (!deletedSparePart) return res.status(404).json({ message: "Spare part not found" });
        res.json({ message: "Spare part deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
