import React from 'react'
import { Link } from 'react-router-dom'
import icono_logo from "../assets/logo-black.png"
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className='container_nav'>
    <Link to="/"><img src={icono_logo} alt="" /></Link>
    <div className="nav_links">
      <ul className='menu'>
        <li><Link to="/">Home</Link></li>
      </ul>
    </div>
    
  </nav>
  )
}

export default NavBar