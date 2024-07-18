import Header from '../components/Header.jsx'
import AboutPageStyle from './About.module.css'

function About(){
    return <>
        <Header className="header"></Header>
        <h1 className={AboutPageStyle.aboutTitle}>
            About page ig lol
        </h1>
    </>
}

export default About