
import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

function Sidebar({ isOpen, onClose, handleLinkClick }) {
    return (
        <div className={`fixed  top-0 right-0 w-[50vw] h-full shadow-lg transform transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button
                className="absolute top-4 right-4 p-2 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-200"
                onClick={onClose}
            >
                <IoMdClose />
            </button>

            <nav className="flex flex-col items-center justify-center h-full">
                <ul className="space-y-4">
                    <SidebarLink to="/" onClick={handleLinkClick}>Home</SidebarLink>
                    <SidebarLink to="/about" onClick={handleLinkClick}>About</SidebarLink>
                    <SidebarDropdown title="Offering" onClick={handleLinkClick}>
                        <SidebarLink to="/mentorConnect">Mentor Connect</SidebarLink>
                        <SidebarLink to="/investorconnect">Investor Connect</SidebarLink>
                        <SidebarLink to="/grantsconnect">Grant Connect</SidebarLink>
                    </SidebarDropdown>
                    <SidebarLink to="/growthservice" onClick={handleLinkClick}>Services</SidebarLink>
                    <SidebarLink to="/contact" onClick={handleLinkClick}>Contact</SidebarLink>
                    <li>
                        <Link to="/registration" onClick={handleLinkClick} className="block py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-200">
                            Join Now
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

function SidebarLink({ to, onClick, children }) {
    return (
        <li className="text-lg font-semibold">
            <Link to={to} onClick={onClick} className="hover:text-blue-600 transition duration-200">
                {children}
            </Link>
        </li>
    );
}

function SidebarDropdown({ title, onClick, children }) {
    return (
        <li className="relative group">
            <span className="text-lg font-semibold cursor-pointer">
                {title}
            </span>
            <ul className="absolute hidden bg-white py-2 rounded-md shadow-lg group-hover:block min-w-[200px] left-0 mt-2">
                {React.Children.map(children, child => (
                    React.cloneElement(child, { onClick })
                ))}
            </ul>
        </li>
    );
}

export default Sidebar;
