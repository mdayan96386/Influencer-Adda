import { MapPin, Users, Instagram } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { getInfluencer } from "../features/influencers/influencerSlice";
import CommentSection from "../components/CommentSection";
import { addBooking, getUsersBooking } from "../features/bookings/bookingSlice";

const Influencer = () => {
  const { influencer, influencers, isLoading, isSuccess, isError, message } =
    useSelector((state) => state.influencer);
  const {
    booking,
    bookings,
    bookingLoading,
    bookingSuccess,
    bookingError,
    bookingMessage,
  } = useSelector((state) => state.booking);

  const dispatch = useDispatch();
  const { id } = useParams();

  const bookingDetail = bookings.filter(
    (booking) => booking.influencer._id === id
  );

  const handleBooking = (id) => {
    dispatch(addBooking(id));
  };

  useEffect(() => {
    dispatch(getInfluencer(id));

    if (bookingDetail.length > 0) {
      dispatch(getUsersBooking(bookingDetail[0]._id));
    }

    if ((isError && message) || (bookingError && bookingMessage)) {
      toast.error(message);
    }
  }, [isError, message, bookingError, bookingMessage]);

  if (isLoading || bookingLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Profile Image */}
            <div className="lg:w-1/3">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                <img
                  src={influencer.profilePic}
                  alt={influencer.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:w-2/3 space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900">
                  {influencer.name}
                </h1>
                <p className="text-xl text-purple-600 mt-2">
                  {influencer.type}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{influencer.followers}</span>
                  <span className="ml-1">followers</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Instagram className="h-5 w-5 mr-2" />
                  <span className="capitalize">
                    {influencer.instagram_handle}
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="capitalize">{influencer.location}</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg">
                Booking Amount : INR {influencer.rate}/event
              </p>
              <p className="text-gray-600 text-lg">
                Bio : Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat dicta ab, illo praesentium in quam nulla aliquid esse
                voluptatibus ullam magni eveniet impedit dolore quas?
                Praesentium dicta obcaecati amet voluptatibus!
              </p>
              <p className="text-gray-600 text-xl">
                Booking Id : {!booking ? "" : booking?._id}
              </p>

              <button
                disabled={!influencer.isActive}
                onClick={() => handleBooking(influencer._id)}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-lg disabled:bg-gray-400"
              >
                {influencer.isActive ? "Request Booking" : "Already Booked"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {booking ? (
        <CommentSection />
      ) : (
        <>
          <h1 className="text-center my-8 text-2xl">
            Comments Only Available For Booked Influencers
          </h1>
        </>
      )}
    </div>
  );
};

export default Influencer;
