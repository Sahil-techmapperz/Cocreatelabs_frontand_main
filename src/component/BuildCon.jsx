import React from 'react'
import "./buildCon.css";
import Knitting from "../assets/Knitting.png";

const BuildCon = () => {
  return (
    <>
      
      <div className="build-parent-container max-sm:ml-[5px] max-sm:mr-[5px]">
      <div className="container build-content">    
        <div className="container build-left-content">
        {/* <Fade top distance='20' duration={1000} delay={100}> */}
          <h1 className="container">Build Connections that help you grow your business</h1>
          <div className="container build-right-content1">
          <img src={Knitting} alt="" />
        </div>
            <p className="container build-primary-text">CoCreate Labs is a one of a kind ecosystem of global leaders and
            founders that <span className="build-primary-text1">connect businesses, people, expertise and funds.</span> </p>
            
            <p className="container build-primary-text2">All this is within your reach today.</p>
          <div className="build-left-btn-container">
            <button>Explore Connects</button>
            <a href="">Learn More</a>
          </div>
          {/* </Fade> */}
        </div>
        <div className="container build-right-content">
          <img src={Knitting} alt="" />
        </div>
      </div>
      </div>
    </>
  )
}

export default BuildCon;
