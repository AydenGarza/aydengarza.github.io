import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home></Home>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//npm run deploy to update the site