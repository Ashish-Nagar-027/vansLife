import React from 'react'

import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  const { hostedvan } = useOutletContext()


  return (
    <h3>
        ${hostedvan.price} <span style={{fontWeight:'normal'}}>/day</span>
    </h3>
  )
}

export default HostVanPricing