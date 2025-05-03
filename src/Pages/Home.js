import "../css/Home.css"
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className="Home">
      <h2>Home</h2>
      <div className="Welcome">
        <h3>Welcome to the SlugNet Homepage</h3>
        <p>Slugs are becoming an increasingly challenging pest for Wisconsin farmers who use conservation cropping practices like no-till and cover crops. The increased adoption of these practices, coupled with milder winters and wetter springs projected for Wisconsin in the future, may amplify the impact of slugs as pests in field crops. To manage slugs more effectively in Wisconsin, we need to understand slug pressure across our state. To achieve this, the University of Wisconsin-Madison Extension is launching SlugNet, a statewide initiative to monitor slug populations in field crops.</p>
      </div>
      <div className="Instructions">
        <h3>Want to Join the Project</h3>
        <h4>Instructions</h4>
        <ol className="InstuctionList">
          <li>
            <p>Review the project's <Link className='navLink' to="/Protocol">background and protocols</Link></p>
          </li>
          <li><Link className='navLink' to="/Register">Register</Link> for Slugnet</li>
          <li>Complete <Link className='navLink' to="/FieldHistory">Field History Forms</Link>, one for each field that you are monitoring</li>
          <li>Setup slug traps in fields</li>
          <li>Starting 2 weeks before planting, <Link className='navLink' to="/Upload">Upload A Photo</Link> of each of the traps you're monitoring for a total of 10 weeks</li>
          <li>Check out SlugNet or the UW-Madison Crops and Soils website’s Articles for weekly slug monitoring updates</li>
          <li>Learn more about managing slugs in Wisconsin field crops <a target="_blank" rel="noreferrer" href="https://cropsandsoils.extension.wisc.edu/articles/managing-slugs-in-wisconsin-field-crops/">Here</a></li>
        </ol>
      </div>
      <div className="SlugPhotos">
        <div className="slug-item">
          <img src="https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Gray_Garden_Slug.png" alt="Gray Garden Slug Image Failed to Load!"/>
          <p>Gray Garden Slug</p>
        </div>
        <div className="slug-item">
          <img src="https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Slug_Hiding_In_Crevice.png" alt="Gray Garden Slug Hidinng in Soil Crevice in Corn Field Failed to Load!" />
          <p>Gray garden slug hiding in soil crevice in corn field</p>
        </div>
      </div>
    </div>
  );
}

export default Home;