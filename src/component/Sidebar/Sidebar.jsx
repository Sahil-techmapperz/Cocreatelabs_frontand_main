import React from 'react';

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-gray-100 shadow-lg transform ease-in-out transition-all duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        className="p-2 m-4 bg-red-500 text-white rounded"
        onClick={onClose}
      >
        Close Sidebar
      </button>

      {/* Sidebar Content */}
      <ul className="list-none p-4">
        <li className="mb-2 p-2 bg-blue-200 rounded hover:bg-blue-300">
          Item 1
        </li>
        <li className="mb-2 p-2 bg-blue-200 rounded hover:bg-blue-300">
          Item 2
        </li>
        <li className="mb-2 p-2 bg-blue-200 rounded hover:bg-blue-300">
          Item 3
        </li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
