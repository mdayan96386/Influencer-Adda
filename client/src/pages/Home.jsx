import {Users, DollarSign, TrendingUp,} from "lucide-react";
import HeroSection from "../components/HeroSection";
import SearchSection from "../components/SearchSection";
import FeaturedInfluencer from "../components/FeaturedInfluencer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllInfluencersForAdmin } from "../features/admin/adminSlice";

const Home = () => {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getAllInfluencersForAdmin())
},[])

  return (
    <>
      <HeroSection />
      <SearchSection />
      <FeaturedInfluencer />

      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Your <span className="text-purple-600">Path</span> to Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 p-8 rounded-lg">
              <DollarSign className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Monetize Your Content
              </h3>
              <p className="text-gray-600">
                Transform your passion into profit with our proven strategies
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <Users className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Grow Your Audience
              </h3>
              <p className="text-gray-600">
                Expand your reach and build a loyal following
              </p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <TrendingUp className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Scale Your Impact
              </h3>
              <p className="text-gray-600">
                Take your influence to the next level
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
