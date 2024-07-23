import React from 'react'
import member1 from "../assets/saurabh.png";
import member2 from "../assets/soham.png";
import member3 from "../assets/abhinjan.png";
import member4 from "../assets/abhishek.png";
import member5 from "../assets/nisha.png";
import member6 from "../assets/neil.png";
import member7 from "../assets/andrea.png";
import { Carousel } from "react-bootstrap";
import "./team.css";


const Team = () => {
    return (
        <>

            <div className="team-parent-container font-sans">
                {/* <img src={teamimg} alt="" class="w-full"/> */}
                <div className=" team-content team-content max-sm:p-5 max-sm:text-justify">
                    <h5 className="">Our Team</h5>
                    <h1 className="">KNOWLEDGE, DEEP EXPERIENCE & DIVERSITY</h1>
                    <p className="max-sm:text-justify">
                        At CoCreate Labs, we bring our individual expertise and collective
                        knowledge to help entrepreneurs thrive, investors find value &
                        philanthropists create impact.
                    </p>

                    <p className="pl-[6rem] pr-[6rem] max-sm:p-0 max-sm:text-justify">
                        Over the years, we have worked across a range of industries and
                        across small, medium size and large organizations. We leverage this
                        pan-industry and vast organizational experience to create
                        extraordinary value for all our stakeholders.
                    </p>
                    <div className="team-members">
                        <div className="team-members-list max-sm:flex-col">
                            <img src={member2} alt="" />
                            <img src={member6} alt="" />
                            <img src={member7} alt="" />
                           

                        </div>
                        <div className="team-members-list max-sm:flex-col">
                            {/* <img src={member4} alt="" /> */}
                            <img src={member5} alt="" />
                            <img src={member3} alt="" />
                            <img src={member1} alt="" />
                        </div>
                    </div>
                    {/* <Carousel
                        className="team-member-corusel"
                        nextIcon={<span className="carousel-arrow">&#8250;</span>}
                        prevIcon={<span className="carousel-arrow">&#8249;</span>}
                    >
                        <Carousel.Item className="team-list">
                            <img src={member2} alt="" />
                        </Carousel.Item>

                        <Carousel.Item className="team-list">
                            <img src={member6} alt="" />
                        </Carousel.Item>

                        <Carousel.Item className="team-list">
                            <img src={member7} alt="" />
                        </Carousel.Item>

                        <Carousel.Item className="team-list">
                            <img src={member4} alt="" />
                        </Carousel.Item>

                        <Carousel.Item className="team-list">
                            <img src={member5} alt="" />
                        </Carousel.Item>

                        <Carousel.Item className="team-list">
                            <img src={member3} alt="" />
                        </Carousel.Item>

                        <Carousel.Item className="team-list">
                            <img src={member1} alt="" />
                        </Carousel.Item>
                    </Carousel> */}

                </div>
            </div>
        </>
    )
}

export default Team;
