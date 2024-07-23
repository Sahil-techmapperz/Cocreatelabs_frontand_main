import React from 'react'
import "./upcomingevents.css";
import imgh1 from "../assets/Group 12.png";
import imgh2 from "../assets/Group 13.png";
import imgh3 from "../assets/Group 14.png";
const Upcomingevents = () => {
  return (
    <div className="events-parent-container overflow-hidden">
        <div className="upcomingevents-container">
          <div className="event-primary-heading">
            <h3>Upcoming Events</h3>
          </div>
          <div className="event-primary-title">
            <p>
              CoCreate Events are a great opportunity to meet investors,
              mentors and community and connect with the right kind of people
              from diverse domains.
            </p>
          </div>
        </div>

       
            <div className="carousel-row flex max-sm:flex-col">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7076850441052958720/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-70 transform scale-100 hover:scale-105"
                  src={imgh1}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/co-create-lab/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-70 transform scale-100 hover:scale-105"
                  src={imgh2}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/co-create-lab/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-70 transform scale-100 hover:scale-105"
                  src={imgh3}
                  alt=""
                />
              </a>
            </div>
          
            {/* <div className="carousel-row flex">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7076850441052958720/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-70 transform scale-100 hover:scale-105"
                  src={imgh1}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/co-create-lab/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-70 transform scale-100 hover:scale-105"
                  src={imgh2}
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/co-create-lab/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-70 transform scale-100 hover:scale-105"
                  src={imgh3}
                  alt=""
                />
              </a>
            </div> */}
    

        <div className="events-button-container">
          <a
            href="https://twitter.com/cocreatelabs1"
            target="_blank"
            rel="noreferrer"
          >
            <button className="loadmore mb-20 w-36">Learn More</button>
          </a>
        </div>
      </div>
  )
}

export default Upcomingevents;
