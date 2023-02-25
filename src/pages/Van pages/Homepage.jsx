import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
      <div className='Homepage'>
        <div className="home-container">
         <h1>You got the travel plans, we got the the travel vans.</h1>
         <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button className='Btn'> <Link to='/vans' className='link'>Fint your van</Link></button>
         </div>
      </div>

  )
}

export default Homepage