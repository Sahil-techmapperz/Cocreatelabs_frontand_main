import React from 'react'
import "./offering.css";
import Offeringsimg from "../assets/rectangle.png";
import { Link } from "react-router-dom";
import single from "../assets/Single PF.png";
import single1 from "../assets/Single PF (1).png";

const Offering = () => {
  return (

    <div className="offerings-parent-container pb-0">
      <p className="offerings-primary-heading font-sans">
        Our Offerings
      </p>
      <br />
      <div className="offerings-secondary-heading font-sans">
        Connecting with{" "}
        <span className="blue__text font-sans">
          Leaders across the GLOBE
        </span>
      </div>
      <br />
      <div className="offerings-primary-text font-sans">
        <p>
          A first of its kind integrated global matchmaking platform to bring
          aspiring entrepreneurs, start-ups, mentors, investors, non-profits
          and philanthropists together to build a thriving community of
          entrepreneurship. We focus on ideas where technology, talent and
          capital can unlock long-term value and drive business growth.
        </p>
      </div>
      <div className=" offeringsbutton-container">
        <Link to="/mentorConnect">

          <button type="button" className="mentorconnect font-sans">
            Mentor Connect
          </button>
        </Link>
        <Link to="/investorconnect">

          <button type="button" className="investorconnect font-sans">
            Investor Connect
          </button>
        </Link>
        <Link to="/grantsconnect">

          <button type="button" className="grantsconnect font-sans">
            Grants Connect
          </button>
        </Link>
      </div>
      <div className=" offerings-rectangle-box mt-8 max-sm:ml-[-3%] max-sm:p-0 max-sm:mt-0">
        <div className="offerings-box-content">
          <div className="offerings-left-content">
            <Link to="/">
              <img
                src={single}
                alt=""
                className="offeringsimg1"
                class="img-fluid"
              />
            </Link>
          </div>
          <div className="offerings-left-content2 max-sm:p-0 max-sm:w-[300px]">
            <Link to="/">
              <img
                src={single1}
                alt=""
                className="offeringsimg2"
                class="img-fluid"
              />
            </Link>
          </div>

          <div className="offerings-right-content">
            <div className="offerings-right-primary-title text-xl max-sm:mt-[20px] font-sans">
              What is Mentor Connect
            </div>
            <br />
            <div className="offerings-right-primary-heading font-sans">
              Get Access to 1-on-1 Mentorship Sessions
            </div>
            <br />
            <div className="offerings-right-primary-text max-sm:text-justify max-sm:p-5 font-sans">
              Get Access to one-on-one mentorship sessions to accelerate your
              journey with sector-specific (health tech, ed-tech etc) & cross
              sector (marketing, branding, legal services etc.) vetted
              experts.
            </div>
            <div className="offerings-right-button-container">
              <Link to="/mentorConnect">

                <button type="button" class="btn btn-primary rounded" className="findmentor font-sans">Find Mentor</button>

              </Link>
              {/* <Link to="/mentorConnect">

                <button type="button" class="btn btn-primary rounded" className="becomementor  font-sans">Become Mentor</button>

              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Offering;
