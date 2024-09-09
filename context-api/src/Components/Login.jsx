import React, { useContext } from 'react'
import { useState } from "react";
import { UserContext } from './Context/Username';

function Login() {
    // const [user, setUser] = useState("");
    const { setUser } = useContext(UserContext);
    const [localuser, setLocaluser] = useState("")
  return (
    <div>
        <h1>Login To Proceed</h1>
        <form action="">
            <input onChange={(e)=>setLocaluser(e.target.value)} value={localuser} type="text" name="" id="username" placeholder='Username' />
            <br />
            <input type="password" name="" id="password" placeholder='Password' />
            <br />
            <input onClick={(e)=>{e.preventDefault();
              setUser(localuser);
            }} type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Login