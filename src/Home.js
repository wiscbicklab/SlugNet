import "./Home.css"
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className="Home">
      <h2>Home</h2>
      <div className="Welcome">
        <h3>Welcome to the SlugNet Homepage</h3>
      </div>
      <div className="Instructions">
        <h3>Instuctions</h3>
        <ol className="InstuctionList">
          <li>
            <p>Read about the project <Link className='navLink' to="/About">Here</Link></p>
          </li>
          <li><Link className='navLink' to="/Register">Register</Link> for Slugnet</li>
          <li>Complete <Link className='navLink' to="/FieldHistory">Field History Forms</Link>, one for each field</li>
          <li>Setup Slug Traps in Fields</li>
          <li>Starting 2 weeks before planting, <Link className='navLink' to="/Upload">Upload a photo</Link> of each of the traps your monitoring for a total of 10 weeks</li>
          <li>Check out the website at the end of the study for information about the study</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;