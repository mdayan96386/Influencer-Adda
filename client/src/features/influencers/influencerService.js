import axios from "axios";
const base_url = 'https://influencer-adda.onrender.com'

const fetchInfluencers = async () => {
  const response = await axios.get(`${base_url}/api/influencers`);
  return response.data;
};

const fetchInfluencer = async (id) => {
  const response = await axios.get(`${base_url}/api/influencers/single/` + id);
  return response.data;
};

const influencerService = { fetchInfluencers, fetchInfluencer };

export default influencerService;
