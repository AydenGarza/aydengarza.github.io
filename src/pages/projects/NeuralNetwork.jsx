import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ProjectPageStyle from './ProjectPage.module.css';
import { Link } from 'react-router-dom';
import nnImage from '../images/examplennviz.png';

function NeuralNetwork() {
    return (
        <div className={ProjectPageStyle.page}>
            <Header />
            <main className={ProjectPageStyle.main}>
                <Link to="/projects" className={ProjectPageStyle.backLink}>
                    back to projects
                </Link>
                
                <h1 className={ProjectPageStyle.title}>neural network from scratch</h1>
                <p className={ProjectPageStyle.subtitle}>
                    autodifferentiation engine in vanilla python | 12.2024
                </p>
                
                <div className={ProjectPageStyle.content}>
                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>overview</h2>
                        <p>
                            A neural network built from the ground up in pure vanilla Python, implementing an 
                            autodifferentiation engine to enable backpropagation. This project demonstrates 
                            how deep learning frameworks like PyTorch work under the hood.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>visualization</h2>
                        <div className={ProjectPageStyle.imageContainer}>
                            <img 
                                src={nnImage} 
                                alt="Visualization of a neural network built using autodifferentiation" 
                                className={ProjectPageStyle.image}
                            />
                        </div>
                        <p className={ProjectPageStyle.caption}>
                            graph of computations showing the autodifferentiation engine in action
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>implementation</h2>
                        <p>
                            Built entirely in <strong>vanilla Python</strong> without using any deep learning 
                            libraries, this project implements automatic differentiation from scratch. The 
                            engine tracks computational graphs and automatically computes gradients through 
                            backpropagation.
                        </p>
                        <p>
                            The implementation includes core neural network components: neurons, layers, 
                            activation functions, and the backpropagation algorithm. By building these 
                            primitives from scratch, I gained deep insight into how modern deep learning 
                            frameworks handle gradient computation.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>project source</h2>
                        <p>
                            This project was guided by Andrej Karpathy's{' '}
                            <i>"Neural Networks: Zero to Hero"</i> series on YouTube. I highly recommend 
                            the{' '}
                            <a
                                href="https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ProjectPageStyle.link}
                            >
                                first video
                            </a>{' '}
                            if you're interested in learning how libraries like PyTorch implement 
                            backpropagation under the hood.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>key features</h2>
                        <ul className={ProjectPageStyle.list}>
                            <li>Autodifferentiation engine built from scratch</li>
                            <li>Computational graph tracking for backpropagation</li>
                            <li>Pure vanilla Python implementation (no libraries)</li>
                            <li>Neural network primitives (neurons, layers, activations)</li>
                            <li>Gradient computation and optimization</li>
                        </ul>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>tech stack</h2>
                        <div className={ProjectPageStyle.tags}>
                            <span>Python</span>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default NeuralNetwork;
