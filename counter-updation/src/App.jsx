import { useState } from 'react'
import './App.css'

function App() {
  //count has a logic that  it will be incremented by 1 every time the button is clicked and decrease by 1 when clicked on another button ans its value will remain between  0 and 20;
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
