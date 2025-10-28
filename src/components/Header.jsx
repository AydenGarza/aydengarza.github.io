import { Link, useLocation } from 'react-router-dom'
import PageHeaderStyling from './Header.module.css'

function Header({ className }) {
    const location = useLocation();
    
    function isActivePage(path) {
        if (path === '/home') {
            if (location.pathname === '/home' || location.pathname === '/') {
                return true;
            }
        }
        return location.pathname === path;
    }

    return (
        <nav className={PageHeaderStyling.header}>
            <div className={PageHeaderStyling.container}>
                <Link to="/home" className={PageHeaderStyling.logo}>
                    Ayden Garza
                </Link>
                <ul className={PageHeaderStyling.nav}>
                    <li>
                        <Link 
                            to="/home" 
                            className={`${PageHeaderStyling.navLink} ${isActivePage('/home') ? PageHeaderStyling.active : ''}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            className={`${PageHeaderStyling.navLink} ${isActivePage('/about') ? PageHeaderStyling.active : ''}`}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/projects" 
                            className={`${PageHeaderStyling.navLink} ${isActivePage('/projects') ? PageHeaderStyling.active : ''}`}
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
