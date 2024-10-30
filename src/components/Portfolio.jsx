import { FaBars, FaSearch, FaBell, FaShoppingCart, FaFilter } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Maleuada Ac Turpis Tempus lore ipsum",
      language: "BAHASA SUNDA",
      author: "Al-Baiji Samaan",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Maleuada Ac Turpis Tempus...",
      language: "BAHASA SUNDA",
      author: "Al-Baiji Samaan",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Maleuada Ac Turpis Tempus...",
      language: "BAHASA SUNDA",
      author: "Al-Baiji Samaan",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Maleuada Ac Turpis Tempus...",
      language: "BAHASA SUNDA",
      author: "Al-Baiji Samaan",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681487178876-a1156952ec60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-white md:m-8 rounded-lg max-w-full mx-auto ">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-xl md:text-2xl">Portfolio</h1>
        <div className="flex md:hidden space-x-4">
          <FaBell className="text-red-500" size={20} />
          <FaShoppingCart className="text-red-500" size={20} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex space-x-4 border-b border-gray-300 mb-4 md:mb-0">
          {["Project", "Saved", "Shared", "Achievement"].map((tab) => (
            <button
              key={tab}
              className="pb-2 px-4 border-b-2 border-transparent hover:border-orange-500"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex md:flex-row items-center space-x-4 relative w-full md:w-auto">
          <button className="md:hidden bg-red-500 w-30 text-white p-4 rounded-full fixed bottom-28 left-1/2 transform -translate-x-1/2 z-20 shadow-lg flex items-center space-x-2">
            <FaBars size={16} />
            <span>Filter</span>
          </button>
          <div className="relative flex items-center">
            <button className="text-black hidden md:flex items-center p-2 rounded-full space-x-1">
  <FaFilter size={16} />
  <span>Filter</span>
</button>

          </div>
          <input
            type="text"
            placeholder="Search a project"
            className="border p-2 rounded-md text-gray-700 focus:outline-none w-full md:w-[400px] pr-10"
          />
          <button className="text-white bg-red-500 p-1.5 rounded-lg hover:text-orange-500 absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-1 md:flex-col">
        <div className="h-[80vh] md:h-[68vh] overflow-y-auto border border-gray-300 rounded-md">
          {projects.map((project, index) => (
            <div key={index} className="m-4 shadow-lg rounded-lg overflow-hidden flex relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="md:h-60 md:w-60 object-cover w-36 h-50"
              />
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-500 mb-2 hidden md:block">{project.description}</p>
                  <div className="text-xs mt-28">
                    <div>{project.language}</div>
                    <div className="text-gray-400">Oleh {project.author}</div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-4 flex space-x-2">
                  <button className="bg-[#fcac34] text-white py-3 px-5 rounded-md md:hidden">
                    A
                  </button>
                  <button className="bg-[#fcac34] text-white py-2 px-4 rounded-md hidden md:block">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
