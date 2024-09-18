import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increase(){
    setCount((count)=> count + 1);
  }
  function decrease(){
    setCount((count) => count - 1);
  }
  return (
    <>
      
      <div className="card">
       <h1>counter: {count}</h1> 
        <button onClick={decrease}>
        Decrease
        </button>
        <button onClick={increase}>
        Increment
        </button>
        
      </div>
      
    </>
  )
}

export default App
