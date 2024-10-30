import { FaTachometerAlt, FaFolder, FaFileAlt, FaUser } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIconClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="md:bg-[#e05434] bg-white text-white p-1 justify-between fixed bottom-0 left-0 right-0 flex md:static md:w-64 md:h-screen md:flex- md:p-4 z-40">
          {" "}
      <div className="hidden md:block mb-20 text-lg font-semibold">Logo</div>
       {" "}
      <nav className="flex  md:block mt-5 w-full">
        <ul className="flex justify-between  w-full md:flex-col md:justify-start mt-36">
          {[
            { icon: <FaTachometerAlt size={24} />, label: "Dashboard" },
            { icon: <FaFolder size={24} />, label: "Portfolio" },
            { icon: <FaFileAlt size={24} />, label: "Inputs" },
            { icon: <FaUser size={24} />, label: "Profile" },
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => handleIconClick(index)}
              className={`flex-col md:flex md:flex-row items-center p-2 rounded-md transition-all duration-300 
        ${activeIndex === index ? "text-red-500" : "text-gray-300"} 
        md:hover:bg-gradient-to-l md:hover:from-[#e05434] md:hover:to-[#ffffffb3] md:hover:font-bold`}
            >
              <span className="md:mr-2">{item.icon}</span>
              <span className="text-lg md:block">{item.label}</span>
            </li>
          ))}
        </ul>
             {" "}
      </nav>
         {" "}
    </div>
  );
};

export default Sidebar;
