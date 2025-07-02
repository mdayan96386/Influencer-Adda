import axios from "axios";
const base_url = 'https://influencer-adda.onrender.com'

const fetchUserBookings = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${base_url}/api/booking`, options);
  return response.data;
};

const fetchUserBooking = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${base_url}/api/booking/` + id, options);
  return response.data;
};

const requestBooking = async (id, token) => {
    console.log(id, token)
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${base_url}/api/booking/${id}`, {}, options);
  return response.data;
};

const bookingService = { fetchUserBookings, requestBooking,fetchUserBooking };

export default bookingService;
