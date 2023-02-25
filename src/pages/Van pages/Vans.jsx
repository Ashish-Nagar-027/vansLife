import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'



const Vans = () => {

  const [vans, setVans] = useState([])

  useEffect(()=> {
    
    fetch("/api/vans")
    .then(res => res.json())
    .then(data => setVans(data.vans))

  },[])


  return (
    <div className='vans'>
      <h2>Explore our van options</h2>
      <div className='van-list'>
       {
        vans.map(van => (
           <div key={van.id} className='van-div'>
            <Link className='link van-div ' to={`/vans/${van.id}`}>
            <img src={van.imageUrl} alt="van-image" />
            <div className='van-details'>
              <h3>{van.name}</h3>
              <p>{van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} `}>{van.type}</i>
            </Link>
           </div>
        ))
       }
       </div>
    </div>
  )
}

export default Vans