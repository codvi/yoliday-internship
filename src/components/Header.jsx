import { FaBell } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-end p-4 bg-white">
           {" "}
              <FaBell className="text-gray-600 cursor-pointer m-6" />{" "}
      <img
          src="path-to-profile-image"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer mr-6"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />

      <div className="mr-6">
                <h1 className="text-xl font-semibold">John Doe</h1>{" "}
        <span className="text-sm text-gray-500">Manager</span>{" "}
      </div>
           {" "}
      <div className="flex items-center space-x-4">
        
        {isDropdownOpen && (
          <div className="absolute top-12 right-4 bg-white border border-gray-300 rounded-md shadow-lg py-2 w-32">
                       {" "}
            <ul className="text-gray-700">
                           {" "}
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
                           {" "}
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
                           {" "}
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
                         {" "}
            </ul>
                     {" "}
          </div>
        )}
             {" "}
      </div>
         {" "}
    </header>
  );
};

export default Header;
