import { useState } from "react"
import Component from "./Component"

function App() {

  const [counter, setCounter] = useState(0)

  const plusCounter = () => {
    setCounter(counter + 1)
  }

  const minusCounter = () => {
    if (counter == 0) {
      alert("Counter can't be negative!")
      return
    }
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>
        User Counter {counter}
      </h1>

      <button onClick={plusCounter}>
        Plus (+)
      </button>
      <br />
      <button onClick={minusCounter}>
        Minus (-)
      </button>
    </>
  )
}

export default App
