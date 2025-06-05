import axios from "axios";

const fetchAllUsersBookingsForAdmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/admin/bookings", options);
  // console.log(response.data);
  return response.data;
};

const fetchAllUsersForAdmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/admin/users", options);
  return response.data;
};

const fetchInfluencersForAdmin = async () => {
  const response = await axios.get("/api/influencers");
  return response.data;
};

const fetchAllCommentsForAdmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/admin/comments", options);
  return response.data;
};

const addInfluencer = async (formData, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post("/api/admin/influencer", formData, options);
  return response.data;
};

const updateInfluencer = async (formData, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(
    `/api/admin/influencer/${formData._id}`,
    formData,
    options
  );
  return response.data;
};

const deleteInfluencer = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`/api/admin/influencer/${id}`, options);
  return response.data;
};

const updateBooking = async (updateStatus, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `/api/admin/bookings/${updateStatus.id}`,
    { status: updateStatus.value },
    options
  );
  console.log(response.data);
  return response.data;
};

const replyCommentByAdmin = async(formData, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

    const response = await axios.post(`/api/booking/${formData.bid}/comment`, formData, options)
  console.log(response.data)
  return response.data

};

const adminService = {
  fetchAllUsersBookingsForAdmin,
  fetchInfluencersForAdmin,
  fetchAllUsersForAdmin,
  fetchAllCommentsForAdmin,
  addInfluencer,
  updateInfluencer,
  deleteInfluencer,
  updateBooking,
  replyCommentByAdmin,
};

export default adminService;
