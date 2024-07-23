import React, { useEffect } from 'react'
import "./investhero.css";
import investbanner from "../assets/Investbanner.png";


const Investhero = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className=" investor-parent-container max-sm:mt-0 font-sans">

        <div className=" investor-left-content">

          <h5>
            Value | Impact | Scale
          </h5>
          <h1>
            Creating the Next Generation of Changemakers
          </h1>
          <div className="container invest-right-content1">

            <img src={investbanner} alt="" class="img-fluid" />

          </div>
          <p>
            Get Access to Pitch in front of global investors to launch/
            scale up your start-up initiatives with investment caps
            ranging from 10,000 USD- 1.2 M USD.
          </p>
          <div className="invest-btn-container">
            <button
              className="ibtn rounded-full bg-bluee-400 tex-white"

            >
              Apply Now
            </button>
          </div>


        </div>

        <div className="container invest-right-content">

          <img src={investbanner} alt="" class="img-fluid" />

        </div>

      </div>
    </div>
  )
}

export default Investhero
