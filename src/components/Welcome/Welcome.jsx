import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <Link to="cartcar">
      <button>go to carts</button>
      </Link>
    </div>
  )
}

export default Welcome