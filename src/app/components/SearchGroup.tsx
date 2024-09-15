import { SearchOutlined } from "@ant-design/icons";

const SearchGroup: React.FC = () => {
  return (
    <div className="flex flex-col p-4 mt-4 bg-teal-800 md:flex-row items-center justify-between shadow-lg rounded-lg max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="flex items-center bg-white rounded-full overflow-hidden w-full md:w-2/3 shadow-md">
        <input
          type="text"
          placeholder="Search for destinations, hotels, etc..."
          className="flex-grow px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-full"
        />
        <button className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white transition-colors rounded-full flex items-center">
          <SearchOutlined />
        </button>
      </div>

      {/* Dropdowns */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        <select className="w-full md:w-auto px-4 py-2 text-sm bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md">
          <option>Hotels</option>
          {/* Add more options here */}
        </select>
        <select className="w-full md:w-auto px-4 py-2 text-sm bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-md">
          <option>Restaurants</option>
          {/* Add more options here */}
        </select>
      </div>
    </div>
  );
};

export default SearchGroup;
