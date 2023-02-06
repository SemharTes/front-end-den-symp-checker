import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">  
      <span className="heading">WebDen Symptom Checker</span>
      <Outlet/>
{/* I can put a footer note inside the div here */}
      <h5>Working this project with 🤎✨</h5> 
    </div>
  )
}
// Layout Route - A parent route without a path, used exclusively for grouping child routes inside a specific layout.
// An <Outlet> should be used in parent route elements to render their child route elements.
export default Layout