import React, { useState } from 'react';
import View1 from '../../assets/ViewMorebutton.png';
import View2 from '../../assets/AnuragSingh.jpeg';
import View3 from '../../assets/Soulverse.jpeg';
import Vedio from '../../assets/Component38.png';
import Vedio1 from '../../assets/SoulverseVideo.mp4';
import Vedio2 from '../../assets/ElevatorPitch.mp4';

const TestimonialVideos = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');

    const openVideo = (url) => {
        setVideoUrl(url);
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
        setVideoUrl(''); // Clear the video URL
    };

    const videoPopupStyle = {
        display: isVideoOpen ? 'block' : 'none',
    };

    const imageClickStyle = isVideoOpen ? { width: '100%', height: 'auto' } : {};

    return (
        <>
            <div className='w-full'>
                <div className='pr-10 pl-10 flex justify-between items-center w-full max-sm:pl-2 max-sm:pr-2'>
                    <p className='text-[22px] font-bold max-sm:text-[18px]'>Testimonial videos</p>
                    <button><img src={View1} alt="View More Button" /></button>
                </div>
                <div className='m-auto py-4 flex justify-center items-center w-[90%] max-sm:flex-col max-sm:p-2'>
                    {isVideoOpen && (
                        <div id="videoPopup" style={videoPopupStyle}>
                            <span id="closeBtn" onClick={closeVideo}>X</span>
                            <iframe
                                width="100%"
                                height="315"
                                src={videoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    <div className='flex-1 mr-4'>
                        <button onClick={() => openVideo('https://www.youtube.com/embed/raXLsIiOz1w?si=VGb8B5GOJg_vRyH-')}>
                            <img
                                className='testimonialVedio1 flex justify-center items-center rounded-xl cursor-pointer w-full h-[500px] max-sm:w-[90vw] max-sm:h-[300px]'
                                src={Vedio}
                                alt="Video Thumbnail"
                            />
                        </button>
                    </div>

                    <div className='flex flex-col flex-1'>
                        <div className='mb-4'>
                            <img
                                onClick={() => openVideo(Vedio2)}
                                className='testimonialVedio2 cursor-pointer rounded-xl w-full h-[240px] max-sm:w-[90vw] max-sm:h-[150px] border-r-2'
                                src={View2}
                                alt="Video Thumbnail 2"
                                style={imageClickStyle}
                            />
                        </div>
                        <div>
                            <img
                                onClick={() => openVideo(Vedio1)}
                                className='testimonialVedio3 rounded-xl cursor-pointer w-full h-[240px] max-sm:w-[90vw] max-sm:h-[150px] border-r-2'
                                src={View3}
                                alt="Video Thumbnail 3"
                                style={imageClickStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialVideos;

