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
                        Hi, I'm Ayden.
                    </h1>
                    <p className={HomePageStyle.subtitle}>
                        Computer Science Student & Aspiring Software Engineer
                    </p>
                </div>
                
                <div className={HomePageStyle.content}>
                    <p className={HomePageStyle.text}>
                        I'm a computer science student at Colorado State University with a passion for 
                        software engineering, mathematics, and data science. I love building things that 
                        solve real-world problems and learning new technologies along the way.
                    </p>
                    <p className={HomePageStyle.text}>
                        From neural networks to web applications, I enjoy diving deep into how things work. 
                        Recently, I've been exploring machine learning and modern web development.{' '}
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
