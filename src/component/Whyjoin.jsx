import React from "react";
import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon1.png";
import icon3 from "../assets/Icon2.png";
import Banner from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/manworking.png";
import card3 from "../assets/Card (3).png";
import card4 from "../assets/Card (4).png";
import card5 from "../assets/Card (5).png";
import "./whyjoin.css";

const Whyjoin = () => {
  return (
    <div className="whyjoin-container font-sans">

      <div className="container join-primary-heading">
        Why Join CoCreate Labs?
      </div>
      <div class="container ">
        <div className="flex gap-8">
          <div class="col-4 col-md-4">
            <div class="flex flex-col items-center my-6 my-md-8">
              <img src={card3} alt="" />
            </div>
          </div>
          <div class="col-4 col-md-4">
            <div class="flex flex-col items-center my-6 my-md-8">
              <img src={card4} alt="" />
            </div>
          </div>
          <div class="col-4 col-md-4">
            <div class=" flex flex-col items-center my-6 my-md-8">
              <img src={card5} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="whyjoin-parent-container mt-12 max-sm:mt-1 max-sm:gap-0">

        <div className="container join-parent-conatainer">
          <div className="row flex md:flex-row flex-col">
            <div className="col-md-7 w-[75%] max-sm:w-[100%] ">
              <div className="container join-text-section join-text-section text-start max-sm:text-center max-sm:w-[300px]">
                <div className="container join-primary-title">
                  <h4 className="">Connections</h4>
                </div>
                <div className="container join-primary-text">
                  <b>
                    Connect with
                    <span className="join-text-primary">
                      {" "}
                      Global Impact Makers{" "}
                    </span>{" "}
                    and Achieve Excellence in all Spheres of{" "}
                    <span className="join-text-primary">
                      Business & Personal Development
                    </span>{" "}
                  </b>
                </div>
                <div className="container join-primary-text1">
                  Our global reach and network can help you discover and
                  forge meaningful connections for mentorship, fundraising,
                  growth, and propel you on a journey of personal and
                  professional evolution.
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="join-img-section">
                <img
                  src={Banner}
                  alt=""
                  className="responsive-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container join-parent-conatainer2 max-sm:p-[3rem]">
          <div className="row flex gap-12 max-sm:gap-0">
            <div className="col-md-8">
              <div className="join-img-section3">
                <img
                  src={Banner2}
                  alt=""
                  className="responsive-img mb-10"
                  class="img-fluid"
                />
              </div>
            </div>
            <div className="col w-[90%] max-sm-[100%]">
              <div className="join-text-section text-start ">
                <div className="join-primary-title">
                  <h4 className="">Growth</h4>
                </div>
                <div className="join-primary-text">
                  <b>
                    Master Your Craft & Grow with
                    <span className="join-text-primary">
                      {" "}
                      Every Mentoring Interaction{" "}
                    </span>{" "}
                  </b>
                </div>
                <div className="join-img-section1">
                  <img
                    src={Banner2}
                    alt=""
                    className="responsive-img mb-10"
                    class="img-fluid"
                  />
                </div>
                <div className="join-primary-text1">
                  Find opportunities to expand your skills and explore new
                  avenues of development with amazing outcomes. Seek and get
                  support from a thriving ecosystem of like-minded people.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container join-parent-conatainer join-parent-conatainer p-0 max-sm:justify-center items-center">
          <div className="row flex gap-12 row ] max-sm:gap-0 max-sm:flex-col" >
            <div className="col-md-5">
              <div className="join-text-section text-start">
                <div className="join-primary-title">
                  <h4 className="">Community</h4>
                </div>
                <div className="join-primary-text">
                  <b>
                    {" "}
                    Be Part of a
                    <span className="join-text-primary">
                      {" "}
                      Caring Community{" "}
                    </span>{" "}
                    , Develop Key{" "}
                    <span className="join-text-primary">
                      Social/Business Relationships & Opportunities
                    </span>{" "}
                  </b>
                </div>
                <div className="join-img-section1">
                  <img
                    src={Banner3}
                    alt=""
                    className="responsive-img mb-10 w-[500px]"
                    class="img-fluid "
                  />
                </div>
                <div className="join-primary-text1">
                  Level up your startup with a world-class community that
                  supports you in pursuing your dream of building a
                  value-driven business.
                </div>
              </div>
            </div>
            <div className="col w-[90%]  max-sm:w-[290px] max-sm:p-0">
              <div className="join-img-section3">
                <img
                  src={Banner3}
                  alt=""
                  className="responsive-img  "
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Whyjoin;

