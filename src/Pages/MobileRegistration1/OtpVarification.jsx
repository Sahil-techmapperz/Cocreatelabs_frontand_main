import React from 'react'
import { FaPen } from "react-icons/fa";
import { MdOutlineRefresh } from "react-icons/md";

const OtpVarification = () => {
    return (
        <>
            <div className='max-w-2xl w-[40%] mx-auto p-6 bg-white '>
                <h1 className='text-2xl font-bold mb-2'>Registration</h1>
                <p className='mb-4'>Fill in the registration data. It will take a couple of minutes. </p>

                <div className='shadow-md rounded-lg my-4 p-6'>
                    <p>test@abc.com</p>
                    <div className='flex justify-between'>
                        <p>Email not confirmed yet</p>
                        <span className='text-[#007AFF] text-[25px]'><FaPen /></span>
                    </div>

                </div>
                <div className='shadow-md rounded-lg my-4 p-6'>
                    <form className='space-y-4'>
                        <div className='flex'>
                            <div>
                                <label className='mb-1 font-medium'>Confirmation code</label><br />
                                <input
                                    className='w- border-b border-gray-300 focus:outline-none p-2 flex-1 text-[solid to-black] placeholder-[black]'
                                    placeholder='- - - - - -'
                                />
                            </div>
                            <div className='flex gap-[20px]'>
                                <span className='text-[#007AFF] text-[25px]'><MdOutlineRefresh /></span>
                                <span className='text-[#007AFF]'>Send again</span>
                            </div>
                        </div>
                    </form>


                    {/* <button className='mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
 Save
 </button> */}
                    <button className='mt-6 px-4 py-2 bg-white-600 rounded-md w-100 text-black border-gray-500 border-[1px]'>
                        Confirm
                    </button>
                </div>
            </div >
        </>
    )
}

export default OtpVarification;
