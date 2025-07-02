import axios from "axios";
const base_url = 'https://influencer-adda.onrender.com'

const fetchComments = async (id, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${base_url}/api/booking/${id}/comment`, options);
  return response.data;
};

const createComment = async (formData, token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${base_url}/api/booking/${formData.id}/comment`,
    formData,
    options
  );
  return response.data;
};

const commentService = { fetchComments, createComment };

export default commentService;
