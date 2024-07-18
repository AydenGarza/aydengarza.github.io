import {Link} from 'react-router-dom'
import PageHeaderStyling from './Header.module.css'

function Header( {className}){
    return<div className={PageHeaderStyling.PageHeader}>
            <ul>
                <Link to="/home">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        About
                    </li>
                </Link>
                <Link to="/projects">
                    <li>
                        Projects
                    </li>
                </Link>
            </ul>
        </div>
}

export default Header;