import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Thriftr from './pages/projects/Thriftr';
import TCPMessaging from './pages/projects/TCPMessaging';
import PortfolioWebsite from './pages/projects/PortfolioWebsite';
import NeuralNetwork from './pages/projects/NeuralNetwork';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/thriftr" element={<Thriftr />} />
          <Route path="/projects/tcp-messaging" element={<TCPMessaging />} />
          <Route path="/projects/portfolio-website" element={<PortfolioWebsite />} />
          <Route path="/projects/neural-network" element={<NeuralNetwork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//npm run deploy => deploy to GH pages
//npm start => development server
