import { Sparkles, ArrowRight, LogOut, CircleUser } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate("/login")
  };

  return (
    <nav className="px-6 py-4 md:px-12 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center space-x-2">
            <Sparkles className="text-purple-600" size={28} />
            <span className="text-xl font-bold text-gray-900">
              Influencer-Adda
            </span>
          </div>
        </Link>

        <div className="flex space-x-4">
          {!user ? (
            <Link
              to={"/login"}
              className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center"
            >
              Login <ArrowRight size={16} className="ml-2" />
            </Link>
          ) : (
            <>
              <Link
                to={user.isAdmin ? "/auth/admin" : "/auth/profile"}
                className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center"
              >
                <CircleUser size={16} className="ml-2 mx-2" />
                Welcome {user?.name}
              </Link>
              <button
                className="cursor-pointer bg-red-400 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center"
                onClick={handleLogOut}
              >
                Logout <LogOut size={16} className="ml-2" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
