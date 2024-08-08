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

        const [isPopoutActive, togglePopout] = useState(false);

        function toggleMenu () {
            togglePopout(!isPopoutActive);
        }

        function getPopoutMenuClass(poppedOut){
            if (poppedOut){
                return PageHeaderStyling.enabledPopoutMenu;
            }
            else{
                return PageHeaderStyling.disabledPoputMenu;
            }
        }

        function getHamMenuClass (poppedOut){
            if (poppedOut){
                return PageHeaderStyling.enabledHamburgerMenu;
            }
            else{
                return PageHeaderStyling.disabledHamburgerMenu;
            }
        }

        function getPopOutNavClass (poppedOut){
            if (poppedOut){
                return PageHeaderStyling.enabledPopOutNav;
            }
            else{
                return PageHeaderStyling.disabledPopOutNav;
            }
        }

        return <div className={PageHeaderStyling.PageHeader}>
                    <div className={PageHeaderStyling.LogoContainer}><Link to="/home"><img src={logo} alt="Ayden Garza" className = {PageHeaderStyling.Logo}/></Link></div>
                    <div className = {getHamMenuClass(isPopoutActive)} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className = {getPopoutMenuClass(isPopoutActive)}>
                        {/* <ul className = {getPopOutNavClass(isPopoutActive)}>
                            <li>
                                Home
                            </li>
                            <li>
                                About
                            </li>
                            <li>
                                Projects
                            </li>
                        </ul> */}
                    </div>
                </div>

    }

    return pageWidth > 870 ? <NavBarRegular className = {className}/> : <NavBarHamburger className = {className}/>
}



export default Header;