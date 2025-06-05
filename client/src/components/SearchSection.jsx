import { Users, MapPin, Filter } from "lucide-react";

const SearchSection = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Find Your Perfect{" "}
          <span className="text-purple-600">Influencer Match</span>
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="relative">
              <input placeholder="Search By Name Or Niche" type="text" className="w-full p-2 border border-gray-500 rounded-md" />
            </div>
          
          </div>
          <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold">
            Search Influencers
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
