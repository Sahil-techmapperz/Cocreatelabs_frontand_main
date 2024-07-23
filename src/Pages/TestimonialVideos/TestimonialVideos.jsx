import React, { useState } from 'react'
import View1 from '../../assets/ViewMorebutton.png'
import View2 from '../../assets/AnuragSingh.jpeg'
import View3 from '../../assets/Soulverse.jpeg'
import View4 from '../../assets/bolg2.png'
import View5 from '../../assets/VideoButton.png'
import Vedio1 from '../../assets/SoulverseVideo.mp4'
import Vedio2 from '../../assets/ElevatorPitch.mp4'
import Vedio from '../../assets/Component38.png'


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
            <div className='pr-10 pl-10 flex justify-between  items-center w-full max-sm:pl-2 max-sm:pr-2' >
                <p className='text-[22px] font-bold max-sm:text-[18px]'>Testimonial videos</p>
                <button><img src={View1} /></button>
            </div>
            <div className=' m-auto  pb-4 grid grid-cols-2 gap-[10%] justify-center items-center w-[90%] max-sm:flex max-sm:flex-col max-sm:p-2'>
                <div>
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

                    <div>
                        <button onClick={() => openVideo('https://www.youtube.com/embed/raXLsIiOz1w?si=VGb8B5GOJg_vRyH-')}>
                            <img
                                className='testimonialVedio1 h-full  flex justify-center items-center rounded-xl w-full cursor-pointer max-sm:w-[90vw] max-sm:h-[200px]'
                                src={Vedio}
                                alt="Video Thumbnail"
                            />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col'>

                    <div>
                        <div id="videoPopup" style={videoPopupStyle}>
                            <span id="closeBtn" onClick={closeVideo}>X</span>
                            <iframe
                                width="100%"
                                height="315"
                                src={isVideoOpen ? videoUrl : ''}
                                title="YouTube video player"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div type='button' >
                            <img
                                onClick={() => openVideo(Vedio2)}
                                className='testimonialVedio2   cursor-pointer rounded-xl  w-[90%] max-sm:w-[90vw] max-sm:h-[200px] border-r-2'
                                src={View2}
                                style={imageClickStyle}
                            />
                        </div>
                    </div>





                    {/* <div>
                        <div id="videoPopup" style={videoPopupStyle}>
                            <span id="closeBtn" onClick={closeVideo}>X</span>
                            <iframe
                                width="100%"
                                height="315"
                                src={isVideoOpen ? videoUrl : ''}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div type='button' >
                            <img
                                onClick={() => openVideo(Vedio1)}
                                className='testimonialVedio3 rounded-xl cursor-pointer w-[90%] mt-4 max-sm:w-[90vw] max-sm:h-[200px] border-r-2'
                                src={View3}
                                style={imageClickStyle}
                            />
                        </div>
                    </div> */}

                    {/* This img element is outside of the video popup logic, so it remains unchanged */}
                </div>
            </div>

            </div>
        </>
    )
}
export default TestimonialVideos
