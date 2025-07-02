import axios from "axios";

const base_url = 'https://influencer-adda.onrender.com'

const register = async (formData) => {
  const response = await axios.post(`${base_url}/api/auth/register`, formData);
  localStorage.setItem('user', JSON.stringify(response.data))
  return response.data;
};

const login = async (formData) => {
    const response = await axios.post(`${base_url}/api/auth/login`, formData)
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data;
}

const authService = {login, register}

export default authService;