import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartCar from '../pages/CartCar/CartCar'
import Home from '../pages/Home/Home'
import NewOwner from '../pages/ListNewOwner/NewOwner'

const RouteWebsite = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='cartcar' element={<CartCar />} />
        <Route path='cartcar/newowner' element={<NewOwner />} />
      </Routes>
    </div>
  )
}

export default RouteWebsite