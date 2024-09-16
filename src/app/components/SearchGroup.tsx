import { SearchOutlined } from "@ant-design/icons";


const SearchGroup: React.FC = () => {
  return (
    <div className="flex flex-col p-4 bg-teal-700  md:flex-row items-center justify-center  shadow-lg md:space-y-0 md:space-x-6 max-w-6xl mx-auto rounded-lg">
      {/* Search Input */}
      <div className="flex items-center bg-teal-700 rounded-full overflow-hidden  max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
        />
        <button className="px-6 py-3 bg-teal-700 hover:bg-gray-300 focus:bg-gray-400 transition-colors rounded-full">
        <SearchOutlined /> 
        </button>
      </div>
      {/* Dropdowns */}
      <div className="flex items-center space-x-4 w-full md:w-auto justify-between">
        <select className="w-full md:w-auto px-20 py-3 text-lg bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Hotels</option>
        </select>
        <select className="w-full md:w-auto px-20 py-3 text-lg bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option>Restaurant</option>
        </select>
      </div>
    </div>
  );
};

export default SearchGroup;
