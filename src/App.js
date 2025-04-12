import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import NavBar from './NavBar';
import Home from './Pages/Home';
import FieldHistory from './Pages/FieldHistory';
import Register from './Pages/Register';
import Upload from './Pages/Upload';
import Map from './Pages/Map';
import About from './Pages/Protocol';
import FAQ from './Pages/FAQ'
import SlugFooter from './SlugFooter';


function App() {
  return (
    <div className="App">
      <div className="Head">
        <div className="Titles">
          <h1 className="Title">Slugnet</h1>
          <h4 className="subTitle">by UW-Madison Entomology</h4>
        </div>
        <div className="Logos">
          <img className='bickLabLogo' alt="Bick Lab Logo" src="https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Bick_Lab_Logo.png" />
        </div>
        
      </div>
      <Router>
        <NavBar />
        <div className="Content">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/fieldHistory" element={<FieldHistory />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/map" element={<Map />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </Router>
      <SlugFooter />
    </div>
  );
}

export default App;

