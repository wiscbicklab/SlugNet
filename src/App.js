import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import FieldHistory from './FieldHistory';
import Register from './Register';
import Upload from './Upload';
import Map from './Map';
import About from './About';


function App() {
  return (
    <div className={`App`}>
      <header className="App-header">
      </header>
      <body>
        <div className="Head">
          <h1 className="Title">Welcome to Slugnet hosted by UW Madison Extension</h1>
          <img className="Logo" alt="Logo Failed to Load" src="./Images/Agriculture_Institute_Division_Of_Extension_University_Of_Wisconsin_Madison_Color_Logo.png" />
        </div>
        <Router>
          <NavBar />
          <div className="Content">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/fieldHistory" element={<FieldHistory />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/map" element={<Map />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;

