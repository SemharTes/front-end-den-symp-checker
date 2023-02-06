import { FormEvent, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export const LogIn = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [adminName, setAdminName] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async(e: FormEvent) => {
      e.preventDefault()

      const response = await axios.get("http://127.0.0.1:5000/admin")
      const admins = response.data
      const admin =  admins.find(
        (a: {admin_name: string, password:string}) => {
          return a.admin_name === adminName && a.password === password

        }
      ) 
      console.log(admin)
      if (admin ){
        navigate ("/admin")
      }else{
        toast.error("Incorrect adminName or password")
      }
        setisLoggedIn(true) 
    }
    // const handleLogout = () => {
    //     setisLoggedIn(false)
    // }
  return (
    <form className='login'>
      <div>Admin Login</div>
      <div> <input type='text' value = {adminName} onChange={e => setAdminName(e.target.value)} placeholder= 'admin name' autoComplete='admin'/> </div> 
      <div><input type='password' value = {password} onChange={e => setPassword(e.target.value)} placeholder= 'password' autoComplete='password'/></div>
      <button type='submit' onClick={handleLogin}>Log In</button>
        
        {/* <div>User is {isLoggedIn ? 'logged in': 'logged out'}</div> */}
    </form>
  )
}

export default LogIn