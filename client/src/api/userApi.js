import axios from "axios";

const API_URL = "http://localhost:5050/api/users";

export const signup = async (username, password) => {
  const response = await axios.post(`${API_URL}/signup`, {
    username,
    password,
  });
  return response.data;
};

export const signin = async (username, password) => {
  const response = await axios.post(`${API_URL}/signin`, {
    username,
    password,
  });
  return response.data;
};

export const signout = async () => {
  const response = await axios.post(`${API_URL}/signout`);
  return response.data;
};
