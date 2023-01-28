import { useState } from 'react'

export const LogIn = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const handleLogin = () => {
        setisLoggedIn(true) 
    }
    const handleLogout = () => {
        setisLoggedIn(false)
    }
  return (
    <div>l
        <button onClick={handleLogin}>LogIn</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn ? 'logged in': 'logged out'}</div>
        </div>
  )
}

export default LogIn