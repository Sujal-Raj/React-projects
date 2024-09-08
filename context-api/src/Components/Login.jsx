import React from 'react'
import { useState } from "react";

function Login() {
    const [user, setUser] = useState("");
  return (
    <div>
        <h1>Login To Proceed</h1>
        <form action="">
            <input onChange={(e)=>setUser(e.target.value)} value={user} type="text" name="" id="username" placeholder='Username' />
            <br />
            <input type="password" name="" id="password" placeholder='Password' />
            <br />
            <input onClick={(e)=>{e.preventDefault()}} type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Login