import "./Protocol.css";

function About() {
  return (
    <div className="Container">
      <h2>About</h2>
      <div className="Protocol">
        <div className="Background">
          <h3>SlugNet Background</h3>
          <p>Slugs are becoming an increasingly challenging pest for Wisconsin farmers who use conservation cropping practices like no-till and cover crops. The increased adoption of these practices, coupled with milder winters and wetter springs projected for Wisconsin in the future, may amplify the impact of slugs as pests in field crops. To manage slugs more effectively in Wisconsin, we need to understand slug pressure across our state. To achieve this, the University of Wisconsin-Madison Extension is launching SlugNet, a statewide initiative to monitor slug populations in field crops. Data gathered through this network will contribute to the creation of open-access tools that can provide insights into the triggers for slug activity, help forecast the risk of damage in various regions across the state, and inform the level of management needed each season. Fields will be monitored using refuge traps. Refuge traps consist of 1-2ft white roofing shingles secured to the soil surface with stakes. These traps provide a refuge for slugs to hide under during the daylight.</p>
        </div>
        <div className="Participation">
          <h3>Participation</h3>
          <p>We are targeting UW-Madison Extension Educators and Outreach Specialists, agronomists, and farmers across Wisconsin to help with this effort. Volunteers must check the traps and submit data weekly for 10 weeks (2 weeks prior to crop planting and 8 weeks after planting). To submit data, volunteers will take pictures of the underside of the shingle trap and submit the photos to the SlugNet web-based app, which will geotag the photo and quantify the slugs automatically. Volunteers must also submit a field management history survey for each field they monitor. Each volunteer must monitor a minimum of one field, but monitoring more fields is encouraged. This project is well-suited for volunteers who conduct frequent field visits or are engaged in on-farm research.</p>
        </div>
        <div className="Protocol">
          <h3>Protocol</h3>
          <p>
            <a href="https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Protocol.pdf" download>Download Protocol PDF Here</a>
          </p>
          <div className="FieldSelection">
            <h4>Field Selection Criteria</h4>
            <ol>
              <li>Fields should be planted to corn or soybean. Priority should be given to fields that utilize conservation cropping practices (e.g., cover crops/no-till), but conventionally managed fields (e.g., tillage) can be monitored as well. There is no minimum field size.</li>
              <li>Previous management history should be available. Volunteers should complete as much of the field management history survey as possible for each field monitored. </li>
            </ol>
            <p></p>
          </div>
          <div className="Reporting">
            <h4>Slug Monitoring and Data Reporting</h4>
            <ol>
              <li>Volunteers must monitor one refuge trap per field.</li>
              <li>Refuge traps consist of 1-ft2 white roofing shingles secured to the soil surface with stakes. Traps should be placed flat on the soil surface in fields, moving aside residue if necessary. Traps should be placed 15-ft away from field edges (and from each other if monitoring more than 1 trap/field). Mark the trap with a flag to ensure you can find it again. Traps, stakes, and flags will be provided to all volunteers.</li>
              <li>Traps must be checked weekly for 10 weeks (2 weeks prior to crop planting and 8 weeks after planting). Variability in the trap deployment date is expected due to different anticipated planting dates at each participating site. Volunteers should communicate with farmers to establish traps prior to planting.</li>
              <li>Traps should be checked in the morning (before noon) by lifting the shingle trap and turning it over, so the dark side of the shingle is upright. Take an overhead/aerial view photograph of the shingle bottom. Try to just capture the shingle in the photo frame (minimize the surface around the shingle).  Submit this photo to SlugNet.</li>
              <li>Reset the trap after submitting the photo to SlugNet. Do not remove the slugs.</li>
            </ol>
            <iframe title="SlugTrapVideoWithEmilyBick" src="https://www.youtube.com/embed/L7DBYM03VW0" />
            <img 
              src="https://https://raw.githubusercontent.com/wiscbicklab/SlugNet/refs/heads/main/public/Images/Shingle_Trap_Photo_Tips.jpg" 
              alt="Photo tips for shingle traps: Flip shinle over so the bottom is facing upwards and a take a top-down photo with a GPS enabled smartphone. Also attempt to minimize the amount of ground around the shingle in the photo, while making sure the entire shingle is in the photo."/>
          </div>
        </div>
        <div className="TeamInfo">
          <h3>Questions?</h3>
          <p><b>Our team is here to help.</b></p>
          <p>Dane Elmquist, dane.elmquist@wisc.edu</p>
          <p>Laura Flandermeyer, laura.flandermeyer@wisc.edu</p>
          <p>Jordan Kampa, jordan.kampa@wisc.edu</p>
          <p>Dr. Emily Bick, ebick@wisc.edu</p>
          <h3>Issues with the website?</h3>
          <p>Noah Olson, nwolson@wisc.edu</p>
        </div>
      </div>
    </div>
  );
}

export default About;