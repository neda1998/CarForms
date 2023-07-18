import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartCar from '../pages/CartCar/CartCar'
import Home from '../pages/Home/Home'

const RouteWebsite = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='cartcar' element={<CartCar />} />
      </Routes>
    </div>
  )
}

export default RouteWebsite