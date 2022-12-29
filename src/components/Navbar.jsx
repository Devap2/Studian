import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        {/* Navigation bar with four links */}
      <nav className="navbar">
          <div className="logo-div">
            <Link to="/" className="navbar-link-logo">Studian</Link>
          </div>
          <div className="navbar-links-div">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/todo" className="navbar-link">To Do</Link>
            <Link to="/about-us" className="navbar-link">About Us</Link>
            <Link to="/contact" className="navbar-link">Contact</Link>
            <Link to="/login" className="navbar-link-account">Account</Link>
          </div>
      </nav>
    </div>
  )
}

export default Navbar