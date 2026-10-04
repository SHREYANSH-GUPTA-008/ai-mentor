const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const { GoogleGenAI } = require("@google/genai")

const app = express()

app.use(cors())
app.use(express.json())

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
})

app.post("/api/mentor", async (req, res) => {
  const problem = req.body.problem

  const response = await ai.models.generateContent({
    model: "gemini-3.8-flash",
    contents: `You are a helpful mentor for young people.

Give practical, encouraging and thoughtful guidance.

The user's problem is:

${problem}`
  })

  res.json({
    message: response.text
  })
})

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000")
})