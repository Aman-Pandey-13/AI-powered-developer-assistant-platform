const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = require("./config/db");

connectDB();
app.get("/", (req, res) => {
  res.send("API is running...");
});

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

const analysisRoutes = require("./routes/analysisRoutes");

app.use("/api", analysisRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
