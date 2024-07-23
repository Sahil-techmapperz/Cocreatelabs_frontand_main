import React, { useEffect } from 'react'
import Growth from '../assets/grothconnect.png'
import Growth1 from '../assets/Growth3.png'
import Growth2 from '../assets/Growth2.png'
import Growth3 from '../assets/Growth1.png'
import Growth4 from '../assets/Growth4.png'
import Growth5 from '../assets/beatsnoop12.jpg'
import Newslatter from './Newslatter'
import Gettingstarted from './Gettingstarted'
import { Link } from 'react-router-dom'


const AmbitiousStartups = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='pl-10 pr-10 max-sm:pl-5 max-sm:pr-5 font-sans w-full pt-[80px]'>
                <div className='flex space-x-0 gap-[5%] max-sm:flex-col max-sm:space-x-2 '>
                    <img className='w-[70%] h-[330px] max-sm:w-[100%] max-sm:h-[200px] ' src={Growth} />

                    <div className='max-sm:m-0 max-sm:w-[100%] max-sm:text-center'>
                        <p className='text-base text-blue-500 font-medium font-sans max-sm:mt-2 '>Join us in revolutionizing the way you define, refine, and realize your entrepreneurial dreams!</p>
                        <p className='font-sans text-5xl font-bold leading-70 tracking-tighter max-sm:text-3xl'>Growth Services:</p>
                        <p className='text-5xl font-bold font-sans max-sm:text-2xl'>Signing Up for Success</p>
                        <p className='mt-10  font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Ready to transform your startup into a thriving business? Sign up for our services to unlock the true potential of your venture. Our team stands ready to empower you through every step of this exhilarating journey.</p>
                        <Link to="/eventregistration">  <button className='mt-10 p-5 rounded-r-full font-bold text-white bg-blue-500 rounded-l-full w-150 border border-solid font-sans'>REGISTER TODAY</button></Link>
                    </div>
                </div>
                <div className='flex mt-12 gap-[5%] space-x-0 max-sm:flex-col max-sm:text-center'>
                    <img className='w-[500px]' src={Growth1} />
                    <div className='max-sm:ml-0  max-sm:w-[300px] '>
                        <p className='text-base text-blue-500 font-medium font-sans max-sm:mt-2'>Services 1</p>
                        <p className=' font-bold  font-sans text-[42px] max-sm:text-3xl'>Unveiling the Power of Business Canvas Creation:</p>
                        <p className='text-4xl text-blue-500 font-medium font-sans max-sm:text-2xl'>Your Blueprint for Success</p>
                        <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>The Business Canvas Creation is an indispensable tool for startups aiming to crystallize their business model and strategy. It's a visual chart with nine essential building blocks that help entrepreneurs outline their business in a clear, concise, and comprehensive manner. </p>

                    </div>



                </div>

                <div className='space-x-0 mt-10 ' >
                    <p className='text-base text-blue-500 font-medium font-sans '>EXPERT GUIDANCE FOR YOUR SUCCESS</p>
                    <div className='grid gap-4 grid-cols-3 max-sm:grid-cols-1 max-sm:text-cemter'>
                        <div className='mt-4 max-sm:mt-2'>
                            <p className='text-[38px] font-medium  mt-10 font-sans max-sm:text-2xl max-sm:mt-[0.5rem]'>Tailored Workshops</p>
                            <p className='font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Engage in hands-on workshops where we guide you through each block, helping you fill in the blanks and refine your business strategy.</p>
                        </div>
                        <div className='mt-4 max-sm:mt-2'>
                            <p className='text-[38px] font-medium mt-10 font-sans max-sm:text-2xl max-sm:mt-[0.5rem]'>Customized Consultation</p>
                            <p className='font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Receive personalized consultations where our experts analyze your Canvas, providing invaluable insights and suggestions for optimization.</p>
                        </div>
                        {/* <div className='mt-4 max-sm:mt-2'>
                            <p className='text-[38px] font-semibold mt-10 font-sans max-sm:text-2xl max-sm:mt-[0.5rem]'>Customized Consultation</p>
                            <p className='font-sans text-lg font-normal leading-6 max-sm:text-justify'>Receive personalized consultations where our experts analyze your Canvas, providing invaluable insights and suggestions for optimization.</p>
                        </div> */}
                        <div className='mt-4 max-sm:mt-2'>
                            <p className='text-[38px] font-medium mt-10 font-sans max-sm:text-2xl max-sm:mt-[0.5rem]'>Ongoing Support</p>
                            <p className='font-sans text-lg font-normal leading-6  max-sm:text-justify max-sm:text-sm'>Our commitment doesn’t end with the Canvas creation. We offer continuous support, adapting strategies as your business evolve.</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-[5%] mt-20 max-sm:flex-col max-sm:mt-[2rem]'>
                    <div>
                        <p className='text-base text-blue-500 font-medium font-sans max-sm:text-center '>Service  2</p>
                        <p className='text-[38px] font-bold  font-sans  max-sm:text-3xl max-sm:mt-0  max-sm:text-center'>Mastering the Art of Pitch Deck Creation:</p>
                        <p className='text-4xl text-blue-500 font-medium font-sans  max-sm:text-2xl  max-sm:text-center'>Your Gateway to Investor Success</p>
                        <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Think of a pitch deck as your business story condensed into a visually engaging presentation. It’s a structured narrative, typically consisting of slides that delve into your business idea, market opportunity, revenue model, team, and more. Join us in revolutionizing the way you present your business, making your pitch an irresistible invitation to invest in your promising future.</p>
                    </div>
                    <img className='w-[500px] max-sm:mt-2.5' src={Growth2} />
                </div>

                <div className='mt-20'>
                    <p className='text-base text-blue-500 font-medium font-sans  max-sm:text-center'>EXPERT GUIDANCE FOR YOUR SUCCESS</p>
                    <div className='grid gap-4 grid-cols-3 max-sm:grid-cols-1'>
                        <div>
                            <p className='text-[38px] font-medium mt-10 font-sans  max-sm:text-2xl max-sm:mt-0'>Strategic Storytelling</p>
                            <p className='font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm '>We help weave your business story into a captivating narrative, highlighting your unique value proposition and market potential.</p>
                        </div>
                        <div>
                            <p className='text-[38px] font-medium mt-10 font-sans  max-sm:text-2xl max-sm:mt-0'>Visually Engaging Design</p>
                            <p className='font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Our designers craft visually stunning decks that complement your content, ensuring a professional and impactful presentation.</p>
                        </div>
                        <div>
                            <p className='text-[38px] font-medium mt-10 font-sans  max-sm:text-2xl max-sm:mt-0'>Tailored Consultation</p>
                            <p className='font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Benefit from personalized consultations where our experts fine-tune your pitch, offering invaluable insights to enhance its effectiveness.</p>
                        </div>

                    </div>
                </div>


                <div className='flex mt-20 space-x-0 gap-[9%] max-sm:flex-col max-sm:mt-[2rem]'>
                    <img className='w-[550px]' src={Growth3} />
                    <div>
                        <p className='text-base text-blue-500 font-medium font-sans  max-sm:text-center'>Service 3</p>
                        <p className='text-[38px]  font-bold font-sans  max-sm:text-3xl'>Unlocking Investor Confidence: </p>
                        <p className='text-4xl  text-blue-500 font-medium font-sans max-sm:text-2xl'>Financial Model & RBV Valuation Report for Your Startup's Success</p>
                        <p className='font-sans text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>The Financial Model and RBV Valuation Report are essential tools for startups to present their financial health, growth potential, and value to investors. The Financial Model provides a projection of revenue, expenses, cash flow, and growth forecasts. The RBV Valuation Report assesses the startup's intrinsic value based on its resources, capabilities, and competitive advantages.</p>

                    </div>
                </div>


                <div className=' mt-20 space-x-0 gap-[5%] max-sm:mt-[2rem]'>
                    <p className='text-base text-blue-500 font-medium font-sans  max-sm:text-center'>EXPERT GUIDANCE FOR YOUR SUCCESS</p>
                    <div className='grid gap-10 grid-cols-3 max-sm:grid-cols-1'>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Customized Financial Models</p>
                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>We craft detailed, customized Financial Models projecting your startup's financial performance, growth trajectory, and potential returns for investors.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>RBV Valuation Expertise</p>
                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Our experts delve deep into your startup's resources and capabilities, conducting a comprehensive RBV Valuation to ascertain its intrinsic worth, providing a holistic view to investors.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Investor-Ready Reports</p>
                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'> Receive professionally curated reports that articulate your financial projections and intrinsic value in a clear, concise, and compelling manner, tailored for investor presentations.</p>
                        </div>
                    </div>
                </div>



                <div className='flex mt-20 space-x-0 gap-[5%] max-sm:flex-col max-sm:mt-[2rem]'>
                    <div className=''>
                        <p className='text-base text-blue-500 font-medium font-sans max-sm:text-center max-sm:text-2xl'>Service 4</p>
                        <p className='text-4xl font-medium font-sans max-sm:text-xl'>Empower Your Tech Startup</p>
                        {/* <p className='text-4xl font-medium  font-sans max-sm:text-3xl'>Integrated Solutions for Investor Engagement:</p> */}
                        <p className='text-4xl text-blue-500 font-medium font-sans  max-sm:text-base'>Elevate Your Vision with Expert Tech Pro- duction</p>
                        <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-sm'>Your tech product is not just a piece of code; it's the realization of your groundbreaking idea. Whether you're developing a cutting-edge app, or a robust software solution, our technology production outsourcing service ensures that your vision is brought to life with precision and excellence. Embark on a transformative journey with our technology production outsourcing service, designed exclusively for visionary startup founders looking to bring their tech ideas to life. Your startup's success begins with a world-class product, and we're here to make that journey seamless and successful.</p>
                    </div>
                    <img className='w-[500px] max-sm:mt-2.5' src={Growth4} />
                </div>




                <div className=' mt-20 space-x-0 gap-[5%] max-sm:mt-[2rem]'>
                    <p className='text-base text-blue-500 font-medium font-sans  max-sm:text-center'>EXPERT GUIDANCE FOR YOUR SUCCESS</p>
                    <div className='grid gap-10 grid-cols-3 max-sm:grid-cols-1'>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Expert Guidance for Tech Success:</p>
                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Our seasoned team of tech experts is dedicated to providing comprehensive support throughout your product development journey. From concept to deployment, we offer strategic insights and hands-on assistance to ensure that your tech product stands out in the competitive market.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Cutting-edge Tech Design:</p>
                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Our skilled designers go beyond aesthetics to create visually stunning interfaces and user experiences that seamlessly align with your tech product's functionality.
                                We understand the importance of user-centric design in ensuring the success of your technology.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Tailored Tech Consultation:</p>
                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Benefit from personalized consultations with our tech experts who will fine-tune your project, offering insights to enhance its effectiveness. Our team is committed to understanding the intricacies of your technology and providing tailored guidance to ensure its success in the ever-evolving tech landscape.</p>
                        </div>
                    </div>
                </div>






                <div className='flex mt-20 space-x-0 gap-[5%] max-sm:flex-col max-sm:mt-[2rem]'>
                    <div className=''>
                        <p className='text-base text-blue-500 font-medium font-sans max-sm:text-center'>Service 5</p>
                        <p className='text-4xl font-medium  font-sans max-sm:text-3xl'>Dominating the Digital Landscape:</p>
                        {/* <p className='text-4xl font-medium  font-sans max-sm:text-3xl'>Integrated Solutions for Investor Engagement:</p> */}
                        <p className='text-4xl text-blue-500 font-medium font-sans  max-sm:text-2xl'>Ignite Your Brand with Expert Digital Marketing</p>
                        <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-sm'>Your brand is not just a product or service; it's an experience waiting to be discovered. Whether you're navigating the world of social media, search engine optimization, or content marketing, our digital marketing services ensure that your brand's story is told with impact and resonance.
                            Your brand's online presence is the heartbeat of its success in today's digital age. Redefine the way you connect with your audience, making conversation in the language they understand and building a connection and empathy with your audience.</p>

                    </div>
                    <img className='w-[500px] max-sm:mt-2.5' src={Growth4} />
                </div>




                <div className=' mt-20 space-x-0 gap-[5%] max-sm:mt-[2rem]'>
                    <p className='text-base text-blue-500 font-medium font-sans  max-sm:text-center'>EXPERT GUIDANCE FOR YOUR SUCCESS</p>
                    <div className='grid gap-10 grid-cols-3 max-sm:grid-cols-1'>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Expert Guidance for</p>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'> Your Digital Presence:</p>
                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Our team of seasoned digital marketing experts is dedicated to propelling your brand to new heights. From crafting compelling campaigns to optimizing your online presence, we offer strategic insights and hands-on assistance to ensure your brand stands out in the vast digital landscape. </p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Strategic Digital </p>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Storytelling:</p>
                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>In the crowded digital marketplace, telling a compelling story is the key to capturing the hearts of your audience. We specialize in strategic storytelling, helping you articulate the essence of your brand and connect with your target audience in meaningful ways.</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium font-sans max-sm:text-2xl'>Tailored Digital Consultation:</p>

                            <p className='font-sans  text-lg font-normal leading-6 max-sm:text-justify max-sm:text-sm'>Benefit from personalized consultations with our digital marketing experts who will fine-tune your strategy, offering insights to enhance its effectiveness. We strive to understand the nuances of your brand and provide tailored guidance to ensure its success in the dynamic digital landscape.</p>
                        </div>
                    </div>
                </div>





                <div>
                    <div className='flex mt-20 space-x-0 gap-[5%] max-sm:flex-col max-sm:mt-[2rem]'>
                        <div className=''>
                            <p className='text-base text-blue-500 font-medium font-sans max-sm:text-center'>Service 6</p>
                            <p className='text-4xl font-medium  font-sans max-sm:text-3xl'>Integrated Solutions for Investor Engagement:</p>
                            {/* <p className='text-4xl font-medium  font-sans max-sm:text-3xl'>Integrated Solutions for Investor Engagement:</p> */}
                            <p className='text-4xl text-blue-500 font-medium font-sans  max-sm:text-2xl'>Empower Your Start-up’s Success</p>
                            <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-sm'>Welcome to a comprehensive suite of services designed to elevate your start-up’s potential and captivate investors. Our integrated approach combines three powerful tools – Business Canvas Creation, Complete Pitch Deck, and Financial Model & RBV Valuation Report – delivering a holistic solution tailored for your success.</p>
                            <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-sm'>Start your journey with a strategic blueprint with Business Canvas Creation. Define your customer segments, value propositions, revenue streams, and key resources with expert guidance.</p>
                            <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-sm'>Craft a compelling narrative that resonates with investors with Complete Pitch Deck. Engage investors with a visually stunning and strategically crafted pitch deck, showcasing your business vision, market potential, and team expertise.</p>
                            <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-sm'>Numbers speak volumes. Allow us to create a robust Financial Model projecting your startup's financial trajectory and a comprehensive Financial Model & RBV Valuation Report that showcases its intrinsic value beyond traditional metrics. These reports instill confidence in investors by highlighting your start-up’s potential for growth and its unique competitive advantages.</p>

                        </div>
                        <img className='w-[500px] max-sm:mt-2.5' src={Growth4} />
                    </div>
                    <div>
                        <p className='text-base text-blue-500 font-medium font-sans  max-sm:text-center'>EXPERT GUIDANCE FOR YOUR SUCCESS</p>
                        <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-sm'>Our team offers tailored consultations, workshops, and ongoing support throughout your journey. We provide hands-on assistance in creating these vital assets, ensuring they align seamlessly to present a cohesive and compelling story to potential investors.</p>
                        <p className='mt-10 font-sans text-lg font-normal leading-6 max-sm:text-sm'>Our integrated service package unlocks the potential of your business, empowering you to confidently engage with investors and secure the funding your venture deserves.</p>
                    </div>
                </div>








                <div className='mt-10 md:mt-20 space-x-5 md:space-x-10 p-5  bg-cover bg-center md:p-20 md:h-screen' style={{ "backgroundImage": `url(${Growth5})` }}>
                    <div className='bg-white p-4 md:p-10 text-justify'>
                        <p className='text-sm text-blue-500 font-medium font-sans'>AT COCREATE LABS</p>
                        <p className='font-sans'>Start your journey with a strategic blueprint with <b className="md:text-lg">Business Canvas Creation.</b> Define your customer segments, value propositions, revenue streams, and key resources with expert guidance.</p>

                        <p>Craft a compelling narrative that resonates with investors with <b className="md:text-lg">Complete Pitch Deck.</b> Engage investors with a visually stunning and strategically crafted pitch deck, showcasing your business vision, market potential, and team expertise.</p>

                        <p className='font-sans'>Numbers speak volumes. Allow us to create a robust Financial Model projecting your startup's financial trajectory and a comprehensive Financial Model & RBV Valuation Report that showcases its intrinsic value beyond traditional metrics. These reports instill confidence in investors by highlighting your start-up’s potential for growth and its unique competitive advantages.</p>

                        <p className='font-sans'><b>Expert Guidance for Your Success:</b> Our team offers tailored consultations, workshops, and ongoing support throughout your journey. We provide hands-on assistance in creating these vital assets, ensuring they align seamlessly to present a cohesive and compelling story to potential investors.</p>
                        <div className='flex flex-col md:flex-row'>
                            <p className='mb-4 md:mb-0 md:w-[86%] font-sans'>Our integrated service package unlocks the potential of your business, empowering you to confidently engage with investors and secure the funding your venture deserves.</p>
                            <Link to="/eventregistration">   <button className='h-[60px] w-full md:w-[150px] border p-1 rounded-r-full font-bold text-white bg-blue-500 rounded-l-full w-150 border-solid font-sans'>REGISTER TODAY</button></Link>
                        </div>
                    </div>
                </div>

                <Newslatter />
                <Gettingstarted />
            </div>
        </>
    )
}

export default AmbitiousStartups;
