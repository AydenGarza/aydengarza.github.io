import {Link} from 'react-router-dom'
import PageHeaderStyling from './Header.module.css'
import logo from '../pages/icons/site_logo.png'

function Header( {className}){
    return<div className={PageHeaderStyling.PageHeader}>
        <div id={PageHeaderStyling.Name}><Link to="/home" id={PageHeaderStyling.Name}>Ayden Garza</Link></div>
        <img src={logo} alt="Ayden Garza" className = {PageHeaderStyling.logo}/>
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