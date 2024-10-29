import { FaTachometerAlt, FaFolder, FaFileAlt, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#e05434] text-white p-4">
      <div className="mb-20 text-lg font-semibold">Logo</div>
      <nav className="mt-5">
        <ul>
          <li className="mb-4 flex items-center space-x-2 p-2 rounded-md hover:bg-gradient-to-l from-[#e05434] to-[#ffffffb3] hover:font-bold transition-all duration-300">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </li>
          <li className="mb-4 flex items-center space-x-2 p-2 rounded-md hover:bg-gradient-to-l from-[#e05434] to-[#ffffffb3] hover:font-bold transition-all duration-300">
            <FaFolder />
            <span>Portfolio</span>
          </li>
          <li className="mb-4 flex items-center space-x-2 p-2 rounded-md hover:bg-gradient-to-l from-[#e05434] to-[#ffffffb3] hover:font-bold transition-all duration-300">
            <FaFileAlt />
            <span>Inputs</span>
          </li>
          <li className="flex items-center space-x-2 p-2 rounded-md hover:bg-gradient-to-l from-[#e05434] to-[#ffffffb3] hover:font-bold transition-all duration-300">
            <FaUser />
            <span>Profile</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
