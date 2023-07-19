import React from 'react'
import "../../styles/Welcome.css"
import Button from '../Button/Button'

const Welcome = () => {
  return (
    <div className='welcome flexCol'>
      <h1>خوش امدید</h1>
     <Button pathDiff="cartcar" text="ثبت اطلاعات"/>
    </div>
  )
}

export default Welcome