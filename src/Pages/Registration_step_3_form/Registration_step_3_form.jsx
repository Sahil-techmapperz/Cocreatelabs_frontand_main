import React from 'react'

const Registration_step_3_form = () => {
    return (
        <div className='max-w-2xl w-[35%] mx-auto p-6 bg-white '>
            <h1 className='text-2xl font-bold mb-2'>Profile Info</h1>
            <p className='mb-4'>Fill in the data for your profile. It will take a couple of minutes.</p>

            <div className='shadow-md rounded-lg my-4 p-6'>
            <h1 className='text-2xl font-bold mb-2'>Delivery</h1>
            <p className='mb-4'>Used for shipping orders</p>
            <form className='space-y-4'>
                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>Address</label>
                    <input className='border-b border-gray-300 focus:outline-none p-2' placeholder='Address' />
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>City</label>
                    <select className='border-b border-gray-300 focus:outline-none p-2'>
                        <option>Kolkata</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className='flex flex-wrap md:flex-nowrap gap-4 mb-4'>
                    <div className='flex-1'>
                        <label className='block mb-2 font-medium text-gray-700'>Country</label>
                        <select className='w-full border-b focus:outline-none border-gray-300  p-2'>
                            <option>India</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <div className='flex-1'>
                        <label className='block mb-2 font-medium text-gray-700'>Zip code</label>
                        <input className='w-full border-b focus:outline-none border-gray-300  p-2' placeholder='Zip code' />
                    </div>
                </div>




                <div className='flex flex-col mb-2'>
                    <label className='mb-1 font-medium'>Optional</label>
                    <input className='border-b border-gray-300 focus:outline-none p-2' />
                </div>
            </form>


            <button className='mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
                Save
            </button>
            </div>
        </div>
    )
}

export default Registration_step_3_form;
