import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">  
      <span className="heading">WebDen Symptom Checker</span>
      <Outlet/>
{/* I can out a footer note inside the div here */}
     
      <h5>Working this project with 🤎✨</h5> 
    </div>
  )
}

export default Layout