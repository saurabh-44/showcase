const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");

// MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log(err));

// Routes
const apiLeadRoutes = require("./routes/apiLeadRoutes");
const webRoutes = require("./routes/webRoutes");

// API Routes
app.use("/api/leads", apiLeadRoutes);

// Web Routes
app.use("/", webRoutes);


// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
