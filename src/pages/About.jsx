import Header from '../components/Header.jsx';
import AboutPageStyle from './About.module.css';
import Footer from '../components/Footer.jsx';

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
                            I'm a computer science student at Colorado State University with a 4.0 GPA, 
                            expected to graduate in May 2027. I'm passionate about building innovative software 
                            solutions that solve real-world problems.
                        </p>
                        <p>
                            My love for mathematics and technology led me to pursue computer science with a focus 
                            on machine learning, distributed systems, and full-stack development. I recently completed 
                            a software engineering internship at OHEL Technologies, where I worked on data pipelines, 
                            Elasticsearch optimization, and REST API integration.
                        </p>
                        <p>
                            When I'm not coding or studying, I love spending time with my family and 4 dogs, 
                            going to the movies with friends, and participating in educational volunteer work. 
                            I'm also actively involved in SEO EDGE, a professional development program focused 
                            on technical skills and career growth.
                        </p>
                    </div>
                </section>

                <section className={AboutPageStyle.section}>
                    <h2 className={AboutPageStyle.sectionTitle}>what i do</h2>
                    <div className={AboutPageStyle.content}>
                        <p>
                            My coursework at CSU has given me solid foundations in Data Structures, Algorithms, 
                            Software Development, Software Engineering, Distributed Systems, Machine Learning, 
                            Operating Systems, and Linear Algebra for Data Scientists. I've also explored Virtual 
                            Worlds and Computer Systems Foundations, giving me a well-rounded technical background.
                        </p>
                        <p>
                            During my internship at OHEL Technologies (January-May 2024), I developed data collection 
                            tools in Python, built data pipelines integrating multiple e-commerce APIs with Elasticsearch, 
                            and optimized cloud database architecture. I worked extensively with REST APIs, Elastic Cloud, 
                            and Kibana to process and normalize data from various sources.
                        </p>
                        <p>
                            I'm proficient in Python, Java, C++, JavaScript, C#, and SQL, with hands-on experience 
                            in React, Linux, PyTorch, Spark, Hadoop, and cloud technologies. I practice Agile Software 
                            Engineering, Test Driven Development, and CI/CD workflows. Currently, I'm exploring agentic 
                            AI and advanced prompt engineering while building full-stack applications.
                        </p>
                    </div>
                </section>

                <section className={AboutPageStyle.section}>
                    <h2 className={AboutPageStyle.sectionTitle}>professional development</h2>
                    <div className={AboutPageStyle.content}>
                        <p>
                            Since June 2024, I've been participating in SEO EDGE through SEO Career, where I receive 
                            coaching and instruction to achieve targeted interview, technical, and professional goals. 
                            The program focuses on business fundamentals, industry-specific training, and developing 
                            the technical skills and institutional knowledge needed to compete successfully for 
                            internship opportunities.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default About;
