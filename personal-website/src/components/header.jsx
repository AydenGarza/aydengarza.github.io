import { Link, useLocation } from 'react-router-dom'
import PageHeaderStyling from './Header.module.css'
import logo from '../pages/icons/site_logo.png'
import { useState , useEffect } from 'react';


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

    const [pageWidth, updatePageWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleWindowResizing = () => { updatePageWidth(window.innerWidth)}
        window.addEventListener("resize", handleWindowResizing); 

        return () => window.removeEventListener("resize", handleWindowResizing);
    }, []);

    function NavBarRegular({className}){
        return <div className={PageHeaderStyling.PageHeader}>
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


    

    function NavBarHamburger({className}){
        return <div className={PageHeaderStyling.PageHeader}>
                    <div className={PageHeaderStyling.LogoContainer}><Link to="/home"><img src={logo} alt="Ayden Garza" className = {PageHeaderStyling.Logo}/></Link></div>
                    <h1>hamburger</h1>
                </div>

    }

    return pageWidth > 870 ? <NavBarRegular className = {className}/> : <NavBarHamburger className = {className}/>
}



export default Header;