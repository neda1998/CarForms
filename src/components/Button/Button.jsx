import React from 'react'
import "../../styles/Button.css"
import { Link } from 'react-router-dom'

const Button = ({ text, pathDiff }) => {
    return (
        <Link to={pathDiff} className='btnFormWel'>
            <button className='btnFormWel' type='submit'></button>
        </Link>
    )
}

export default Button