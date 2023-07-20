import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartCar from '../pages/CartCar/CartCar'
import Home from '../pages/Home/Home'
import NewOwner from '../pages/CartCar/NewOwner'
import CarTag from '../pages/CarTag/CarTag'
import DrivingOffences from '../pages/DrivingOffences/DrivingOffences'
import NewOffences from '../pages/DrivingOffences/NewOffences'
import RegisterFines from '../pages/RegisterOfFines/RegisterFines'

const RouteWebsite = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='cartag' element={<CarTag />} />
        <Route path='cartcar' element={<CartCar />} />
        <Route path='cartcar/newowner' element={<NewOwner />} />
        <Route path='drivingOffences' element={<DrivingOffences />} />
        <Route path='drivingOffences/newoffences' element={<NewOffences />} />
        <Route path="registerfines" element={<RegisterFines />}/>
      </Routes>
    </div>
  )
}

export default RouteWebsite