import React, { useEffect, useState } from 'react'
import Registration_avater from "../../assets/Registration_avater.png";
import Google from "../../assets/Google.png";
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
const Registration = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/eventregistration', { state: { name, email } }); // Replace '/destination' with your target route
    };
    return (
        <div className='w-full h-[100vh] flex max-sm:flex-col'>
            <div className='w-[50%] h-[100%] relative max-sm:w-[100%] max-sm:h-[40%]'>
                <img className='w-[100%] h-[100%] object-cover' src={Registration_avater} alt='Registration_avater' />
                <h1 className='absolute max-sm:hidden top-[100px] left-[52px] w-[250px] h-[120px] text-[30px] font-[700] leading-[40px] tracking-[2%] text-white'>COCREATE LABS</h1>
                <p className='absolute  w-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[16px] font-[500] leading-[30px] text-left'>CoCreate Labs is a one of a kind ecosystem of global leaders and founders that connect businesses, people, expertise and funds.</p>
                {/* <p className='absolute bottom-[40px] left-[52px] text-white'>Madhushan sasanka</p>
                <p className='absolute bottom-[20px] left-[52px] text-white'>CEO, abc.com</p> */}
            </div>
            <div className='flex max-sm:w-[100%] max-sm:h-[50%] max-sm:mt-[20px] justify-center items-center w-[50%] h-[100%] '>
                <div className='w-full max-w-md p-8 space-y-4  '>
                    {/* <h1 className='text-2xl font-bold text-center'>Create Account</h1> */}
                    <h1 className='text-2xl font-bold text-center'>Register For Event</h1>
                    {/* <p className='text-center text-gray-600'>Let’s get started with your 30 days free trial</p> */}
                    <form className='space-y-4' onSubmit={handleSubmit}>

                        <div className="col-span-2" key={"name"}>
                            <TextField
                                label={"Name"}
                                multiline
                                rows={1}
                                name="name"
                                type='text'
                                value={name}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            />
                        </div>

                        <div className="col-span-2" key={"email"}>
                            <TextField
                                label={"Email"}
                                multiline
                                rows={1}
                                name="email"
                                type='email'
                                value={email}
                                onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        {/* <div>
                            <label className='block mb-2 text-sm font-medium text-gray-700'>Password</label>
                            <input type='password' className='w-full px-3 py-2 border-b border-gray-300  focus:outline-none ' />
                        </div> */}
                        <div className='flex justify-center items-center flex-col gap-3'>
                            {/* <button className='px-6 w-[100%] py-2 text-white bg-black rounded-md hover:bg-gray-700'>Create Account</button> */}
                            <button type='submit' className='px-6 w-[100%] py-2 text-white bg-black rounded-md hover:bg-gray-700'>Register For Event</button>
                            {/* <button className='flex justify-center w-[100%] items-center px-6 py-2 text-black  rounded-md border'>
                                <img src={Google} alt='Google' className='w-4 h-4 mr-2' /> Sign up with Google
                            </button> */}
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Already have an account? <Link to={"#"} className='text-blue-500 hover:underline'>Sign in</Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Registration;