import React from 'react'
import { FaCheck } from "react-icons/fa6";

const PassWordSetup = () => {
    return (
        <>

            <div className='max-w-2xl w-[40%] mx-auto p-6 bg-white '>
                <h1 className='text-2xl font-bold mb-2'>Registration</h1>
                <p className='mb-4'>Fill in the registration data. It will take a couple of minutes. </p>
                <div className='shadow-md rounded-lg my-4 p-6'>
                    <p>test@abc.com</p>
                    <div className='flex'>
                        <span className='text-[#5c5858] text-[18px]'><FaCheck /></span>
                        <p className='text-[#5c5858]'>Email confirmed</p>
                    </div>
                </div>
                <div className='shadow-md rounded-lg my-4 p-6'>
                    <form className='space-y-4'>
                        <div className='shadow-md rounded-lg my-4 p-6'>
                            <div>
                                <label>Enter Your Number</label><br />
                                <input
                                    className='shadow-md w- border-b border-gray-300 focus:outline-none p-2 flex-1 text-[solid to-black] placeholder-[black]'
                                    placeholder='+1 555 555-1234'
                                />
                            </div>
                            <div>
                                <label>Set a Password</label><br />
                                <input type="password"
                                    className='shadow-md w- border-b border-gray-300 focus:outline-none p-2 flex-1 text-[solid to-black] placeholder-[black]'
                                    placeholder=''
                                />
                            </div>
                            <div className='flex'>
                                <span className='text-[#34C759] text-[18px]'><FaCheck /></span>
                                <span className='text-[#34C759]'>Good Password</span>
                            </div>
                        </div>
                    </form>
                    <button className='mt-6 px-4 py-2 bg-[#007AFF] text-white rounded-md hover:bg-[#007AFF]'>
                        Register now
                    </button>
                </div>
            </div>

        </>
    )
}

export default PassWordSetup;
