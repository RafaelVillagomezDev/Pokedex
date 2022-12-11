import { NavLink } from 'react-router-dom'
import React from 'react'
function Header() {
  return (
    <div className="Header">
      <nav className="navbar_desktop">
        <div id="navbar_logo">
          <img srcSet="./assets/pokedex.png" alt="logo_pokedex" />
        </div>
        <div id="navbar_desktop_link">
          <ul>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <li>
              <NavLink to="/about"> About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
