import React from 'react'
import "../../styles/Welcome.css"
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='welcome flexCol'>
      <h1>خوش امدید</h1>
      <Link to="caracart" className='btnFormWel'>
        <button type='submit' >ثبت اطلاعات</button>
      </Link>
    </div>
  )
}

export default Welcome