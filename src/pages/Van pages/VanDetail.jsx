import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const VanDetail = () => {
    const params = useParams()

    const [van, setVan] = useState(null)

    useEffect(() => {
        
        fetch(`/api/vans/${params.id}`)
        .then(jsonData => jsonData.json())
        .then(vanData => setVan(vanData.vans))

    }, [params])
    


  return (
    <div className='vanDetails-container'>
        {van ? 
            (<div className='van-div van-details-div' >
                <Link className='link' to={'/vans'}> &#8592; Back to all Vans</Link>
                <img src={van.imageUrl} className='van-height' />
                <i className={`van-type ${van.type} `}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className='van-price '>{van.price} <span>$</span></p>
                <p>{van.description}</p>
                <button className='Btn rent-van-btn'>Rent this van</button>
            </div>) : 
            <h1>Loading . . .</h1>


        }
    </div>
  )
}

export default VanDetail