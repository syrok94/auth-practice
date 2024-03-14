// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Card = (prop) => {
  return (
    <div className='card'>
        <h1>{prop.name}</h1>
        <p>{prop.disc}</p>
        <button>add to cart</button>
    </div>
  )
}

export default Card