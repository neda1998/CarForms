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
                        <Link to="aboutus">
                            <span>درباره ما</span>
                        </Link>
                        <Link to="contact">
                            <span>تماس باما</span>
                        </Link>
                    </div>
                )
            }
        </ContextSite.Consumer>
    )
}

export default Header