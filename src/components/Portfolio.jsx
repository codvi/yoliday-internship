import { FaFilter, FaSearch } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "Kemampuan Merangkum Tulisan",
      description: "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Maleuada Ac Turpis Tempus...",
      language: "BAHASA SUNDA",
      author: "Al-Baiji Samaan",
      imageUrl: "path-to-image-1",
    },
    {
      title: "Kemampuan Merangkum Tulisan",
      description: "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Maleuada Ac Turpis Tempus...",
      language: "BAHASA SUNDA",
      author: "Al-Baiji Samaan",
      imageUrl: "path-to-image-2",
    },
  ];

  return (
    <div className="p-6 bg-white min-h-screen m-8 rounded-lg">
        <h1 className="font-bold text-2xl m-2 mb-2">Portfolio</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4 border-b border-gray-300">
          {["Project", "Saved", "Shared", "Achievement"].map((tab) => (
            <button key={tab} className="pb-2 px-4 border-b-2 border-transparent hover:border-orange-500">
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <button className="text-gray-500 flex items-center text-lg space-x-2 p-2 hover:text-orange-500">
            <FaFilter /> <span>Filter</span>
          </button>
          <input
            type="text"
            placeholder="Search a project"
            className="border p-2 rounded-md text-gray-700 focus:outline-none"
          />
          <button className="text-white bg-red-500 p-1.5 rounded-lg hover:text-orange-500">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="mt-4 shadow-lg">
        {projects.map((project, index) => (
          <div key={index} className="flex p-4 mb-4 bg-white rounded-lg shadow-md">
            <img src={project.imageUrl} alt={project.title} className="w-24 h-24 object-cover rounded-md" />
            <div className="ml-4 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-xs text-gray-400">
                  <div>{project.language}</div>
                  <div>Oleh {project.author}</div>
                </div>
                <button className="bg-[#fcac34] text-white py-2 px-4 rounded-md">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
