import { NavLink } from 'react-router-dom'
import React from 'react'
function Header() {
  return (
    <div className="Header">
      <nav className="navbar_desktop">
        <ul>
          <li>
            <NavLink to="/" />
          </li>
          <li>
            <NavLink to="/about" />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
