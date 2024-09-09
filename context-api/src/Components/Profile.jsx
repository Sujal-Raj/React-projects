import React, { useContext } from 'react'
import Login from './Login'
import { UserContext } from './Context/Username';

function Profile() {
  const { user,setUser } = useContext(UserContext);
  return (
    <div>
        <h2>Welcome:{user?user:"guest"}</h2>
    </div>
  )
}

export default Profile