import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Influencer from "./pages/influencer";
import PrivateComponent from "./components/PrivateComponent";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<PrivateComponent />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="influencer/:id" element={<Influencer />} />
          </Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
