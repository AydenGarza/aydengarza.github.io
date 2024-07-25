import { Link, useLocation } from 'react-router-dom'
import PageHeaderStyling from './Header.module.css'
import logo from '../pages/icons/site_logo.png'

function Header( {className}){
    const location = useLocation();

    function isActivePage(path){
        if (path === '/home'){
            if (location.pathname === '/home' || location.pathname === '/'){
                return true;
            }
        }
        return location.pathname === path;
    }

    return<div className={PageHeaderStyling.PageHeader}>
        <div className={PageHeaderStyling.LogoContainer}><Link to="/home"><img src={logo} alt="Ayden Garza" className = {PageHeaderStyling.Logo}/></Link></div>
            <ul>
                <Link to="/home" className={`${PageHeaderStyling.navLink} ${isActivePage('/home') ? PageHeaderStyling.activeNavLink : ''}`}>
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/about" className={`${PageHeaderStyling.navLink} ${isActivePage('/about') ? PageHeaderStyling.activeNavLink : ''}`}>
                    <li>
                        About
                    </li>
                </Link>
                <Link to="/projects" className={`${PageHeaderStyling.navLink} ${isActivePage('/projects') ? PageHeaderStyling.activeNavLink : ''}`}>
                    <li>
                        Projects
                    </li>
                </Link>
            </ul>
        </div>
}

export default Header;