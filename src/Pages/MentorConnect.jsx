import React, { useEffect } from 'react'
import maninblue from "../assets/man-in-blue.png";
import globalpresence from "../assets/Global Presence.png";
import "../CSS/mentor.css";
import howitworks from "../assets/howitworks.png";
import { FaArrowRight } from "react-icons/fa6";
import BookSession from '../assets/Book_Sessions.png'


import profile from '../assets/profile.png';
import profile2 from '../assets/serious-man-3760373.png';
import profile3 from '../assets/man-in-white-shirt-wearing-blue-bucket-hat-6626874.png';
import profile4 from '../assets/projectmanager.png';



const MentorConnect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div class="font-sans w-full pt-[80px]">
        <section>

          <div className="mentor-parent-container max-sm:p-4 max-sm:mt-0 font-sans">
            <div className="mentor-content max-sm:p-4 max-sm:mt-[100px] max-sm:ml-3 max-sm:w-[80%]">
              <h1>
                Find mentors as invested in you, as you are in your business
              </h1>
              <p>Connect on your own schedule, from anywhere in the world.</p>
            </div>
          </div>

        </section>

        <section className=" mentor-welcome max-sm:p-8 font-sans">

          <div className="welcome-content max-sm:p-2 max-sm:text-base">
            <p className="welcome-msg">WELCOME TO MENTOR CONNECT</p>
            <h1>The Go-To platform for Ambitious Startups</h1>
            <p className="welcome-msg1">
              Looking to find and connect with experienced mentors who can help
              take their business to the next level?
            </p>

            <p className="welcome-msg1">
              Building a successful business is no easy feat. You face countless
              challenges, from developing a winning product to attracting and
              retaining customers, to managing cash flow and scaling your
              operations.{" "}
            </p>

            <p className="welcome-msg1">
              Our platform connects startups with vetted and experienced mentors
              who have a proven track record of success in a range of industries
              and functions.
            </p>
            <div className="welcome-btn-container">
              <button className="welcome-apply">Apply Now</button>
              <a href="">Explore Mentors</a>
            </div>
          </div>

        </section>


        <section className="go-to font-sans">
          <img src={howitworks} className="" />
        </section>

        <section className="go-to flex font-sans">
          <img
            src={maninblue}
            className=""
            alt="imgw"
          />
        </section>


        <section className='font-sans'>
          <div className=' pl-[5rem] pr-[5rem]  max-sm:pl-[2rem] max-sm:pr-[2rem]'>
            <div>
              <div className='w-[10px] h-[170px] p-[5%] top-0 z-10 relative rounded-sm border-solid bg-[#4A90E2] max-sm:hidden'>
              </div>
              <div className='flex gap-[10%] mt-[-7%] justify-center w-[100%]  max-sm:mt-5  max-sm:gap-0 max-sm:text-center  '>
                <div className=''>
                  <img className='w-[750px] h-96  max-sm:hidden ' src={BookSession} alt="" />
                </div>
                <div className='w-50%'>
                  <div className='text-5xl text-[#222527] font-bold font-dm-sans'>Book 1:1 Sessions</div>
                  <div className='text-2xl text-[#222527] font-dm-sans'>Game Changing Mentor</div>
                  <div>
                    <img className='w-[750px] h-96 hidden max-sm:h-[250px]' src={profile} alt="" />

                  </div>

                  <div className='mt-[2%] text-[#8A919C] font-dm-sans'>
                    <p className='mt-[2%] font-dm-sans text-gray-600 text-base font-normal leading-6'>Our matching algorithm takes the guesswork out of finding the right mentor for your needs. Simply tell us about your business and what you're looking to achieve, and we'll connect you with mentors who have the skills and experience to help you get there.</p>
                    <p className='mt-[2%] font-dm-sans text-gray-600 text-base font-normal leading-6'>But we don't stop there.</p>
                    <p className='mt-[2%] font-dm-sans text-gray-600 text-base font-normal leading-6'>Building a strong mentor-mentee relationship is key to success. Mentor Connect offers a range of tools and resources to help facilitate meaningful connections. </p>
                    <p className='mt-[2%] font-dm-sans text-gray-600 text-base font-normal leading-6'>Personalized calls, progress tracking chats to regular check-ins and feedback sessions, our platform is designed to ensure that you and your mentor are in this growth journey together.</p>
                    <p className='mt-[2%] font-dm-sans text-gray-600 text-base font-normal leading-6'>Sign up for Mentors Connect today and get ready to take your startup to the next level.</p>
                  </div>
                  <div className='flex'>
                    <div>
                      <button className='mt-6 px-4 py-2 bg-[#4A90E2] text-white rounded-[100px] hover:bg-[#007AFF]'>
                        <div className='gap-5'>
                          <p className=' gap-3 text-center font-dm-sans text-base font-normal leading-6'>Apply Toady</p>
                        </div>
                      </button>
                    </div>
                    <div>
                      <button className='mt-6 px-4 py-2 bg-white text-[#007AFF] rounded-[100px]'>
                        <div className='flex gap-5'>
                          <p className='flex gap-3 text-center font-dm-sans text-base font-normal leading-6'>See More</p>
                          <p className='align-center'><FaArrowRight /></p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>






        {/* <section className='mt-8'>
        <div className='text-center'>
          <div className=' text-5xl font-bold'>
            Meet Your Mentors
          </div>

          <div className='mt-[30px] bg-white flex justify-center items-center gap-[20px] '>
            <div className='w-[300px] p-2 border-2 flex-col justify-center items-center'>
              <div className='items-center flex justify-center'>
                <img className='w-[100px] h-[100px] rounded-full bg-blue-500' src={profile} alt="" />
              </div>
              <div className='mt-[20px] text-center'>
                <p className='font-bold text-2xl '>John Smith</p>
                <p>CEO</p>
                <p className='italic'>8+ Years of Experience</p>
              </div>

            </div>
            <div className='w-[300px] p-2 border-2 '>
              <div className=' items-center flex justify-center'>
                <img className='w-[100px] h-[100px] rounded-full bg-blue-500' src={profile2} alt="" />
              </div>
              <div className='mt-[20px] text-center'>
                <p className='font-bold text-2xl '>Simon Adams</p>
                <p>CTO</p>
                <p className='italic'>8+ Years of Experience</p>
              </div>
            </div>
            <div className='w-[300px] p-2 border-2 '>
              <div className=' items-center flex justify-center'>
                <img className='w-[100px] h-[100px] rounded-full bg-blue-500' src={profile3} alt="" />
              </div>
              <div className='mt-[20px] text-center'>
                <p className='font-bold text-2xl '>Paul Jones</p>
                <p>Design Lead</p>
                <p className='italic'>8+ Years of Experience</p>
              </div>
            </div>
            <div className='w-[300px] p-2 border-2 '>
              <div className='items-center flex justify-center'>
                <img className='w-[100px] h-[100px] rounded-full bg-blue-500' src={profile4} alt="" />
              </div>
              <div className='mt-[20px] text-center'>
                <p className='font-bold text-2xl '>Sara Hardin</p>
                <p>Project Manager</p>
                <p className='italic'>8+ Years of Experience</p>
              </div>
            </div>

          </div>
          <div className='mt-[40px]'>
            <button className='mt-6 px-4 py-2 bg-[#4A90E2] text-white rounded-[100px] hover:bg-[#007AFF]'>
              <div className='flex gap-5'>
                <p className='flex gap-3 text-center'>See More</p>
                <p className='align-center'><FaArrowRight /></p>
              </div>
            </button>
          </div>
        </div>
      </section> */}

        <section className="go-to-presence flex p-40 mx-auto max-sm:p-[2rem]">
          <img
            src={globalpresence}
            className="w-full h-full responsive_img"
            alt="imgw"
          />
        </section>


        {/* <section >
        <div className='text-center'>
          <div>
            <p className='text-[#C0C0C9]'>Our testimonials</p>
            <div className='mt-2 text-5xl font-medium'>
              Wins from all around <br /> the globe
            </div>
          </div>
          <div className='mt-[30px] bg-white flex justify-center items-center gap-[20px] '>
            <div className='w-[300px] p-7 border-2 text-left bg-[#4A90E2] text '>
              <div className='text-white'>
                <div>Filip Dassaley.</div>
                <p>23 Aug 2022</p>

                <div className='mt-4'>
                  Araa and I talked about career field decisions and my portfolio. I really appreciated his feedback and advice.
                </div>
                <div className='mt-9 text-lg'><FaArrowRight /></div>
              </div>
            </div>
            <div className='w-[300px] p-7 border-2 text-left'>
              <div >
                <div className='flex gap-3'>
                  <div>
                    <img className='w-[50px] h-[50px] rounded-full bg-blue-500' src={profile} alt="" />
                  </div>
                  <div>
                    <p>James Danial.</p>
                    <p>15 March 2022</p>
                  </div>
                </div>
                <div className='mt-9'>
                  Araa and I talked about career field decisions and my portfolio. I really appreciated his feedback and advice. </div>
              </div>
            </div>
            <div className='w-[300px] p-7 border-2 text-left'>
              <div >
                <div className='flex gap-3'>
                  <div>
                    <img className='w-[50px] h-[50px] rounded-full bg-blue-500' src={profile} alt="" />
                  </div>
                  <div>
                    <p>James Danial.</p>
                    <p>15 March 2022</p>
                  </div>
                </div>
                <div className='mt-9'>
                  Araa and I talked about career field decisions and my portfolio. I really appreciated his feedback and advice.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section> */}



        <div className='border-2 mt-[50px] text-center  font-sans'>
          <div className='text-3xl font-bold max-sm:w-[320px] '>
            Your next chapter, made possible with mentorship.
          </div>
          <div className=' mt-5 font-dm-sans text-gray-600 text-base font-normal leading-6'>
            Explore 4000+ mentors from 60+ countries, to help you achieve <br />
            and overcome any challenges you face.
          </div>
          <div className='text-base mt-8 font-dm-sans text-gray-600  font-normal leading-6'>
            Connect with mentors on your own schedule, from anywhere in the world.
          </div>
          <div className='mt-[40px] mb-10'>
            <button className='mt-6 px-4 py-2 bg-[#4A90E2] text-white rounded-[100px] hover:bg-[#007AFF]'>
              <div className='flex gap-5'>
                <p className='flex gap-3 text-center'>START TODAY</p>
              </div>
            </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default MentorConnect;
