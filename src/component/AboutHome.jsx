import React, { useEffect } from 'react'
import "./abouthome.css";
import Aboutbanner from "../assets/Aboutbanner.png";
import People from "../assets/People.png";
import Fist from "../assets/Fist.png";
import { Link } from 'react-router-dom';

const AboutHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about-header-parent-conatiner max-sm:p-0 max-sm:m-0 max-sm:ml-[5px] max-sm:mr-[5px] font-sans">
        <div className="container about-header-left-container max-sm:m-0 max-sm:p-0">
          <div className="container about-home-main-heading">
            <h1 className="text-4xl lg:text-6xl">
              About CCL
            </h1>
            <h4 className="text-lg lg:text-xl">A game-changer in the startup ecosystem</h4>
          </div>
          <div className="container about-header-right-container1">
            <img src={Aboutbanner} alt="" className="w-full  relative " />
          </div>
          <div className="container about-home-primary-text ">
            <p className="">
              It enables access to a global platform that brings together the
              best and brightest entrepreneurs, investors, mentors, and
              philanthropic organizations in an integrated ecosystem.
            </p>
            <br />
            <br />
            <p className="">
              With a network of world-class mentors from companies like Meta,
              Netflix, Uber, Shell, and Harvard University, along with the World
              Bank and OECD, and other multi-laterals, CoCreate Labs is set to
              revolutionize the way start-ups are launched and grown.
            </p>
          </div>
          <div className="about-home-apply-btn">
          <Link to="/registration">
            <button className="apply-btn">
             Apply Now
            </button>
            </Link>
          </div>
          <div className="container about-slogan-conatiner max-sm:ml-[5px] max-sm:mr-[5px]">
            <div className="about-slogan">
              <img src={Fist} alt="" className='img-fluid max-sm:ml-[40%] '  />
              <h3 className="text-xl lg:text-2xl">EMPOWER</h3>
              <p className="text-sm lg:text-base">
                Empowering the world’s best entrepreneurs through all stages of
                their growth with mentorship, funds, and services.
              </p>
            </div>
            <div className="about-slogan">
              <img src={People} alt="" className='img-fluid max-sm:ml-[40%]'  />
              <h3 className="text-xl lg:text-2xl">COMMUNITY</h3>
              <p className="text-sm lg:text-base">
                Connecting the investors with a curated list of impactful &
                investment-ready startups.
              </p>
            </div>
          </div>
        </div>
        <div className="container about-header-right-container">
          <img src={Aboutbanner} alt="" className="w-full" />
        </div>
      </div>
    </>
  )
}

export default AboutHome;
