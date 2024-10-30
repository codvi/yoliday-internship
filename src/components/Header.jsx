import { FaBell, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="md:flex items-center justify-end p-4 bg-white hidden">
      <FaBell className="text-gray-600 cursor-pointer m-6" />

      <div className="flex items-center cursor-pointer mr-6" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <img
          src="path-to-profile-image"
          alt="Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <h1 className="text-xl font-semibold">John Doe</h1>
          <span className="text-sm text-gray-500">Manager</span>
        </div>
        {isDropdownOpen ? (
          <FaChevronUp className="text-gray-500 ml-2" />
        ) : (
          <FaChevronDown className="text-gray-500 ml-2" />
        )}
      </div>

      {isDropdownOpen && (
        <div className="absolute top-12 right-4 bg-white border border-gray-300 rounded-md shadow-lg py-2 w-32">
          <ul className="text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
