import React from 'react'
import { MdLock } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const MobileRegistration = () => {
    return (
        <div className='max-w-2xl w-[40%] mx-auto p-6 bg-white '>
            <h1 className='text-2xl font-bold mb-2'>Registration</h1>
            <p className='mb-4'>Fill in the registration data. It will take a couple of minutes. </p>

            <div className='shadow-md rounded-lg my-4 p-6'>
                <div className='flex justify-center items-center gap-[20px]'>
                    <span className='text-[#79808F] text-[30px]'><MdLock /></span>
                    <p className='mb-4'>We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
                    <span className='text-[#79808F] text-[30px]'><RxCross1 /></span>
                </div>
                {/* <h1 className='text-2xl font-bold mb-2'>Delivery</h1> */}
                <form className='space-y-4'>
                    {/* <div className='flex flex-col mb-2'>
 <label className='mb-1 font-medium'>Address</label>
 <input className='border-b border-gray-300 focus:outline-none p-2' placeholder='Address' />
 </div> */}

                    <div className='flex flex-col mb-2'>
                        <label className='mb-1 font-medium'>Enter Your Email</label>
                        <input
                            className='w-full border-b border-gray-300 focus:outline-none p-2 text-[solid to-black] placeholder-[black]'
                            placeholder='Enter Your Email'
                        />
                        <span>test@abc.com</span>
                    </div>
                </form>


                {/* <button className='mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
 Save
 </button> */}
                <button className='mt-6 px-4 py-2 bg-white-600 rounded-md w-100 text-black border-gray-500 border-[1px]'>
                    Send Code
                </button>
            </div>
        </div>
    )
}

export default MobileRegistration;
