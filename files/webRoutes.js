const express = require("express");
const router = express.Router();

const Lead = require("../models/Lead");


// Home Page
router.get("/", async (req, res) => {

    const leads = await Lead.find().sort({ createdAt: -1 });

    res.render("index", { leads });
});


// Add Lead
router.post("/add", async (req, res) => {

    await Lead.create(req.body);

    res.redirect("/");
});


// Edit Page
router.get("/edit/:id", async (req, res) => {

    const lead = await Lead.findById(req.params.id);

    res.render("edit", { lead });
});


// Update Lead
router.put("/edit/:id", async (req, res) => {

    await Lead.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/");
});


// Delete Lead
router.delete("/delete/:id", async (req, res) => {

    await Lead.findByIdAndDelete(req.params.id);

    res.redirect("/");
});


module.exports = router;
    