import Header from '../components/Header.jsx'
import ProjectsPageStyle from './Projects.module.css'
import Footer from '../components/Footer.jsx';

function Projects(){
    return <>
        <div className = {ProjectsPageStyle.pageContainer}>
            <Header className="header"></Header>
            <div className={ProjectsPageStyle.contentContainer}>
                <h1>Projects</h1>
            </div>
            <Footer></Footer>
        </div>
    </>
}

export default Projects