import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Host_Van_Details = () => {

  const { hostedvan } = useOutletContext()
 

  return (
    <div 
    className='Host-van-info'
    style={{display:'flex', 
    flexDirection:'column',
    gap:'1rem',
    paddin:'1rem'}}>
      <h4>Name : <span>{hostedvan.name}</span></h4>
      <h4>Category : <span>{hostedvan.type}</span></h4>
      <h4>Description : <span>{hostedvan.description}</span></h4>
      <h4>Visibility : <span>public</span></h4>
    </div>
  )
}

export default Host_Van_Details