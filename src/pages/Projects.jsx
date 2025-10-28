import Header from '../components/Header.jsx';
import ProjectsPageStyle from './Projects.module.css';
import Footer from '../components/Footer.jsx';
import projIm from './images/examplennviz.png';

function Projects() {
    return (
        <div className={ProjectsPageStyle.page}>
            <Header />
            <main className={ProjectsPageStyle.main}>
                <h1 className={ProjectsPageStyle.pageTitle}>Projects</h1>
                
                <div className={ProjectsPageStyle.content}>
                    <section className={ProjectsPageStyle.project}>
                        <h2 className={ProjectsPageStyle.projectTitle}>Neural Network from Scratch</h2>
                        <p className={ProjectsPageStyle.text}>
                            I believe the best way to truly understand a technology is to build it from the ground up. 
                            With that mindset, I developed an autodifferentiation engine in pure vanilla Python, enabling 
                            backpropagation in neural networks.
                        </p>
                        <div className={ProjectsPageStyle.imageContainer}>
                            <img 
                                src={projIm} 
                                alt="Visualization of a neural network built using autodifferentiation" 
                                className={ProjectsPageStyle.image}
                            />
                        </div>
                        <p className={ProjectsPageStyle.text}>
                            This project was guided by Andrej Karpathy's{' '}
                            <i>"Neural Networks: Zero to Hero"</i> series on YouTube. If you're interested in learning 
                            how libraries like PyTorch implement backpropagation, I highly recommend checking out the{' '}
                            <a
                                href="https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={ProjectsPageStyle.link}
                            >
                                first video
                            </a>{' '}
                            in the series.
                        </p>
                    </section>

                    <section className={ProjectsPageStyle.project}>
                        <h2 className={ProjectsPageStyle.projectTitle}>Personal Website</h2>
                        <p className={ProjectsPageStyle.text}>
                            I've always been curious about the internet and how it works. I wondered how to take my 
                            HTML page and put it on the internet for everyone to see. So, I took on the challenge of 
                            learning React to build a website to put on the internet. This site is deployed using 
                            GitHub Pages. Here is the{' '}
                            <a 
                                href="https://github.com/AydenGarza/aydengarza.github.io" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={ProjectsPageStyle.link}
                            >
                                repository
                            </a>
                            .
                        </p>
                    </section>

                    <p className={ProjectsPageStyle.note}>
                        I'm always working on new projects and refining my skills. Between a full load of computer 
                        science courses, learning new technologies, and sharpening my algorithmic problem-solving 
                        skills, there's always something in the works. Feel free to connect with me—I'd love to 
                        hear your feedback or collaborate!
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Projects;

