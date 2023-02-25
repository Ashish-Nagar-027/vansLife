import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {

  const { hostedvan } = useOutletContext()


  return (
    <div>
      <img className='host-van-img' src={hostedvan.imageUrl}></img>
    </div>
  )
}

export default HostVanPhotos