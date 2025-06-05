import React, { use, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  createInfluencer,
  resetEdit,
  updateTheInfluencer,
} from "../../features/admin/adminSlice";

const InfluencerModal = ({ handleCloseModal }) => {
  const { edit } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  const [selectedInfluencer, setSelectedInfluencer] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    niche: "",
    instagram_handle: "",
    followers: "",
    location: "",
    rate: "",
    profilePic: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    !edit.isEdit
      ? dispatch(createInfluencer(formData))
      : dispatch(updateTheInfluencer(formData));

    setFormData({
      name: "",
      niche: "",
      instagram_handle: "",
      followers: "",
      location: "",
      rate: "",
      profilePic: "",
      gender: "",
    });
    handleCloseModal();
  };

  const closeModal = () => {

    dispatch(resetEdit())

    handleCloseModal()
  }

  useEffect(() => {
    setFormData(edit.influencer);
  }, [edit]);

  return (
    <div className="fixed inset-0 bg-sky-50/50 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-1g w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            {selectedInfluencer ? "Edit Influencer" : "Add New Influencer"}
          </h2>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Niche
              </label>
              <input
                type="text"
                id="niche"
                name="niche"
                value={formData.niche}
                onChange={handleInputChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="instagram_handle"
                className="block text-sm font-medium text-gray-700"
              >
                Instagram Handle
              </label>
              <input
                type="text"
                id="instagram_handle"
                name="instagram_handle"
                value={formData.instagram_handle}
                onChange={handleInputChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="followers"
                className="block text-sm font-medium text-gray-700"
              >
                Followers
              </label>
              <input
                type="text"
                id="followers"
                name="followers"
                value={formData.followers}
                onChange={handleInputChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ringpurple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ringpurple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="rate"
                className="block text-sm font-medium text-gray-700"
              >
                Rate
              </label>
              <input
                type="text"
                id="rate"
                name="rate"
                value={formData.rate}
                onChange={handleInputChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ringpurple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="profilePic"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Pic URL
              </label>
              <input
                type="text"
                id="profilePic"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleInputChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ringpurple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ringpurple-500"
                required
              />
            </div>
            
            {selectedInfluencer && (
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-mdborder-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                </select>
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleCloseModal}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              {edit.isEdit ? "Update " : "Add "}
              Influencer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfluencerModal;
