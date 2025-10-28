import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ProjectPageStyle from './ProjectPage.module.css';
import { Link } from 'react-router-dom';

function TCPMessaging() {
    return (
        <div className={ProjectPageStyle.page}>
            <Header />
            <main className={ProjectPageStyle.main}>
                <Link to="/projects" className={ProjectPageStyle.backLink}>
                    back to projects
                </Link>
                
                <h1 className={ProjectPageStyle.title}>distributed tcp messaging system</h1>
                <p className={ProjectPageStyle.subtitle}>
                    peer to peer communication system | 9.2025
                </p>
                
                <div className={ProjectPageStyle.content}>
                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>overview</h2>
                        <p>
                            A distributed messaging system built from scratch in Java that enables peer-to-peer 
                            communication across a dynamically connected network of Linux servers. The system 
                            handles thousands of messages per second using thread-safe, concurrent message passing.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>implementation</h2>
                        <p>
                            Built using <strong>Java networking libraries</strong>, the system implements core 
                            networking features from scratch, including connection management and custom data 
                            serialization/deserialization routines for efficient message passing.
                        </p>
                        <p>
                            The architecture features a <strong>scalable multi-threaded communications system</strong> 
                            with synchronized server processes that enable concurrent message handling. I applied 
                            graph algorithms—specifically <strong>Prim's MST and BFS/DFS</strong>—to optimize 
                            routing and minimize communication costs between servers in the network.
                        </p>
                        <p>
                            Thread safety was achieved through careful synchronization, allowing the system to 
                            handle thousands of concurrent messages without data corruption or race conditions.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>key features</h2>
                        <ul className={ProjectPageStyle.list}>
                            <li>Peer-to-peer TCP communication between Linux servers</li>
                            <li>Custom serialization/deserialization for message passing</li>
                            <li>Multi-threaded architecture for concurrent processing</li>
                            <li>Graph algorithm optimization (Prim's MST, BFS/DFS)</li>
                            <li>Thread-safe message handling (thousands of messages/second)</li>
                            <li>Dynamic network topology management</li>
                        </ul>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>tech stack</h2>
                        <div className={ProjectPageStyle.tags}>
                            <span>Java</span>
                            <span>Linux</span>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default TCPMessaging;
