import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Header.css"
import { ContextSite } from '../../context/ContextWebsite'

const Header = () => {
    return (
        <ContextSite.consumer>
            {
                () => {
                    <div className='header'>
                        <Link>
                            <span>خانه</span>
                        </Link>
                        <Link>
                            <span>درباره ما</span>
                        </Link><Link>
                            <span>تماس باما</span>
                        </Link>
                    </div>
                }
            }
        </ContextSite.consumer>
    )
}

export default Header