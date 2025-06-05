import axios from "axios";

const fetchInfluencers = async () => {
  const response = await axios.get("/api/influencers");
  return response.data;
};

const fetchInfluencer = async (id) => {
  const response = await axios.get("/api/influencers/single/" + id);
  return response.data;
};

const influencerService = { fetchInfluencers, fetchInfluencer };

export default influencerService;
