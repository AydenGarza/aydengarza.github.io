import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'
import HomePageStyle from './Home.module.css';
import {Link} from 'react-router-dom';
import headShot from './images/headshot.jpeg';

function Home() {
    return <>
        <div className = {HomePageStyle.pageContainer}>
            <Header className="header"></Header>
            
            <div className = {HomePageStyle.imageContainer}>
                <img src={headShot} alt="Headshot" className = {HomePageStyle.headShot}/>
            </div>

            <div className = {HomePageStyle.contentContainer}>

                

                <div className = {HomePageStyle.greeting}> 
                    Hi, I'm Ayden.
                </div>

                <main className={HomePageStyle.content}>
                    Welcome to my site! I'm a computer science student at Colorado State University and a software engineering intern at OHEL Technologies. A <div className={HomePageStyle.KeepTogether}><Link to="/about" className={HomePageStyle.InParaLink}>tech nerd at heart</Link></div>,I love all things software, math, and machine learning. Some of my recent projects involve digital logic and legendary knights, <div className={HomePageStyle.KeepTogether}><Link to="/projects" className={HomePageStyle.InParaLink}>check them out</Link></div>!
                </main>
            </div>
            <Footer></Footer>
        </div>
    </>
}

export default Home;