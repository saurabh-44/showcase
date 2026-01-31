const express = require("express");
const router = express.Router();

const Lead = require("../models/Lead");


// Get All Leads
router.get("/", async (req, res) => {

    try {

        const leads = await Lead.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            count: leads.length,
            data: leads
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });
    }

});


// Get Single Lead
router.get("/:id", async (req, res) => {

    try {

        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }

        res.json({
            success: true,
            data: lead
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: "Invalid ID"
        });
    }

});


// Create Lead
router.post("/", async (req, res) => {

    try {

        const lead = await Lead.create(req.body);

        res.status(201).json({
            success: true,
            data: lead
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });
    }

});


// Update Lead
router.put("/:id", async (req, res) => {

    try {

        const lead = await Lead.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }

        res.json({
            success: true,
            data: lead
        });

    } catch (err) {

        res.status(400).json({
            success: false,
            message: err.message
        });
    }

});


// Delete Lead
router.delete("/:id", async (req, res) => {

    try {

        const lead = await Lead.findByIdAndDelete(req.params.id);

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }

        res.json({
            success: true,
            message: "Lead deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });
    }

});


module.exports = router;
