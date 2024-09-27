import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue =()=>{
    if(count>=20) return;
    setCount(count + 1);
  }

  const  subtractValue =()=>{
    if(count<=0) return;
    setCount(count - 1);
  }

  return (
    <>
      <h1>My counter is: {count}</h1>
      <button
      onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button
      onClick={subtractValue}>Decrease Value</button>
    </>
  )
}

export default App
