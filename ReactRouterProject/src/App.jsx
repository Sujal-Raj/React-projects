import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <h3><NavLink className={({isActive})=>`underline ${isActive?"text-red-500":"text-zinc-900"}`} to="/">Home</NavLink></h3>
        <h3><NavLink className={({isActive})=>`underline ${isActive?"text-red-500":"text-zinc-900"}`} to="/Contact">Contact</NavLink></h3>
        <h3><NavLink className={({isActive})=>`underline ${isActive?"text-red-500":"text-zinc-900"}`} to="/About" >About</NavLink></h3>
      </nav>
      <h1>Home</h1>
    </>
  )
}

export default App
