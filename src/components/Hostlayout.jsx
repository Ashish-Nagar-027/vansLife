import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'



const activeLinkStyle = { 
  textDecoration: 'underline',
  fonWeight:'bold',
  color: 'black'
  
}


const Hostlayout = () => {
  return (
    <>
    <nav className='dashboard-nav'>

        <NavLink 
        style={({isActive}) => isActive ? activeLinkStyle : null } 
        className='link' 
        end
        to='.'>
          Dashboard
          </NavLink>

        <NavLink 
        className='link' 
        style={({isActive}) => isActive ? activeLinkStyle : null } 
        to='income'>
          Income
          </NavLink>

        <NavLink 
        className='link' 
        style={({isActive}) => isActive ? activeLinkStyle : null } 
        to='vans'>
          Vans
          </NavLink>

        <NavLink 
        style={({isActive}) => isActive ? activeLinkStyle : null } 
        className='link' 
        to='reviews'>
          Reviews
          </NavLink>
    </nav>

    <Outlet />

    </>
  )
}

export default Hostlayout