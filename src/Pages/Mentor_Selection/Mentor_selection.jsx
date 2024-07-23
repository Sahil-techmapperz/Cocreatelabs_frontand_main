import React from 'react'

import mentor from "../../assets/mentro1.png";
import want_to_be_a_Mentor from "../../assets/want_to_be_a_Mentor.png";


const Mentor_selection = () => {
    return (
        <div>
            <div className='h-[300px] w-full bg-[#F4F6FC] flex justify-center items-center px-[100px] flex-col'>
                <div className='w-[50%] drop-shadow-lg'>
                    <input className='w-full py-[10px] pl-4 rounded-[30px] text-[20px]' placeholder='Search by skills or job title' />
                </div>
                <div className=' w-full grid grid-cols-7 gap-[20px] mt-[30px]'>
                    <select className='py-[5px] px-[10px] rounded-[10px]'>
                        <option>Industry</option>
                    </select>
                    <select className='py-[5px] px-[10px] rounded-[10px]'>
                        <option>Role</option>
                    </select>
                    <select className='py-[5px] px-[10px] rounded-[10px]'>
                        <option>Country</option>
                    </select>
                    <select className='py-[5px] px-[10px] rounded-[10px]'>
                        <option>Skills</option>
                    </select>
                    <select className='py-[5px] px-[10px] rounded-[10px]'>
                        <option>Experience</option>
                    </select>
                    <select className='py-[5px] px-[10px] rounded-[10px]'>
                        <option>Company</option>
                    </select>
                    <select className='py-[5px] px-[10px] rounded-[10px]'>
                        <option>Filter</option>
                    </select>


                </div>
            </div>

            <div className='px-[7rem] my-[30px]'>
                <h1 className=' text-[#545454] font-[600]'>100+ Mentor found</h1>
                <div>
                    <div className='w-full h-[300px] border rounded-[30px] px-[3rem] py-[2rem] flex mt-[2rem]'>
                        <div className='w-[70%] h-[100%] border-r flex gap-[2rem]'>
                            <img className='w-[30%] object-contain' src={mentor} alt='' />
                            <div className='w-[80%] pr-[2rem]'>
                                <div className='border-b'>
                                    <h1 className='font-[600] leading-6'>Sanjeev Subedi CA</h1>
                                    <p className='leading-6'>Sr. Software Engineer at <spam className="font-[500]">eBAY</spam></p>
                                    <p className='leading-6 text-[#4A90E2]'>12+ Years of Front End Engineering , Educator Mentor</p>
                                    <p className='text-[#FFD600]'>★★★★★ <span className='text-black'>5.0 (20 reviews)</span></p>
                                    <h2 className='leading-6 font-[500]'>Location: INDIA</h2>
                                </div>
                                <p className='leading-5'>👋 Hi!!! I run the UX teams for Gmail @ Google based out of San Francisco. I also teach at UC Berkeley. I have a strong track record of helping mentees land UX jobs, mostly in big tech. As a mentee, you’ll have hands-on support from me. Our first call …</p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-col items-center gap-2'>
                            <div className='bg-[#4A90E2] text-white rounded-md py-[6px] px-[8px] w-[50%]'>
                                ★ Top Mentor
                            </div>
                            <p className='font-[500]'>Skills:</p>
                            <ul className='text-[#4A90E2]'>
                                <li>JavaScript</li>
                                <li>Angular</li>
                                <li>Node JS</li>
                                <li>React</li>
                                <li>More...</li>
                            </ul>
                            <button className='bg-[#D5DCF0] text-[#7A7979] rounded-md py-[6px] px-[8px]  w-[50%]'>7 Day Free Trial</button>
                        </div>
                    </div>
                    <div className='w-full h-[300px] border rounded-[30px] px-[3rem] py-[2rem] flex mt-[2rem]'>
                        <div className='w-[70%] h-[100%] border-r flex gap-[2rem]'>
                            <img className='w-[30%] object-contain' src={mentor} alt='' />
                            <div className='w-[80%] pr-[2rem]'>
                                <div className='border-b'>
                                    <h1 className='font-[600] leading-6'>Sanjeev Subedi CA</h1>
                                    <p className='leading-6'>Sr. Software Engineer at <spam className="font-[500]">eBAY</spam></p>
                                    <p className='leading-6 text-[#4A90E2]'>12+ Years of Front End Engineering , Educator Mentor</p>
                                    <p className='text-[#FFD600]'>★★★★★ <span className='text-black'>5.0 (20 reviews)</span></p>
                                    <h2 className='leading-6 font-[500]'>Location: INDIA</h2>
                                </div>
                                <p className='leading-5'>👋 Hi!!! I run the UX teams for Gmail @ Google based out of San Francisco. I also teach at UC Berkeley. I have a strong track record of helping mentees land UX jobs, mostly in big tech. As a mentee, you’ll have hands-on support from me. Our first call …</p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-col items-center gap-2'>
                            <div className='bg-[#4A90E2] text-white rounded-md py-[6px] px-[8px] w-[50%]'>
                                ★ Top Mentor
                            </div>
                            <p className='font-[500]'>Skills:</p>
                            <ul className='text-[#4A90E2]'>
                                <li>JavaScript</li>
                                <li>Angular</li>
                                <li>Node JS</li>
                                <li>React</li>
                                <li>More...</li>
                            </ul>
                            <button className='bg-[#D5DCF0] text-[#7A7979] rounded-md py-[6px] px-[8px]  w-[50%]'>7 Day Free Trial</button>
                        </div>
                    </div>
                    <div className='w-full h-[300px] border rounded-[30px] px-[3rem] py-[2rem] flex mt-[2rem]'>
                        <div className='w-[70%] h-[100%] border-r flex gap-[2rem]'>
                            <img className='w-[30%] object-contain' src={mentor} alt='' />
                            <div className='w-[80%] pr-[2rem]'>
                                <div className='border-b'>
                                    <h1 className='font-[600] leading-6'>Sanjeev Subedi CA</h1>
                                    <p className='leading-6'>Sr. Software Engineer at <spam className="font-[500]">eBAY</spam></p>
                                    <p className='leading-6 text-[#4A90E2]'>12+ Years of Front End Engineering , Educator Mentor</p>
                                    <p className='text-[#FFD600]'>★★★★★ <span className='text-black'>5.0 (20 reviews)</span></p>
                                    <h2 className='leading-6 font-[500]'>Location: INDIA</h2>
                                </div>
                                <p className='leading-5'>👋 Hi!!! I run the UX teams for Gmail @ Google based out of San Francisco. I also teach at UC Berkeley. I have a strong track record of helping mentees land UX jobs, mostly in big tech. As a mentee, you’ll have hands-on support from me. Our first call …</p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-col items-center gap-2'>
                            <div className='bg-[#4A90E2] text-white rounded-md py-[6px] px-[8px] w-[50%]'>
                                ★ Top Mentor
                            </div>
                            <p className='font-[500]'>Skills:</p>
                            <ul className='text-[#4A90E2]'>
                                <li>JavaScript</li>
                                <li>Angular</li>
                                <li>Node JS</li>
                                <li>React</li>
                                <li>More...</li>
                            </ul>
                            <button className='bg-[#D5DCF0] text-[#7A7979] rounded-md py-[6px] px-[8px]  w-[50%]'>7 Day Free Trial</button>
                        </div>
                    </div>
                    <div className='w-full h-[300px] border rounded-[30px] px-[3rem] py-[2rem] flex mt-[2rem]'>
                        <div className='w-[70%] h-[100%] border-r flex gap-[2rem]'>
                            <img className='w-[30%] object-contain' src={mentor} alt='' />
                            <div className='w-[80%] pr-[2rem]'>
                                <div className='border-b'>
                                    <h1 className='font-[600] leading-6'>Sanjeev Subedi CA</h1>
                                    <p className='leading-6'>Sr. Software Engineer at <spam className="font-[500]">eBAY</spam></p>
                                    <p className='leading-6 text-[#4A90E2]'>12+ Years of Front End Engineering , Educator Mentor</p>
                                    <p className='text-[#FFD600]'>★★★★★ <span className='text-black'>5.0 (20 reviews)</span></p>
                                    <h2 className='leading-6 font-[500]'>Location: INDIA</h2>
                                </div>
                                <p className='leading-5'>👋 Hi!!! I run the UX teams for Gmail @ Google based out of San Francisco. I also teach at UC Berkeley. I have a strong track record of helping mentees land UX jobs, mostly in big tech. As a mentee, you’ll have hands-on support from me. Our first call …</p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-col items-center gap-2'>
                            <div className='bg-[#4A90E2] text-white rounded-md py-[6px] px-[8px] w-[50%]'>
                                ★ Top Mentor
                            </div>
                            <p className='font-[500]'>Skills:</p>
                            <ul className='text-[#4A90E2]'>
                                <li>JavaScript</li>
                                <li>Angular</li>
                                <li>Node JS</li>
                                <li>React</li>
                                <li>More...</li>
                            </ul>
                            <button className='bg-[#D5DCF0] text-[#7A7979] rounded-md py-[6px] px-[8px]  w-[50%]'>7 Day Free Trial</button>
                        </div>
                    </div>
                    <div className='w-full h-[300px] border rounded-[30px] px-[3rem] py-[2rem] flex mt-[2rem]'>
                        <div className='w-[70%] h-[100%] border-r flex gap-[2rem]'>
                            <img className='w-[30%] object-contain' src={mentor} alt='' />
                            <div className='w-[80%] pr-[2rem]'>
                                <div className='border-b'>
                                    <h1 className='font-[600] leading-6'>Sanjeev Subedi CA</h1>
                                    <p className='leading-6'>Sr. Software Engineer at <spam className="font-[500]">eBAY</spam></p>
                                    <p className='leading-6 text-[#4A90E2]'>12+ Years of Front End Engineering , Educator Mentor</p>
                                    <p className='text-[#FFD600]'>★★★★★ <span className='text-black'>5.0 (20 reviews)</span></p>
                                    <h2 className='leading-6 font-[500]'>Location: INDIA</h2>
                                </div>
                                <p className='leading-5'>👋 Hi!!! I run the UX teams for Gmail @ Google based out of San Francisco. I also teach at UC Berkeley. I have a strong track record of helping mentees land UX jobs, mostly in big tech. As a mentee, you’ll have hands-on support from me. Our first call …</p>
                            </div>
                        </div>
                        <div className='w-[30%] flex flex-col items-center gap-2'>
                            <div className='bg-[#4A90E2] text-white rounded-md py-[6px] px-[8px] w-[50%]'>
                                ★ Top Mentor
                            </div>
                            <p className='font-[500]'>Skills:</p>
                            <ul className='text-[#4A90E2]'>
                                <li>JavaScript</li>
                                <li>Angular</li>
                                <li>Node JS</li>
                                <li>React</li>
                                <li>More...</li>
                            </ul>
                            <button className='bg-[#D5DCF0] text-[#7A7979] rounded-md py-[6px] px-[8px]  w-[50%]'>7 Day Free Trial</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[300px] flex gap-4 bg-[#F4F7FF]'>
                <img src={want_to_be_a_Mentor} alt='' className='w-[50%] '/>
                <div className='w-[50%] flex flex-col items-center justify-center gap-4 '>
                    <h1 className='text-[#1E0E62] font-[700] text-[42px]'>Want to be a Mentor? </h1>
                    <p className='text-[#15143966] w-[60%]'>Get access to like minded people and grow your social ecosystem in the startup community.</p>
                    <button className='text-[#4A90E2] border-2 border-[#4A90E2] rounded-md py-[6px] px-[15px]'>Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default Mentor_selection;