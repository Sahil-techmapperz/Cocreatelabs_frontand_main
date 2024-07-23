import React from 'react'
import SideBar from './UserSidebar';
import { CiSearch } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import User from "../../assets/user.png";
import Email_logo from "../../assets/Email_logo.png";
import profile from "../../assets/web.png";

const UserDashboard = () => {
  return (
    <>
      <div className='flex'>
        <div><SideBar /></div>
        <div className='w-[100%] bg-white '>
          <div className='flex justify-between h-[30px]'>
            <div className='flex gap-[20px]'>
              <span className='text-[#637381] text-[25px] ml-5'>< CiSearch /></span>
              <input type="text" className='border rounded-md border-gray-300 focus:outline-none focus:border-blue-500' />
            </div>
            <div className='flex gap-4'>
              <div className='flex gap-[20px]'>
                <span className='text-[#637381] text-[25px]'>< CiCalendar /></span>
                <span className='text-[#637381] text-[25px]'>< IoIosNotificationsOutline /></span>
                <span className='text-[#637381] text-[25px]'>< MdOutlineMail /></span>
              </div>
              <div className='flex gap-3'>
                <div>
                  <div>
                    <p>George Wilson</p>
                  </div>
                  <div className='flex gap-1'>
                    <p className='text-[#637381] text-xs'>Ux Designer</p>
                  </div>
                </div>
                <div>
                  <img className="w-10 h-10 rounded-full bg-blue-500" src={profile} alt="" />
                </div>
              </div>
              <div >
                <span className='text-[#637381] text-[20px]'>< FaAngleDown /></span>
              </div>
            </div>
          </div>
          <div className='ml-[50px] mt-[10px] flex justify-between'>
            <div>
              <p className='font-bold text-xl'>Settings Page</p>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices lectus sem.</p>
            </div>
            <div className='flex gap-[30px]'>
              <button className='mt-6 px-4 py-2 bg-white-600 rounded-md text-black border-gray-500 '>Cancel</button>
              <button className='mt-6 px-4 py-2 bg-[#007AFF] text-white rounded-md hover:bg-[#007AFF]'>Save</button>
            </div>
          </div>
          <div className='ml-[50px] mt-[10px] flex justify-between'>
            <div className='bg-white shadow-md p-4'>
              <p>Personal Information</p>
              <div className='flex gap-5'>
                <div className='relative'>
                  <label className='text-[#212B36]' htmlFor="">Full Name</label><br />
                  <div className="relative m-4">
                    <img src={User} alt="User Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      className="pl-10 w-full h-10 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 shadow-md"
                      placeholder="george.w85@gmail.com"
                    />
                  </div>
                </div>
                <div className='relative'>
                  <label className='text-[#212B36]' htmlFor="">Phone Number</label><br />
                  <div className="relative m-4">
                    <input
                      type="text"
                      className="pl-10 w-full h-10 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 shadow-md"
                      placeholder="george.w85@gmail.com"
                    />
                  </div>
                </div>
              </div>
              <div className='relative'>
                <label htmlFor="">Email Address</label><br />
                <div className="relative m-4">
                  <img src={Email_logo} alt="User Icon" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    className="pl-10 w-full h-10 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 shadow-md"
                    placeholder="george.w85@gmail.com"
                  />
                </div>
              </div>
              <div className='relative'>
                <label htmlFor="">Username</label><br />
                <input type="text" className="pl-10 w-full h-10 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500" placeholder="georgewilson85" />
              </div>
              <div className='relative'>
                <label htmlFor="">BIO</label><br />
                <div className='flex'>
                  <span className='text-[#79808F] text-[30px]'><HiOutlinePencilAlt /></span>
                  <textarea type="text" className="pl-10 h-20 w-full border rounded-md border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia turpis tortor, consequat efficitur mi congue a. Curabitur cursus, ipsum ut lobortis sodales, enim arcu pellentesque lectus ac suscipit diam sem a felis. Cras sapien ex, blandit eu dui et suscipit gravida nunc. Sed sed est quis dui." />
                </div>
              </div>
            </div>
            <div className=' bg-white shadow-md '>
              <div className='border-b-2 border-solid border-gray'>
                <p className='text-black'>Your Photo</p>
              </div>
              <div className='flex gap-3 mt-5'>
                <div>
                  <img className="w-10 h-10 rounded-full bg-blue-500" src={profile} alt="" />
                </div>
                <div>
                  <div>
                    <p>Edit your photo</p>
                  </div>
                  <div className='flex gap-1'>
                    <p>Delete</p>
                    <p className='text-[#0093F6]'>Update</p>
                  </div>
                </div>
              </div>
              <div className="border-dotted border-2 border-blue-500 p-4 rounded-lg w-[100] mt-5 ">
                <div className='p-6 '>
                  <div className="flex items-center justify-center">
                    <span className="text-[#0093F6] text-2xl">
                      <FiUpload />
                    </span>
                  </div>
                  <div className="text-center mt-2">
                    <p><span className='text-[#0093F6]'>Click to upload </span>
                      or drag and drop
                      <br />
                      SVG, PNG, JPG, or GIF
                      <br />
                      max, 800 X 800px
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboard;
