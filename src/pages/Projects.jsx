import Header from '../components/Header.jsx';
import ProjectsPageStyle from './Projects.module.css';
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

function Projects() {
    const projects = [
        {
            title: "thriftr",
            description: "how do you fit ai workloads in a mobile app?",
            tags: ["React Native", "FastAPI", "AI/ML", "Full-Stack"],
            link: "/projects/thriftr",
            highlight: "real-time marketplace data + computer vision"
        },
        {
            title: "distributed tcp messaging system",
            description: "how do networks of computers communicate?",
            tags: ["Java", "Distributed Systems", "Multithreading"],
            link: "/projects/tcp-messaging",
            highlight: "multithreaded network architecture, network serialization, and packet routing from scratch"
        },
        {
            title: "portfolio website",
            description: "how do you get a site on the web?",
            tags: ["React"],
            link: "/projects/portfolio-website",
            highlight: "i figured it out"
        },
        {
            title: "neural network from scratch",
            description: "how do computers learn?",
            tags: ["Python", "AI/ML"],
            link: "/projects/neural-network",
            highlight: "tensorflow-style autodiff engine in ~200 lines of code"
        }
    ];

    return (
        <div className={ProjectsPageStyle.page}>
            <Header />
            <main className={ProjectsPageStyle.main}>
                <div className={ProjectsPageStyle.intro}>
                    <h1 className={ProjectsPageStyle.pageTitle}>projects</h1>
                    <p className={ProjectsPageStyle.description}>
                        when i want to know how something works, i build it from scratch: here are some of my favorite projects
                    </p>
                </div>
                
                <div className={ProjectsPageStyle.grid}>
                    {projects.map((project, index) => (
                        <Link 
                            to={project.link} 
                            key={index}
                            className={ProjectsPageStyle.card}
                        >
                            <h2 className={ProjectsPageStyle.cardTitle}>{project.title}</h2>
                            <p className={ProjectsPageStyle.cardDescription}>
                                {project.description}
                            </p>
                            <p className={ProjectsPageStyle.cardHighlight}>
                                {project.highlight}
                            </p>
                            <div className={ProjectsPageStyle.cardTags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                            <span className={ProjectsPageStyle.cardArrow}>→</span>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Projects;

