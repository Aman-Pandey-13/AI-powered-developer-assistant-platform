const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema(
  {
    code: String,
    result: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Analysis", analysisSchema);