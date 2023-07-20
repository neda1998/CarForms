import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Header.css"
import {ContextSite} from '../../context/ContextWebsite'

const Header = () => {
    return (
        <ContextSite.Consumer>
            {
                () => (
                    <div className='header flexAlign'>
                        <Link to="/">
                            <span>خانه</span>
                        </Link>
                        <Link to="drivingOffences">
                            <span>انواع جریمه</span>
                        </Link>
                        <Link to="cartag">
                            <span>استعلام</span>
                        </Link>
                        <Link to="registerfines">
                            <span>ثبت جریمه ها</span>
                        </Link>
                    </div>
                )
            }
        </ContextSite.Consumer>
    )
}

export default Header