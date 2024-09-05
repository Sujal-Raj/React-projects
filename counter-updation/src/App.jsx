import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseValue = ()=>{
    if(count>=20) return

    else{
      setCount(count+1);
    }
  }
  const decreaseValue = ()=>{
    if(count<=0) return

    else{
      setCount(count-1);
    }
  }

  return (
    <>
     <h1>Counter {count}</h1>
     <button onClick={increaseValue}>Add value</button>
     <button onClick={decreaseValue}>substract value</button>
    </>
  )
}

export default App
