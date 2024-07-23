import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { LuPieChart } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import profile from "../../assets/web.png";
import Logo from "../../assets/Logo1.png";

const UserSidebar = () => {
    return (
        <>
            <div className='w-[250px] h-[700px] border-2'>
                <img src={Logo} alt="" />
                <div className='mt-[20px] ml-6 text-[#637381]'>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><IoHomeOutline /></p>
                            <p className='w-[150px] text-sm '>Home</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><MdOutlineDashboard /></p>
                            <p className='w-[150px] text-sm'>Dashboard</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='mt-1'>
                            <div className='flex gap-8'>
                                <p><FiBox /></p>
                                <div className='flex justify-between '>
                                    <p className='w-[150px] text-sm'>Services</p>
                                    <p><IoIosArrowUp /></p>
                                </div>
                            </div>
                            <div className="mt-2 ml-4">
                                {/* Dropdown content goes here */}
                                <p className="py-1 px-2 text-sm cursor-pointer hover:bg-gray-200">
                                    Dropdown One
                                </p>
                                <p className="py-1 px-2 text-sm cursor-pointer hover:bg-gray-200">
                                    Dropdown Two
                                </p>
                                <p className="py-1 px-2 text-sm cursor-pointer hover:bg-gray-200">
                                    Dropdown Three
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><MdOutlineMail /></p>
                            <p className='w-[150px] text-sm'>Messages</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><FiShoppingBag /></p>
                            <p className='w-[150px] text-sm'>Order</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><CiCalendar /></p>
                            <p className='w-[150px] text-sm'>Calendar</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><LuPieChart /></p>
                            <p className='w-[150px] text-sm'>Static</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><IoDocumentTextOutline /></p>
                            <p className='w-[150px] text-sm'>Documents</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-[40px]'>
                            <p><MdOutlineChatBubbleOutline /></p>
                            <p className='w-[150px] text-sm'>Chat</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><CiSettings /></p>
                            <p className='w-[150px] text-sm'>Settings</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='flex gap-8 mt-1'>
                            <p><IoIosLogOut /></p>
                            <p className='w-[150px] text-sm'>Logout</p>
                        </li>
                    </ul>
                    <ul>
                        <li className='mt-[40px]'>
                            <div className='flex gap-4'>
                                <div>
                                    <img className="w-10 h-10 rounded-full bg-blue-500" src={profile} alt="" />
                                </div>
                                <div>
                                    <div>
                                        <p>George Wilson</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <p className='text-[#637381] text-xs'>george.w85@gmail.com</p>
                                    </div>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserSidebar;
