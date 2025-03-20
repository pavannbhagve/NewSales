const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Import Routes
const quotationRoutes = require("./routes/quotationRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const leadRoutes = require("./routes/leadRoutes");
const sparePartRoutes = require("./routes/sparePartRoutes");
const amcRoutes = require("./routes/amcRoutes");

// Use Routes
app.use("/api/quotations", quotationRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/spareparts", sparePartRoutes);
app.use("/api/amc", amcRoutes);

// ✅ Add Default Route to Fix "Cannot GET /"
app.get("/", (req, res) => {
    res.send("Welcome to Sales Tracker API 🚀");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
