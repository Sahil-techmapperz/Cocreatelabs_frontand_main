import React from 'react'
import "./gettingstarted.css";
import rightarrow from "../assets/line.png";
import { Link } from 'react-router-dom';
const Gettingstarted = () => {
  return (
    <div className="container-fluid font-sans">
      <div className="section1">
        <div className="getstarted-content max-sm:gap-[1rem]">
          <div className="text-section">
            <h1 className="">Find Your Next Dream Connect</h1>
            <br />
            <h2 className="">Get Started With Us!</h2>
          </div>
          <div className="button-container mt-8">
          <Link to={"/registration"}>
            <button
              id="btn1"
              className="bg-blue-600 text-black rounded-md mr-4 flex justify-center items-center"
            >
             
                Register
           
              <span>
                <img src={rightarrow} alt="" />
              </span>
            </button>   </Link>
            {/* <button
            id="btn2"
            class="bg-green-500 text-black rounded-md"
          >
            Get Free Credit
          </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gettingstarted;
