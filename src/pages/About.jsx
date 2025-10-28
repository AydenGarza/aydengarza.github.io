import Header from '../components/Header.jsx';
import AboutPageStyle from './About.module.css';
import Footer from '../components/Footer.jsx';

function About() {
    return (
        <div className={AboutPageStyle.page}>
            <Header />
            <main className={AboutPageStyle.main}>
                <h1 className={AboutPageStyle.pageTitle}>About</h1>
                
                <section className={AboutPageStyle.section}>
                    <h2 className={AboutPageStyle.sectionTitle}>Who I Am</h2>
                    <div className={AboutPageStyle.content}>
                        <p>
                            I am a computer science student and aspiring software engineer with a passion 
                            for building innovative solutions.
                        </p>
                        <p>
                            My love for mathematics and the significant role computers have played in my 
                            life led me to study computer science at Colorado State University. I'm currently 
                            a sophomore with a minor in machine learning. Recently, I had the opportunity to 
                            apply my knowledge and skills by interning at OHEL Technologies as a software engineer.
                        </p>
                        <p>
                            When I'm not studying or programming, I love spending time with my family and 4 dogs, 
                            going to the movies with friends, and participating in educational volunteer work.
                        </p>
                    </div>
                </section>

                <section className={AboutPageStyle.section}>
                    <h2 className={AboutPageStyle.sectionTitle}>What I Do</h2>
                    <div className={AboutPageStyle.content}>
                        <p>
                            In my three semesters studying computer science, I've gained solid foundations in 
                            core areas like object-oriented programming, data structures, algorithms, and data 
                            analysis. This fourth semester during Spring 2025, I'm taking Algorithms, Computer 
                            Organization, Fundamentals of C++, and Software Development with Java. These classes 
                            are helping me use foundational computer science skills to tackle real-world problems 
                            in software engineering and computing.
                        </p>
                        <p>
                            Outside of my studies, I look for opportunities to learn more about software engineering. 
                            I build projects that help me learn new technologies or solve real-world problems. I also 
                            look to sharpen my skills by using them in professional working environments. I had such 
                            an opportunity this past Spring 2024 semester as a software engineering intern at OHEL 
                            Technologies, where I used Python and the ELK stack to work on an AI application with a 
                            team of other software engineers.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default About;
