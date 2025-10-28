import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ProjectPageStyle from './ProjectPage.module.css';
import { Link } from 'react-router-dom';

function WildfirePrediction() {
    return (
        <div className={ProjectPageStyle.page}>
            <Header />
            <main className={ProjectPageStyle.main}>
                <Link to="/projects" className={ProjectPageStyle.backLink}>
                    back to projects
                </Link>
                
                <h1 className={ProjectPageStyle.title}>geospatial wildfire prediction</h1>
                <p className={ProjectPageStyle.subtitle}>
                    distributed deep learning on geospatial data | 10.2025 - present
                </p>
                
                <div className={ProjectPageStyle.content}>
                    <section className={ProjectPageStyle.section}>
                        <p className={ProjectPageStyle.wip}>
                            this project is a collaborative wip with two other student-engineers
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>overview</h2>
                        <p>
                            A distributed deep learning system that predicts wildfire susceptibility and 
                            potential severity using geospatial environmental data. The system analyzes 3D wind 
                            vectors, temperature, and moisture levels to assess fire risk and predict how severe 
                            a fire could become if one started in a given area. Visualization of results will be done with Plotly.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>status</h2>
                        <p>
                            This project is currently under active development. We're in the process of setting up 
                            the distributed infrastructure, building the data pipeline, and designing the neural 
                            network architecture. More details will be added as the project progresses.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>tech stack</h2>
                        <div className={ProjectPageStyle.tags}>
                            <span>Apache Spark</span>
                            <span>Python</span>
                            <span>PyTorch</span>
                            <span>Plotly Python API</span>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default WildfirePrediction;
