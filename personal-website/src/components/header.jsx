import {Link} from 'react-router-dom'
import PageHeaderStyling from './Header.module.css'
import logo from '../pages/icons/site_logo.png'

function Header( {className}){
    return<div className={PageHeaderStyling.PageHeader}>
        <div className={PageHeaderStyling.LogoContainer}><a href="/home"><img src={logo} alt="Ayden Garza" className = {PageHeaderStyling.Logo}/></a></div>
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