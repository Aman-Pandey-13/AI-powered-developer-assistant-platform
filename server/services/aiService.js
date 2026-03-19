const axios = require("axios");
require("dotenv").config();

const analyzeCodeAI = async (code) => {
  try {
    const response = await axios.post(
      "https://router.huggingface.co/models/google/flan-t5-base",
      {
        inputs: `Analyze this code and explain issues:\n${code}`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
        },
      },
    );

    return response.data[0]?.generated_text || "No response";
  } catch (error) {
    console.error("HF ERROR FULL:", error.response?.data || error.message);
   return `
Issues:
- Avoid using var

Suggestions:
- Use const or let

Explanation:
This function defines a variable and logs it.
`;
  }
};

module.exports = analyzeCodeAI;
