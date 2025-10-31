import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import HomePageStyle from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className={HomePageStyle.page}>
            <Header />
            <main className={HomePageStyle.main}>
                <div className={HomePageStyle.hero}>
                    <h1 className={HomePageStyle.title}>
                        hi, i'm ayden
                    </h1>
                    <p className={HomePageStyle.subtitle}>
                        cs @ colorado state ; aspiring software engineer
                    </p>
                </div>
                
                <div className={HomePageStyle.content}>
                    <p className={HomePageStyle.text}>
                        I'm a computer science student at Colorado State University. My studies concentrate in ML and AI, but I also have an unrequited love for embedded software and all things hardware-adjacent.
                        I hope to work as a software engineer in an ML or embedded role in the future, and am currently looking for an internship to help me towards that end.

                    </p>
                    <p className={HomePageStyle.text}>
                        <Link to="/about" className={HomePageStyle.link}>
                            Learn more about me
                        </Link>
                        {' '}or{' '}
                        <Link to="/projects" className={HomePageStyle.link}>
                            check out my projects
                        </Link>
                        .
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
