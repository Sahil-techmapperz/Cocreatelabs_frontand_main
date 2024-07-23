import React, { useEffect } from 'react'
import '../CSS/contact.css';
import SmartPic1 from '../assets/smartpic1.png'
import SmartPic2 from '../assets/smartpic2.png'
import SmartPic3 from '../assets/smartpic3.png'
import SmartPic4 from '../assets/smartpic4.png'
import SmartPic5 from '../assets/ContactUs.png'
import ContactForm from '../component/ContactForm/ContactForm';

const Connect = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <div>
                <div className='font-sans pt-[6%] max-sm:pt-[50px]'>

                    <section className='flex w-full pl-16 h-[100vh] gap-[8%] max-sm:flex-col  max-sm:p-4 max-sm:w-[100%] mb-6 max-sm:h-auto'>
                        <div className='w-[40%] max-sm:w-[100%] '>
                            <div className=''>
                                <p className='text-3xl font-bold font-sans max-sm:text-center'>DISCOVER US</p>
                                <p className='mt-3 font-sans  font-normal leading-6 text-base  max-sm:text-justify'>CoCreate Labs is here to help you:</p>
                                <p className='text-base font-sans  font-normal leading-6 max-sm:text-justify'>Our experts are available to answer any questions you might have. We’ve got the answers.</p>
                            </div>
                            <div className='mt-3'>
                                <p className='text-2xl  font-sans font-bold leading-6 max-sm:text-center max-sm:mb-[15px]'>Visit Us</p>
                                <div className='flex  max-sm:gap-[10%] '>
                                    <div className='border-r-2 border-black'>
                                        <p className='text-lg mt-3 font-sans font-bold  leading-6'>UK address:</p>
                                        <a className='text-base mt-3 font-sans  font-normal leading-6'><u>404 Stanley Turner House, 32 Barry Blandford Way, London, E3 3XD</u></a>

                                    </div>
                                    <div className='pl-[25px]'>
                                        <p className='text-lg mt-3 font-sans  font-bold leading-6 max-sm:w-[120px]'>India address: </p>
                                        <p className='text-base  font-sans   font-normal leading-6'><u>23/4, Gariahat Road, Kolkata, India - 700029</u></p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-10 max-sm:text-center max-sm:mt-[3.5rem]'>
                                <p className='text-2xl font-bold font-sans  leading-6'>Email US</p>
                                <p><u>hello@cocreatelabs.in</u></p>
                            </div>

                        </div>

                        <div className='relative   h-[75%] w-[47%] max-sm:hidden '>

                            <img className='absolute w-[250px]  top-[0] z-2 left-[20%]' src={SmartPic3} alt="Smart Picture 1" />
                            <img className='absolute w-[250px]   top-[16%] z-20 right-[0] ' src={SmartPic4} alt="Smart Picture 2" />
                            <img className='absolute w-[250px]  top-[30%] z-2 left-[0%] ' src={SmartPic1} alt="Smart Picture 3" />
                            <img className='absolute w-[250px]   bottom-[0%] z-20 right-[9%] ' src={SmartPic2} alt="Smart Picture 4" />
                        </div>
                    </section>





                    <div className=' bg-gray-900 text-white overflow-hidden h-[480px] max-sm:mt-0 max-sm:h-[auto] max-sm:w-[100%]'>
                        <div className='flex justify-between max-sm:flex-col '>

                            <div className='pl-16  max-sm:p-1 w-[50vw] max-sm:w-[100vw]'>
                                <img className='h-[100px] ml-[-9%]   max-sm:mt-[-50px] max-sm:ml-10 max-sm:w-[70%] max-sm:items-center' src={SmartPic5} />
                                <p className='text-5xl font-bold font-sans max-sm:text-center max-sm:text-3xl'>Have a project!</p>
                                <p className='text-5xl font-bold font-sans   max-sm:text-center max-sm:text-2xl'> Let’s discuss </p>
                                <p className='text-2xl mt-1 font-sans   max-sm:text-center max-sm:text-xl'>Thank you for getting in touch! Kindly. </p>
                                <p className='text-2xl mt-1 font-sans   max-sm:text-center max-sm:text-xl'>Fill the form, have a great day!</p>
                            </div>
                            {/* <div className=''>
                            <form className='max-sm:ml-[25px]'>
                                <div className='grid grid-cols-2 gap-12 mt-14 mr-12 max-sm:gap-[2rem] max-sm:mt-0 max-sm:mr-0'>
                                    <div className=''>
                                        <p className='font-sans'>Your Name</p>
                                        <input className='w-60 border border-solid bg-white border-gray-400 h-0.5 rounded-md max-sm:w-[7rem]'/>
                                    </div>
                                    <div className=''>
                                        <p className='font-sans'>Your Email</p>
                                        <div className='w-60 border border-solid bg-white border-gray-400 h-0.5 rounded-md max-sm:w-[7rem]'></div>
                                    </div>
                                    <div className=''>
                                        <p className='font-sans'>Phone Number</p>
                                        <div className='w-60 border border-solid bg-white border-gray-400 h-0.5 rounded-md max-sm:w-[7rem]'></div>
                                    </div>
                                    <div className=''>
                                        <p className='font-sans'>Country</p>
                                        <div className='w-60 border border-solid bg-white border-gray-400 h-0.5 rounded-md max-sm:w-[7rem]'></div>
                                    </div>


                                    <div className=''>
                                        <p className='font-sans'>Company Name</p>
                                        <div className='w-[90%] border border-solid bg-white border-gray-400 h-0.5 rounded-md max-sm:w-[7rem]'></div>
                                    </div>
                                    <div className=''>
                                        <p className='font-sans'>Interested In</p>
                                        <div className='w-[90%] border border-solid bg-white border-gray-400 h-0.5 rounded-md max-sm:w-[7rem]'></div>
                                    </div>

                                </div>
                                <div className='mt-8'>
                                    <p className='font-sans'>Message </p>
                                    <div className='w-[92%] border border-solid bg-white border-gray-400 h-0.5 rounded-md max-sm:w-[89%]'></div>
                                </div>
                                <button className='mt-8 w-[100px] h-[45px] border rounded bg-yellow-400 text-black font-sans max-sm:ml-[30%]'>Submit</button>

                            </form>
                        </div> */}
                            <div className='w-[50vw] max-sm:w-[100vw]'>
                                <ContactForm />
                            </div>
                        </div>

                        <p className='text-9xl font-bold text-center mt-3 text-gray-700 max-sm:hidden'>CoCreate Labs</p>
                    </div>

                </div>

            </div>
            {/* <div className="map-container">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d117875.08357964091!2d88.3377618816755!3d22.59419508170631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a0275f5e9f0d845%3A0xacdb2affb4c5cecb!2sCF-401%2C%20CF%20Block%2C%20Block%20-%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700064!3m2!1d22.5942161!2d88.4201635!5e0!3m2!1sen!2sin!4v1704675328202!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div> */}

        </>
    )
}

export default Connect;
