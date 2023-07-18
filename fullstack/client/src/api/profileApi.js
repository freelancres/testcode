import axios from "axios";

const API_URL = "http://localhost:5050/api/profiles";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export const createProfile = async (profileData) => {
  const response = await axios.post(`${API_URL}/create-profile`, profileData);
  return response.data;
};

export const getProfile = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateProfile = async (id, profileData) => {
  const response = await axios.put(`${API_URL}/${id}`, profileData);
  return response.data;
};

export const deleteProfile = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
