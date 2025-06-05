import React, { useEffect, useState } from "react";
import DashboardAdmin from "../components/admin/DashboardAdmin";
import InfluencersListAdmin from "../components/admin/InfluencersListAdmin";
import BookingListAdmin from "../components/admin/BookingListAdmin";
import CommentsListAdmin from "../components/admin/CommentsListAdmin";
import SidebarAdmin from "../components/admin/SidebarAdmin";
import UsersListAdmin from "../components/admin/UsersListAdmin";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [activeTab, setActiveTab] = useState("dashboard");

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if(user) {
      if(user.isAdmin == false){
        navigate("/login")
      }
    }

    if (isError && message) {
      toast.error(message, { position: "top-center" });
    }
  }, [user, isError, message]);

  if(isLoading){
    return <Loader/>
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <SidebarAdmin activeTab={activeTab} handleTabChange={handleTabChange} />
      <main className="flex-1">
        <div className="p-8">
          {activeTab === "dashboard" && <DashboardAdmin />}
          {activeTab === "influencers" && <InfluencersListAdmin />}
          {activeTab === "bookings" && <BookingListAdmin />}
          {activeTab === "comments" && <CommentsListAdmin />}
          {activeTab === "users" && <UsersListAdmin />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
