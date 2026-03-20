const express = require("express");
const router = express.Router();

const analyzeCodeAI = require("../services/aiService");
const Analysis = require("../models/Analysis");

// POST
router.post("/analyze-code", async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ msg: "Code is required" });
    }

    const aiResult = await analyzeCodeAI(code);

    console.log("Saving to DB...");

    await Analysis.create({
      code: code,
      result: aiResult,
    });

    res.json({ result: aiResult });
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ ADD THIS
router.get("/history", async (req, res) => {
  try {
    const history = await Analysis.find().sort({ createdAt: -1 });
    res.json(history);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
