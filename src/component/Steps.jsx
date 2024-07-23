import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import './steps.css'

import step from "../assets/stepsimg.png"
import GrandConnect1leftimage from '../assets/GrandConnect1leftimage.png'

const Steps = () => {
  return (
    <div className='font-sans'>
      <img src={step} alt="" class="img-fluid grantsImageFirst" className="" />

      <div className='flex w-full bg-white grants_first'>
        <div className='w-[50%] GrandConnect1leftimag'>
          <img src={GrandConnect1leftimage} alt="" />
        </div>
        <div className='w-[50%]   JoinOurCommunity'>
          <div className='mt-[30px] text-3xl text-center text-[#1E0E63] font-bold'>Join Our Community!</div>
          <div className='mt-[30px] text-[#15143966;] text-center'>Get access to like minded people and grow your <br /> social ecosystem in the startup community.</div>
          <div className='mt-[30px] text-center'>
            <button className='mt-6 px-4 py-2 border-[2px] border-[#4A90E2] text-[#4A90E2] rounded-[100px]'>
              <div>
                <p className='text-center'>Join Now</p>
              </div>
            </button>
          </div>
        </div>
      </div>





      <div className='flex gap-8 justify-center p-8 bg-white GrantsConnectcomponents max-sm:p-[1rem]'>
        <div className='text-left m-7 w-[70%] complexblocks max-sm:m-0'>
          <div className='text-[#1E0E62] text-xl m-7 flex gap-6 font-bold '>
            Easy to Use <FaAngleDown />
          </div>
          <div className='text-[#151439] m-7'>
            Grants Connect components and complex blocks from CCL, which can easily be integrated into any design. All of the components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions.
          </div>

          <div className='border-[2px] border-[#808080]'></div>

          <div className='text-[#1E0E62] text-xl m-7 flex gap-6 font-bold '>
            Variety of Designs <FaAngleRight />
          </div>

          <div className='border-[2px] border-[#808080]'></div>

          <div className='text-[#1E0E62] text-xl m-7 flex gap-6 font-bold'>
            Feel our Design <FaAngleRight />
          </div>
        </div>
        <div className='w-[30%] text-left m-7 p-8  haveaQuestion max-sm:m-0'>
          <div className='text-lg text-[#757580] font-bold text-center StartupFramework'>
            HAVE A QUETIONS?
          </div>
          <div className='text-center text-[#1E0E62] mt-7'>
            Startup Framework includes <br /> great form options for your <br /> startup projects.
          </div>
          <div className='text-center m-7'>
            <button className='mt-6 px-4 py-2 bg-[#4A90E2] text-white rounded-[100px] hover:bg-[#007AFF]'>
              <div>
                <p className='text-center'>Get Help</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps;
