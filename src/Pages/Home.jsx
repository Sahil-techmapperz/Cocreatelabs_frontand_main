import React from 'react'
import Build from '../component/Build'
import Offering from '../component/Offering'
import Movinglogo from '../component/Movinglogo'
import Gettingstarted from '../component/Gettingstarted'
import Whyjoin from '../component/Whyjoin'
import Join from '../component/Join'
import Upcomingevents from '../component/Upcomingevents'; // Ensure this path is correct and matches the file system
import Changemaker from '../component/Changemaker'
import Knowledge from '../component/Knowledge';
import Accordian from '../component/Accordian'
import Newslatter from '../component/Newslatter'
import Carosal from './Carousel/Carousel'
import Bluerectangle from '../component/Bluerectangle'
import TestimonialVideos from './TestimonialVideos/TestimonialVideos'


const Home = () => {
    return (
        <div class="font-sans w-full pt-[80px]">
            <Build  />
            <Offering />
            {/* <Carosal />       */}
            <Gettingstarted />
            <Whyjoin />
            {/* <Join /> */}
            <Upcomingevents />
            <Changemaker />
            {/* <Knowledge /> */}
            {/* <Bluerectangle /> */}
            <TestimonialVideos />
            <Accordian />
            {/* <7Newslatter /> */}
        </div>
    )
}

export default Home;
