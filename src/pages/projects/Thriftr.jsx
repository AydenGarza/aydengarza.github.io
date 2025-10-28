import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ProjectPageStyle from './ProjectPage.module.css';
import { Link } from 'react-router-dom';

function Thriftr() {
    return (
        <div className={ProjectPageStyle.page}>
            <Header />
            <main className={ProjectPageStyle.main}>
                <Link to="/projects" className={ProjectPageStyle.backLink}>
                    back to projects
                </Link>
                
                <h1 className={ProjectPageStyle.title}>Thriftr</h1>
                <p className={ProjectPageStyle.subtitle}>
                    clothing price estimation app | 5.2025 - present
                </p>
                
                <div className={ProjectPageStyle.content}>
                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>overview</h2>
                        <p>
                            Thriftr is a full-stack mobile application that provides real-time price estimates 
                            for thrifted clothing items based on user-uploaded images. Built with React Native 
                            and FastAPI, it combines AI-powered image analysis with live marketplace data to 
                            help thrifters make informed pricing decisions.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>implementation</h2>
                        <p>
                            The frontend is built with <strong>React Native (TypeScript)</strong>, providing 
                            a responsive UI with camera integration and dynamic loading states. The app makes 
                            RESTful API calls to a <strong>FastAPI</strong> backend that orchestrates the 
                            pricing engine.
                        </p>
                        <p>
                            The image analysis pipeline leverages <strong>Hugging Face BLIP</strong> for 
                            automatic image captioning to identify clothing items and <strong>Tesseract OCR</strong> 
                            for brand recognition from labels and tags. This AI-driven analysis is combined 
                            with live marketplace data collected using <strong>Playwright</strong> for web 
                            scraping.
                        </p>
                        <p>
                            The pricing engine integrates multiple data sources to provide accurate, real-time 
                            price estimates based on brand, condition, style, and current market demand.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>key features</h2>
                        <ul className={ProjectPageStyle.list}>
                            <li>Camera integration for instant image capture</li>
                            <li>AI-powered image analysis (BLIP + Tesseract OCR)</li>
                            <li>Real-time marketplace data scraping with Playwright</li>
                            <li>RESTful API architecture (FastAPI backend)</li>
                            <li>TypeScript-based mobile UI (React Native)</li>
                            <li>Dynamic loading states for seamless UX</li>
                        </ul>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>tech stack</h2>
                        <div className={ProjectPageStyle.tags}>
                            <span>React Native</span>
                            <span>TypeScript</span>
                            <span>FastAPI</span>
                            <span>Hugging Face BLIP</span>
                            <span>Tesseract OCR</span>
                            <span>Playwright</span>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Thriftr;
