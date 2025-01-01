import axios from "axios";

const API_BASE = "http://localhost:5000/api/";

const getToken = () => localStorage.getItem("token");

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_BASE}/login`, credentials);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const signUp = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_BASE}/register`, data);
  return response.data;
};

export const fetchCurrentBalance = async () => {
  const token = getToken();
  const response = await axios.get(`${API_BASE}/balance`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchRecentTransactions = async () => {
  const token = getToken();
  const response = await axios.get(`${API_BASE}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const addTransaction = async (data: {
  description: string;
  amount: number;
  date: string;
}) => {
  const token = getToken();
  const response = await axios.post(`${API_BASE}/transactions`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
