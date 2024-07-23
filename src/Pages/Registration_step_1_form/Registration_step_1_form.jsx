import React from 'react';
import { Link } from 'react-router-dom';
import right_arrow from "../../assets/right_arrow.png";

const Registration_step_1_form = () => {
    return (
        <div className='max-w-2xl mx-auto  bg-white mb-2'>
            <h1 className='text-2xl font-bold mb-2'>Profile Info</h1>
            <p className='mb-4'>Fill in the data for your profile. It will take a couple of minutes.</p>

            <div>
                <div className='mb-4'>
                    <input type='checkbox' id='terms' className='mr-2' />
                    <label htmlFor='terms'>I agree with <Link to={"#"} className='text-blue-500 hover:underline'>Terms of use</Link></label>
                </div>

                <div className='border rounded-lg p-6'>
                    <h2 className='text-xl font-semibold mb-2'>Profile data</h2>
                    <p className='mb-4'>Specify exactly as in your ID</p>

                    <form className='space-y-4'>
                        <div>
                            <label className='block text-sm font-medium mb-1'>Name*</label>
                            <input className='w-full border-b focus:outline-none p-2' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Name of startup</label>
                            <input className='w-full border-b focus:outline-none p-2' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Current stage*</label>
                            <div className='flex items-center mb-1'>
                                <input type='checkbox' id='ideaToPrototype' className='mr-2' />
                                <label htmlFor='ideaToPrototype'>Idea to Prototype</label>
                            </div>
                            <div className='flex items-center mb-1'>
                                <input type='checkbox' id='prototypeToProduct' className='mr-2' />
                                <label htmlFor='prototypeToProduct'>Prototype to Product</label>
                            </div>
                            <div className='flex items-center mb-1'>
                                <input type='checkbox' id='proofOfConcept' className='mr-2' />
                                <label htmlFor='proofOfConcept'>Proof of Concept</label>
                            </div>
                            <div className='flex items-center mb-1'>
                                <input type='checkbox' id='goToMarket' className='mr-2' />
                                <label htmlFor='goToMarket'>Go to Market Strategy</label>
                            </div>
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Is your company already incorporated? *</label>
                            <select className='w-full border-b focus:outline-none p-2'>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Year of incorporation of Company *</label>
                            <input type='text' className='w-full border-b focus:outline-none p-2' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Company LinkedIn Page *</label>
                            <input type='url' className='w-full border-b focus:outline-none p-2' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Founder/ CEO Name *</label>
                            <input type='text' className='w-full border-b focus:outline-none p-2' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Team size *</label>
                            <input type='number' className='w-full border-b focus:outline-none p-2' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Background & Qualification of Founder(s) *</label>
                            <input type='text' className='w-full border-b focus:outline-none p-2' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>LinkedIn Profile of Founder(s) *</label>
                            <input type='url' className='w-full border-b focus:outline-none p-2' />
                        </div>

                        <div>
                            <label className='block text-sm font-medium mb-1'>Company Website</label>
                            <input type='url' className='w-full border-b focus:outline-none p-2' />
                        </div>
                    </form>
                </div>
            </div>
            <button className='mt-6 px-4 py-2  text-black rounded-md flex items-center border'>
                Go Next
                <img src={right_arrow} alt='right_arrow' className='ml-2' />
            </button>
        </div>
    )
}

export default Registration_step_1_form;