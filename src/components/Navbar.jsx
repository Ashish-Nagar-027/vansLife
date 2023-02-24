import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div  className='Navbar' >
        <Link className='link logo' to='/'>#VANLIFE</Link>
        <div className='navbar_links'>
            <Link  className='link' to='/about'>About</Link>
            <Link   className='link' to='/vans'>Vans</Link>
        </div>
    </div>
  )
}

export default Navbar