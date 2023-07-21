import axios from "axios";

const API_URL = "http://localhost:5050/api/profiles";

axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

export const createProfile = async (profileData) => {
  const response = await axios.post(`${API_URL}/create-profile`, profileData);
  // console.log("response from api", response.data.profile._id);
  return response.data;
};

export const getProfile = async (id) => {
  const response = await axios.get(`${API_URL}/get/${id}`);
  return response.data;
};

export const updateProfile = async ({profileId, bio, location }) => {
  // const test = { bio, location }
  const response = await axios.put(`${API_URL}/update/${profileId}`, { bio, location });
  return response.data;
};

export const deleteProfile = async (profileId) => {
  const response = await axios.delete(`${API_URL}/delete/${profileId}`);
  return response.data;
};
