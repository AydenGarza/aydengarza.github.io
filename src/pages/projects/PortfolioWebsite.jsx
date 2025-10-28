import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ProjectPageStyle from './ProjectPage.module.css';
import { Link } from 'react-router-dom';

function PortfolioWebsite() {
    return (
        <div className={ProjectPageStyle.page}>
            <Header />
            <main className={ProjectPageStyle.main}>
                <Link to="/projects" className={ProjectPageStyle.backLink}>
                    back to projects
                </Link>
                
                <h1 className={ProjectPageStyle.title}>personal portfolio website</h1>
                <p className={ProjectPageStyle.subtitle}>
                    portfolio website | 7.2024 - present
                </p>
                
                <div className={ProjectPageStyle.content}>
                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>overview</h2>
                        <p>
                            A modern, minimalist portfolio website built with React and deployed on Vercel. 
                            The site features a clean black and white design with monospace typography, 
                            smooth animations, and full mobile responsiveness. You're looking at it right now!
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>implementation</h2>
                        <p>
                            Built with <strong>React</strong> and <strong>JavaScript</strong>, the website 
                            uses modular component architecture and CSS modules for scalable, maintainable 
                            styling. The UI features seamless layout rescaling with accessibility optimizations 
                            for all devices.
                        </p>
                        <p>
                            Deployed on <strong>Vercel</strong> with GitHub integration, enabling automated 
                            deployments and streamlined version control. Every push to the main branch 
                            automatically triggers a new deployment with preview URLs for testing.
                        </p>
                        <p>
                            The design emphasizes readability and simplicity, with smooth fade-in animations, 
                            elegant hover effects, and a fixed navigation bar with glassmorphism. The monospace 
                            font gives it a distinct developer aesthetic while maintaining excellent readability.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>key features</h2>
                        <ul className={ProjectPageStyle.list}>
                            <li>Minimal black and white design aesthetic</li>
                            <li>Fully responsive layout for all devices</li>
                            <li>Modular React components and CSS modules</li>
                            <li>Smooth animations and transitions</li>
                            <li>Automated deployment via Vercel + GitHub</li>
                            <li>Accessibility optimized</li>
                        </ul>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>tech stack</h2>
                        <div className={ProjectPageStyle.tags}>
                            <span>React</span>
                            <span>JavaScript</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>CSS Modules</span>
                            <span>Vercel</span>
                            <span>GitHub</span>
                        </div>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>source code</h2>
                        <p>
                            View the source code on{' '}
                            <a 
                                href="https://github.com/AydenGarza/aydengarza.github.io" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={ProjectPageStyle.link}
                            >
                                GitHub
                            </a>
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default PortfolioWebsite;
