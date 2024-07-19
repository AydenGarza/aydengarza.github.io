import Header from '../components/Header.jsx'
import HomePageStyle from './Home.module.css'

function Home() {
    return <>
        <Header className="header"></Header>
        <div className = {HomePageStyle.pageContainer}>
            <div className = {HomePageStyle.contentContainer}>
                <h1 className = {HomePageStyle.greeting}> Hi! I'm Ayden.</h1>
                <main className={HomePageStyle.content}>I'm a computer science student at Colorado State University and a software engineer intern at OHEL Technologies.</main>
                <h1>This website is currently a work in progress. More coming soon!</h1>
            </div>
        </div>
    </>
}

export default Home;