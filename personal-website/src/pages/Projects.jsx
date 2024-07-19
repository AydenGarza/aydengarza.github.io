import Header from '../components/Header.jsx'
import ProjectsPageStyle from './Projects.module.css'

function Projects({className}){
    return <div className={className}>
        <Header className="header"></Header>
        <h1>
            Projects page
        </h1>
    </div>
}

export default Projects