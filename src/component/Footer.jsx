import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import FB from "../assets/FB.png";
import Insta from "../assets/insta.png";
import Linkdin from "../assets/linkdin.png";
import Twitter from "../assets/Twitter.png";
import footerblog1 from "../assets/blog1.png";
import footerblog2 from "../assets/bolg2.png";
let Baseurl = import.meta.env.VITE_API_URL;
import axios from 'axios';
import { TextField, Button, Grid, useMediaQuery, useTheme, Snackbar, Alert } from '@mui/material';
import SubscribeForm from './SubscribeForm/SubscribeForm';


const Footer = () => {
    return (
        <div className='bg-indigo-950 p-[50px] max-sm:p-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-[15px]'>
                <div className='flex gap-4 md:gap-9 p-4 flex-col'>
                    <img src={logo} alt="logo" className="w-[50%] mx-auto" />
                    <p className='text-gray-400 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-6'>We create digital experiences for brands and companies by using technology.</p>
                    {/* <div className='flex gap-4 mt-4'>
                        <input placeholder="Your email" className=' rounded-[100px] border-2 border-solid w-full py-2 px-4 bg-transparent' />
                        <button className='text-white text-center text-xs font-medium leading-5 whitespace-nowrap bg-teal-500 rounded-[100px] py-[6px] px-[25px]'>Subscribe</button>
                    </div> */}
                    <SubscribeForm/>
                </div>
                <div className='text-gray-400 flex  justify-around gap-4 md:gap-9 p-4'>
                    <div>
                        <p className='text-white font-bold text-lg mb-4'>Company</p>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-sm md:text-base'><Link to="/about">About Us</Link></li>
                            <li className='text-sm md:text-base'><Link to="/grwothservice">Services</Link></li>
                            <li className='text-sm md:text-base'><Link to="#">Job opportunities</Link></li>
                            {/* <li className='text-sm md:text-base'><Link to="#">Creative people</Link></li> */}
                        </ul>
                    </div>
                    <div>
                        <p className='text-white font-bold text-lg mb-4'>Customer</p>
                        <ul className='flex flex-col gap-4'>
                            <li className='text-sm md:text-base'><Link to="#">Client support</Link></li>
                            <li className='text-sm md:text-base'><Link to="#">Latest news</Link></li>
                            <li className='text-sm md:text-base'><Link to="#">Company story</Link></li>
                            <li className='text-sm md:text-base'><Link to="#">Pricing packages</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-gray-400 p-4'>
                    <p className='text-white font-bold text-lg mb-4'>Latest blog</p>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex gap-4 items-center'>
                            <Link to="#" className='max-sm:w-[50vw]'>
                                <img src={footerblog1} className='w-[50%] lg:w-[100px] max-sm:w-full rounded-lg' alt="" />
                            </Link>
                            <Link to="#" ><p className='text-sm '>I think really important to design with...</p></Link>
                        </li>
                        <li className='flex gap-4 items-center'>
                            <Link to="#" className='max-sm:w-[50vw]'>
                                <img src={footerblog2} alt="" className='w-[50%]  lg:w-[100px] max-sm:w-full rounded-lg' />
                            </Link>
                            <Link to="#"><p className='text-sm '>Recognizing the need is the primary...</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="my-4" />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='flex justify-between text-white'>
                    <Link to="#">Privacy policy</Link>
                    <Link to="#">Legal notice</Link>
                    <Link to="#">Terms of service</Link>
                </div>
                <div className='flex  justify-center gap-[30px]'>


                    <Link to="https://www.facebook.com/cocreatelabs/" target="_blank">
                        <img src={FB} alt="FB" />
                    </Link>
                    <Link to="https://twitter.com/cocreatelabs1" target="_blank">
                        <img src={Twitter} alt="Twitter" />
                    </Link>
                    <Link to="https://www.instagram.com/cocreatelabsofficial/" target="_blank">
                        <img src={Insta} alt="Instagram" />
                    </Link>
                    <Link to="https://www.linkedin.com/company/co-create-lab" target="_blank">
                        <img src={Linkdin} alt="LinkedIn" />
                    </Link>



                    {/* <Link to="#"><img src={FB} alt="FB" /></Link>
                    <Link to="#"><img src={Twitter} alt="twitter" /></Link>
                    <Link to="#"><img src={insta} alt="insta" /></Link>
                    <Link to="#"><img src={linkdin} alt="linkdin" /></Link> */}
                </div>
                <div className='text-white text-center md:text-right md:pr-8'>
                    <p className='mb-2'>
                        © Copyright 2024 - CoCreatelabs
                    </p>
                    <p>
                        Developed by
                        <a target='_blank' href='https://www.techmapperz.com' className='text-white hover:text-gray-500 transition duration-300'>
                          {" "}  Techmapperz
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
