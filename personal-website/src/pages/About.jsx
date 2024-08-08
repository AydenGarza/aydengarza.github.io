import Header from '../components/Header.jsx';
import AboutPageStyle from './About.module.css';
import Footer from '../components/Footer.jsx';

function About(){
    return <>
    <div className={AboutPageStyle.pageContainer}>
        <Header className="header"></Header>
        <div className={AboutPageStyle.contentContainer}>
            
            <div className={AboutPageStyle.questionAnswerBlock}>
                <span className={AboutPageStyle.headerQuestion}>Who I Am</span>
                <span className={AboutPageStyle.answer}> 
                    
                    <p>I am a computer science student and aspiring software engineer.</p>
                    
                    <p>The big part computers have played in my life and my love for math lead me to study computer science at Colorado
                    State University. I am currently a sophomore with a minor in machine learning. I recently had the opportunity to apply my knowledge and skills by interning at OHEL Technolgies as a software engineer.</p>
                    
                    
                    <p>When I'm not studying or programming, I love spending time with my family and 4 dogs,
                    going to the movies with friends, and participating in educational volunteer work.</p>
                </span>
            </div>

            <div className={AboutPageStyle.questionAnswerBlock}>
                <span className={AboutPageStyle.headerQuestion}>What I Do</span>

                
                <span className={AboutPageStyle.answer}>
                    <p>
                        As a student computer science student, I've had the opportunity to learn about object oriented programming, data structures, algorithms and applied mathematics. I have completed coursework in 
                        digital logic, calculus, discrete mathematics, object oriented programming, and graph theory. I'm also excited to be studying data structures and linear algebra this coming Fall 2024 semester.
                    </p>

                    <p>
                        Outside of the classroom, I look for opportunities to apply my skills in a professional working environment. I had such an opportunity this past Spring 2024 semester as a software engineering intern at OHEL Technologies.
                        During my time at OHEL, I used my skills in Python and the ELK stack to work on an AI shopping assistant with a small team of other software engineers.
                    </p>
                    
                </span>
            </div>
        </div>
        <Footer></Footer>
    </div>
    </>
}

export default About