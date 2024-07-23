import React from 'react'
import Iphone from '../assets/iPhones.png'
import "./credit.css";
import teamimg from "../assets/teamimg.png"

const Credit = () => {
  return (
    <>

      <div className=" credit-parent-container font-sans">
        <div className="container credit-left-container max-sm:p-0">
          <h3>
            We Recognize that Your <wrap>time</wrap> is the Most Expensive
            Capital in Your Startup
          </h3>
          <p>
            We introduce a unique credit system so that all this is accessible
            with ease to the busy founding team.
          </p>

          <div className="container credit-icon-left-container">
            <div className="credit-icon1-left-container">
              <p>✔ CCL Credits</p>
              <p>✔ Easy to use</p>
            </div>
            <div className="credit-icon2-left-container max-sm:gap-[2rem]">
              <p>✔ Access (global experts)</p>
              <p>✔ No hidden cost</p>
            </div>
          </div>

          <p className="text1">
            Buy credit with CoCreate Labs and pre book sessions with leaders
            across the globe and begin your entrepreneurial journey with
            guidance & validation!
          </p>

          <div className="credit-button-left-container">

            <button type="submit" className="Apply-Now rounded-full">
              Apply Now
            </button>

            <a href="#/" className="font-medium text-base leading-6 text-center text-blue-500">
              Avail Free Credits
            </a>
          </div>
        </div>
        <div className="container credit-right-container">
          <img src={Iphone} alt="" class="img-fluid" />

          <p className="text2">
            Buy credit with CoCreate Labs and pre book sessions with leaders
            across the globe and begin your entrepreneurial journey with
            guidance & validation!
          </p>

          <div className="credit-button-left-container1">
            <form className="apply-button">
              <button type="submit" className="Apply-Now rounded-full">
                Apply Now
              </button>
            </form>
            <form className="apply-button">
              <button type="submit" className="Apply-Now rounded-full">
                Apply Now
              </button>
            </form>

            {/* <a href="#/" className=" Apply-Now rounded-full font-medium text-base leading-6 text-center text-blue-500">
              Avail Free Credits
            </a> */}
          </div>
        </div>



      </div>
    </>
  )
}

export default Credit;
