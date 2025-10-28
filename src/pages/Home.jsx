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
                        I'm a computer science student at Colorado State University (4.0 GPA) passionate about 
                        building full-stack applications, optimizing distributed systems, and exploring machine 
                        learning. I recently interned at OHEL Technologies, working with Python, Elasticsearch, 
                        and REST APIs to build data pipelines for production systems.
                    </p>
                    <p className={HomePageStyle.text}>
                        From neural networks built from scratch to distributed TCP messaging systems, I love 
                        diving deep into how things work.{' '}
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
