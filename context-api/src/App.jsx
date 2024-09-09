import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { UserContext } from './Components/Context/Username'

function App() {
  const [user, setUser] = useState("")

  return (
    <>
    <UserContext.Provider value={{user,setUser}}>

      <Login/>
      <Navbar/>
    </UserContext.Provider>
    </>
  )
}

export default App
