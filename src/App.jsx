import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [color, setColor] = useState('')

  const incHandler = () => {
    const newCount = count + 1
    if(newCount >= 15) {
      setColor('hot')
    }
    setCount(newCount)
  }

  const decHandler = () => {
    const newCount = count - 1
    if(newCount < 15) {
      setColor('cold')
    }
    setCount(newCount)
  }

  return (
    <div className="App">
      <div className={`container ${color}`}>
        <div className="top-container">
          <div className="temperature">{count} °C</div>
        </div>
        <div className="bottom-container">
          <button type='button' name='inc' onClick={incHandler}>+</button>
          <button type='button' onClick={decHandler}>-</button>
        </div>
      </div>      
    </div>
  )
}

export default App
