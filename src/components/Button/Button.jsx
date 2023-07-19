import React from 'react'
import "../../styles/Button.css"
import { Link } from 'react-router-dom'

const Button = ({ text, pathDiff }) => {
    return (
        <Link to={pathDiff}>
            <button className='btnForm'>{text}</button>
        </Link>
    )
}

export default Button