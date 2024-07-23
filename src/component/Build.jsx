import React, { useState } from 'react'
import Vedio from '../assets/Component38.png'
import './build.css';
import BG from "../assets/homebannerbg.png";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Build = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const openVideo = () => {
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
    };

    const videoPopupStyle = {
        display: isVideoOpen ? 'block' : 'none',
    };

    const imageClickStyle = isVideoOpen ? { width: '100%', height: 'auto' } : {};



    return (

        <div className='' style={{ "backgroundImage": `url(${BG})` }}>
            <div className='flex ml-10 mr-10 items-center buildContainer md:flex-row flex-col'>

                <div >
                    <div>
                        <h1 className='font-sans text-5xl font-semibold leading-70 tracking-tighter  max-sm:text-center max-sm:text-2xl' > Best Place in the World to Build Your Startup</h1>
                        <p className='mt-10 text-gray-600 font-sans text-base  font-normal leading-6 max-sm:text-justify'>CoCreate Labs is a game-changer in the startup ecosystem. It enables access to a global platform that brings together the best and brightest entrepreneurs, investors, mentors, and philanthropic organizations in an integrated ecosystem.</p>
                    </div>




                    <div className='flex gap-20 mt-10'>
                        <Link to="/registration"> <button className='p-5 rounded-r-full font-bold text-white bg-blue-500 rounded-l-full w-150 border border-solid font-sans w-150 max-sm:h-[50px] max-sm:rounded-l-50 max-sm:font-size-[12px] max-sm:font-normal max-sm:p-0 max-sm:m-[5px] w-150 max-sm:w-[120px] hover:bg-blue-500 hover:text-white'>
                            Start Growing
                        </button></Link>


                        <button className='p-5  rounded-r-full font-bold text-black bg-dbe8ec rounded-l-full w-150 border border-solid font-sans w-150 max-sm:h-[50px] max-sm:rounded-l-50 max-sm:font-size-[12px] max-sm:font-normal max-sm:p-0 max-sm:m-[5px] w-150 max-sm:w-[120px] hover:bg-blue-500 hover:text-white'>
                            <FontAwesomeIcon icon="fa-solid fa-circle-play" />    Who are we

                        </button>
                    </div>

                </div>

                <div id="videoPopup" style={videoPopupStyle}>
                    <span id="closeBtn" onClick={closeVideo}>X</span>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/raXLsIiOz1w?si=VGb8B5GOJg_vRyH-"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>

                <div type='button'>
                    <img
                        onClick={openVideo}
                        className='buildImage  max-sm:w-[90vw] max-sm:h-[200px]'
                        src={Vedio}
                        style={imageClickStyle}
                    />
                </div>
            </div>
        </div>













    )
}

export default Build;
