import React from 'react'
import { Link, NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div  className='Navbar' >
        <Link className='link logo' to='/'>#VANLIFE</Link>
        <div className='navbar_links'>
            <NavLink  className={({isActive}) => isActive ? 'link active-link' : 'link'} to='/host'>Host</NavLink>
            <NavLink  className={({isActive}) => isActive ? 'link active-link' : 'link'} to='/about'>About</NavLink>
            <NavLink   className={({isActive}) => isActive ? 'link active-link' : 'link'} to='/vans'>Vans</NavLink>
        </div>
    </div>
  )
}

export default Navbar