const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/mentor", (req, res) => {
  const problem = req.body.problem

  res.json({
    message: `You said: ${problem}`
  })
})

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000")
})