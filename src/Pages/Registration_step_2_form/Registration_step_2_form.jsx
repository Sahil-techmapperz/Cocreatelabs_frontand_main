import React from 'react';
import { Link } from 'react-router-dom';
import right_arrow from "../../assets/right_arrow.png";
import Twitter from "../../assets/Twitter.png";
import FB from "../../assets/FB.png";
import phone_logo from "../../assets/phpne_logo.png";
import Email_logo from "../../assets/Email_logo.png";
import Plase_icon from "../../assets/Plase_icon.png";

const Registration_step_2_form = () => {
    return (
        <div className='max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg my-4'>
            <h1 className='text-2xl font-bold mb-2'>Profile Info</h1>
            <p className='mb-4'>Fill in the data for your profile. It will take a couple of minutes.</p>

            <div>
                <h2 className='text-xl font-semibold mb-2'>Contacts</h2>
                <p className='mb-4'>These contacts are used to inform about orders</p>

                <form className='space-y-4'>
                    <div className='flex gap-4 items-center'>
                        <img src={Email_logo} alt='Email' className='w-6 h-6'/>
                        <input className='border-b focus:outline-none p-2 flex-1' placeholder='Email'/>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img src={phone_logo} alt='Phone' className='w-6 h-6'/>
                        <input className='border-b focus:outline-none p-2 flex-1' placeholder='Phone'/>
                    </div>

                    <h2 className='text-xl font-semibold mb-2'>Social Network</h2>
                    <p className='mb-4'>Indicate the desired communication method</p>
                    
                    <div className='flex gap-4 items-center'>
                        <img src={Twitter} alt='Twitter' className='w-6 h-6'/>
                        <select className='border-b focus:outline-none p-2 flex-1'>
                            <option>Skype</option>
                            {/* Add more options as needed */}
                        </select>
                        <input className='border-b focus:outline-none p-2 flex-1' placeholder='@profile'/>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <img src={FB} alt='Facebook' className='w-6 h-6'/>
                        <select className='border-b focus:outline-none p-2 flex-1'>
                            <option>Facebook</option>
                            {/* Add more options as needed */}
                        </select>
                        <input className='border-b focus:outline-none p-2 flex-1' placeholder='@profile'/>
                    </div>

                    <Link to={"#"} className='text-blue-500 hover:underline flex items-center'>
                        {/* Replace src='' with the actual image path if needed */}
                        <img src={Plase_icon} alt='Plase_icon' className='w-4 h-4 mr-2'/>
                        Add More
                    </Link>
                </form>
            </div>

            <button className='mt-6 px-4 py-2 bg-gray-200 text-black rounded-md flex items-center hover:bg-gray-300'>
                Go Next
                <img src={right_arrow} alt='right_arrow' className='ml-2' />
            </button>
        </div>
    );
};

export default Registration_step_2_form;
