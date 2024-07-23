import React from 'react'
import "./investpitch.css";
import { Link } from 'react-router-dom';
const Investpitch = () => {
  return (
    <div>
      <div className="pitch-parent-container font-sans">
        {/* <Fade bottom distance='20%' duration={1000} delay={100}> */}
        <div className="container pitch-content-container">
          <h1>Are You Ready to Pitch Your Startup?</h1>
          <br />
          <h2>Get Started Now</h2>
          <br />
          {/* <p>Find out now?</p> */}
          <Link to="/eventregistration"><button className="pitchbtn rounded-full mt-4 font-bold text-lg"> Pitch Now</button></Link>
        </div>
        {/* </Fade> */}
      </div>

    </div>
  )
}

export default Investpitch;
