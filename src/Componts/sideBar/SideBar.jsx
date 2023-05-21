import React from 'react'
import './SideBar.css'

const SideBar = () => {
  return (
   <div className="side_bar">
    <div className="sidebar_heading ">
      <h2  style={{height:"4rem", width:"100%",display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2rem',background: "#ffc107" }}>BROWSE CATEGORIES</h2>
    </div>
      <div className="sidebar_list">
      <li style={{listStyle:'none',display:'flex',justifyContent:'center',alignItems:'center'}}>DSLR</li>
      <li style={{listStyle:'none',display:'flex',justifyContent:'center',alignItems:'center'}}>MIRRORLESS</li>
      <li style={{listStyle:'none',display:'flex',justifyContent:'center',alignItems:'center'}}>COMPACT</li>
      <li style={{listStyle:'none',display:'flex',justifyContent:'center',alignItems:'center'}}>FILM</li>
      <li style={{listStyle:'none',display:'flex',justifyContent:'center',alignItems:'center'}}>PROFESSS</li>
      </div>
   </div>
  )
}

export default SideBar