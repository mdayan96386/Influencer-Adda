import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfluencers } from "../features/influencers/influencerSlice";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const FeaturedInfluencer = () => {
  const { influencers, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfluencers());

    if ((isError, message)) {
      toast.error(message, { position: "top-center" });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          All <span className="text-purple-600">Influencers</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {influencers.map((influencer) => (
            <div
              key={influencer._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={influencer.profilePic}
                    alt={influencer.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {influencer.name}
                    </h3>
                    <p className="text-purple-600">{influencer.niche}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-sm text-gray-600">Followers</p>
                    <p className="text-lg font-semibold text-purple-600">
                      {influencer.followers}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-lg font-semibold text-green-500">
                      {influencer.location}
                    </p>
                  </div>
                </div>
                <Link to={`auth/influencer/${influencer._id}`}>
                  <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInfluencer;
