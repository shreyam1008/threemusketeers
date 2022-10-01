import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className='header_page'>
        <div className='header_navbar'>
            <div className='header_logo'>
                <h1>Three Musketeers</h1>
            </div>
            <div className='menu'>
                <ul>
                    <NavLink className="menu_link" to ='/'>Home</NavLink>
                </ul>
                <ul>
                    <NavLink className="menu_link" to ='/chat'>Chat </NavLink>
                </ul>
                <ul>
                    <NavLink className="menu_link" to = '/quiz'>Quiz</NavLink>
                </ul>
            </div>
            <div className='header_user'>
                <h3>user?</h3>
            </div>
        </div>
    </div>
  )
}

export default Header