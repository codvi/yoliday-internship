const PortfolioItem = () => {
    return (
      <div className="p-4 border rounded-md flex items-start space-x-4">
        <img src="path-to-image" alt="Project" className="w-20 h-20 object-cover rounded-md" />
        <div>
          <h2 className="font-semibold">Kemampuan Merangkum Tulisan</h2>
          <p className="text-gray-600 text-sm">Lorem Ipsum dolor sit amet...</p>
          <button className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded-md">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default PortfolioItem;
  