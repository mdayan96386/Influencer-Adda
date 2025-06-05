import { Users, MessageSquare, Calendar, LayoutDashboard, Instagram } from "lucide-react";
const SidebarAdmin = ({ handleTabChange, activeTab }) => {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <nav className="mt-8">
        <button
          onClick={() => handleTabChange("dashboard")}
          className={`w-full flex items-center px-4 py-3 ${
            activeTab === "dashboard"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-600"
          }`}
        >
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Dashboard
        </button>
        <button
          onClick={() => handleTabChange("influencers")}
          className={`w-full flex items-center px-4 py-3 ${
            activeTab === "influencers"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-600"
          }`}
        >
          <Instagram className="w-5 h-5 mr-3" />
          Influencers
        </button>
        <button
          onClick={() => handleTabChange("bookings")}
          className={`w-full flex items-center px-4 py-3 ${
            activeTab === "bookings"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-600"
          }`}
        >
          <Calendar className="w-5 h-5 mr-3" />
          Bookings
        </button>
        <button
          onClick={() => handleTabChange("users")}
          className={`w-full flex items-center px-4 py-3 ${
            activeTab === "users"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-600"
          }`}
        >
          <Users className="w-5 h-5 mr-3" />
          Users
        </button>
        <button
          onClick={() => handleTabChange("comments")}
          className={`w-full flex items-center px-4 py-3 ${
            activeTab === "comments"
              ? "bg-purple-50 text-purple-600"
              : "text-gray-600"
          }`}
        >
          <MessageSquare className="w-5 h-5 mr-3" />
          Comments
        </button>
        
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
