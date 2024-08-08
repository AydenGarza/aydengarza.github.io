import Header from '../components/Header.jsx'
import ProjectsPageStyle from './Projects.module.css'
import Footer from '../components/Footer.jsx';

function Projects(){
    return <>
        <div className = {ProjectsPageStyle.pageContainer}>
            <Header className="header"></Header>
            <span>Projects Page</span>
        </div>
        <Footer></Footer>
    </>
}

export default Projects