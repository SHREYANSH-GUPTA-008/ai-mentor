import { useState } from "react"

function App() {
  const [problem, setProblem] = useState("")
  const [response, setResponse] = useState("")

  async function handleGuidance() {
  const result = await fetch("http://localhost:5000/api/mentor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      problem: problem
    })
  })

  const data = await result.json()

  setResponse(data.message)
}

  return (
    <div>
      <h1>AI Mentor</h1>

      <p>
        Share what's troubling you and get guidance.
      </p>

      <textarea
        placeholder="What's on your mind?"
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
      />

      <br />

      <button onClick={handleGuidance}>
        Get Guidance
      </button>
      <p>{response}</p>
    </div>
  )
}

export default App