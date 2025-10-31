import Header from '../components/Header.jsx';
import AboutPageStyle from './About.module.css';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className={AboutPageStyle.page}>
            <Header />
            <main className={AboutPageStyle.main}>
                <h1 className={AboutPageStyle.pageTitle}>about</h1>
                
                <section className={AboutPageStyle.section}>
                    <h2 className={AboutPageStyle.sectionTitle}>who i am</h2>
                    <div className={AboutPageStyle.content}>
                        <p>
                            I was born in raised in San Antonio, TX, where I currently reside. I love my city and it's culture and want to continue living here.
                            Though I live in Texas, I study remotely at CSU in Fort Collins.

                        </p>

                        <p>
                            When I'm not coding or studying, I love spending time with my family and 5 dogs, 
                            catching a good movie, and participating in educational volunteer work. 
                        </p>
                    </div>
                </section>

                <section className={AboutPageStyle.section}>
                    <h2 className={AboutPageStyle.sectionTitle}>what i do</h2>
                    <div className={AboutPageStyle.content}>
                        <p>
                            At CSU I'm learning a lot about different theoretical and practical concepts in computer science.
                            The fields that I'm most interested in that I've learned about are ML / AI and embedded systems.
                            'Teaching' a computer how to recognize patterns in data, and using code to interact directly with hardware - no extra software abstractions - are very fascinating to me.
                            I've done a few projects in theres areas that I think are pretty cool.
                        </p>
                        <p>
                            During the spring semester of my freshman year (January - May 2024), I had the opportunity to intern at OHEL Technologies.
                            While at OHEL I developed data collection tools in Python that gathered real time web data, built data pipelines integrating multiple e-commerce APIs with Elasticsearch, 
                            and optimized cloud database architecture. I worked extensively with REST APIs, Elastic Cloud, 
                            and Kibana to clean and utilize data from various sources.
                        </p>
                        <p>
                            I'm most comfortable in Java and Python, having used both for Hadoop and Apache Spark projects to process large-scale data, and for developing a FastAPI based full-stack
                            mobile app that can <Link to="/projects/thriftr" className={AboutPageStyle.link} onClick={() => window.scrollTo(0, 0)}>help thrifters find better deals</Link>. Beyond that, I'm proficient in C/C++, JavaScript, and C# - using React and React Native for frontends,
                            C/C++ for hardware and OS-level work, and C# for game development. I'm also very familiar with Linux/Unix and the Bash shell.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default About;
