import Header from '../components/Header.jsx'
import HomePageStyle from './Home.module.css'

function Home() {
    return <>
        <Header className="header"></Header>
        <h1 className = {HomePageStyle.greeting}> Hi! I'm Ayden.</h1>
        <div className = {HomePageStyle.contentContainer}><main className={HomePageStyle.content}>I'm a computer science student at Colorado State University and a software entineer intern at OHEL Technologies.</main></div>
    </>
}

export default Home;