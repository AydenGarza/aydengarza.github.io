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
                <span className={AboutPageStyle.answer}>Im Ayden Garza</span>
            </div>

            <div className={AboutPageStyle.questionAnswerBlock}>
                <span className={AboutPageStyle.headerQuestion}>What I Do</span>
                <span className={AboutPageStyle.answer}>i eat sleep code and repeat</span>
            </div>

            <div className={AboutPageStyle.questionAnswerBlock}>
                <span className={AboutPageStyle.headerQuestion}>What I Know</span>
                <span className={AboutPageStyle.answer}>I know how to code for the most part xD</span>
            </div>
            

            
        </div>
        
    </div>
    <Footer></Footer>
    </>
}

export default About