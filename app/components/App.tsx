import React, { FormEvent, useState } from 'react'

const App = () => {
  const [input, setInput] = useState(0)
  const [result, setResult] = useState<number | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch(`/?input=${input}`, {
      method: 'POST'
    })
    const responseText = await response.text()

    if (response.status !== 200 || isNaN(Number(responseText))) return

    setResult(Number(responseText))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        value={input}
        onChange={(e) => {
          const value = e.target.value
          const number = Number(value)

          if (!isNaN(number) && number >= 0) {
            setInput(number)
          }
        }}
      />
      {result !== null && <p>Result: {result}</p>}
      <button type='submit'>Calculate</button>
    </form>
  )
}

export default App
