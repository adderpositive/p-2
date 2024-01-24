import React, { FormEvent, useState } from 'react'

const App = () => {
  const [input, setInput] = useState(0)
  const [result, setResult] = useState<string | null>(null)
  const [status, setStatus] = useState<number | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch(`/?input=${input}`, {
      method: 'POST'
    })
    const responseText = await response.text()

    setStatus(response.status)
    setResult(responseText)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        value={input}
        onChange={(e) => {
          const value = e.target.value
          const number = Number(value)

          // here can more validation
          setInput(number)
        }}
      />
      {result !== null && (
        <p style={{ color: status === 200 ? 'green' : 'red' }}>
          Result: {result}
        </p>
      )}
      <button type='submit'>Calculate</button>
    </form>
  )
}

export default App
