import Header from '../components/Header.jsx'
import HomePageStyle from './Home.module.css'
import linkedInIcon from './icons/linkedinicon.png'
import githubIcon from './icons/ghicon.png'
import emailIcon from './icons/emailicon.png'
import {Link} from 'react-router-dom'
import headShot from './images/headshot.jpeg'

function Home() {
    return <>
        <Header className="header"></Header>
        <div className = {HomePageStyle.pageContainer}>

            <div className = {HomePageStyle.imageContainer}>
                <img src={headShot} alt="Headshot" className = {HomePageStyle.headShot}/>
            </div>

            <div className = {HomePageStyle.contentContainer}>

                

                <h1 className = {HomePageStyle.greeting}> 
                    Hi, I'm Ayden.
                </h1>

                <main className={HomePageStyle.content}>
                    Welcome to my site! I'm a computer science student at Colorado State University and a software engineering intern at OHEL Technologies. A <div className={HomePageStyle.KeepTogether}><Link to="/about" className={HomePageStyle.InParaLink}>tech nerd at heart</Link></div>, I love all things software, math, and machine learning. Some of my recent projects involve digital logic and legendary knights, <div className={HomePageStyle.KeepTogether}><Link to="/projects" className={HomePageStyle.InParaLink}>check them out</Link></div>!
                </main>
                {/* width 870 is when stuff starts looking bad */}

            </div>
            
        </div>

        <ul className = {HomePageStyle.IconList}>
            <li><a href="https://linkedin.com/in/ayden-garza" target="_blank" rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn" className= {HomePageStyle.SocialIcon}/></a></li>
            <li><a href="https://github.com/AydenGarza" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub" className={HomePageStyle.SocialIcon}/></a></li>
            <li><a href="mailto:aydenjgarza@gmail.com" ><img src={emailIcon} alt="Email" className={HomePageStyle.SocialIcon}/></a></li>
        </ul>
        
    </>
}

export default Home;