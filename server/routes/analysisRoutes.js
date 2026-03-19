const express = require("express");
const router = express.Router();
const analyzeCodeAI = require("../services/aiService");
const Analysis = require("../models/analysis");

router.post("/analyze-code", async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ msg: "Code is required" });
    }

    const aiResult = await analyzeCodeAI(code);

    // SAVE TO DATABASE
    const newAnalysis = await Analysis.create({
      code,
      result: aiResult,
    });

    res.json({ result: aiResult });
  } catch (err) {
    console.error("FULL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
