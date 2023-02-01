import { FormEvent, useState } from 'react'

export const LogIn = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e: FormEvent) => {
      e.preventDefault()
        setisLoggedIn(true) 
    }
    const handleLogout = () => {
        setisLoggedIn(false)
    }
  return (
    <form>
      <input type='text' value = {username} onChange={e => setUsername(e.target.value)} placeholder= 'email address' autoComplete='email'/>
      <input type='password' value = {password} onChange={e => setPassword(e.target.value)} placeholder= 'password' autoComplete='password'/>
        <button type='submit' onClick={handleLogin}>LogIn</button>
        
        {/* <div>User is {isLoggedIn ? 'logged in': 'logged out'}</div> */}
        </form>
  )
}

export default LogIn