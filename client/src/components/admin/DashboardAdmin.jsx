import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../Loader";
import {
  getAllCommentsForAdmin,
  getAllInfluencersForAdmin,
  getAllUsersBookingsForAdmin,
  getAllUsersForAdmin,
} from "../../features/admin/adminSlice";

const DashboardAdmin = () => {
  const {
    influencers,
    bookings,
    users,
    comments,
    isLoading,
    isError,
    isSuccess,
    message,
  } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInfluencersForAdmin());
    dispatch(getAllUsersBookingsForAdmin());
    dispatch(getAllUsersForAdmin());
    dispatch(getAllCommentsForAdmin());

    if (isError && message) {
      toast.error(message, { position: "top-center" });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">
          Total Influencers
        </h3>
        <p className="text-3xl font-bold text-purple-600 mt-2">
          {influencers.length}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">Active Bookings</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">
          {bookings.length}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">
          {users.length - 1}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-700">New Comments</h3>
        <p className="text-3xl font-bold text-orange-600 mt-2">
          {comments.length}
        </p>
      </div>
    </div>
  );
};

export default DashboardAdmin;
