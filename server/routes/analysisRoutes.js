const express = require("express");
const router = express.Router();

// temporary test route
router.post("/analyze-code", (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ msg: "Code is required" });
  }

  res.json({
    message: "Code received successfully",
    codeLength: code.length,
  });
});

module.exports = router;
