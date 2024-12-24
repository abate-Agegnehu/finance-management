import axios from "axios";

// Base URL for your backend API
const API_BASE = "http://localhost:5000/api/"; // Replace this with the actual backend URL

// Helper to get the token from localStorage
const getToken = () => localStorage.getItem("token");

// Login API
export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_BASE}/login`, credentials);
  // Save token in localStorage on successful login
  localStorage.setItem("token", response.data.token);
  return response.data;
};

// Sign-Up API
export const signUp = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_BASE}/register`, data);
  return response.data;
};

// Fetch Current Balance API
export const fetchCurrentBalance = async () => {
  const token = getToken();
  const response = await axios.get(`${API_BASE}/balance`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data; // Example response: { balance: 1000 }
};

// Fetch Recent Transactions API
export const fetchRecentTransactions = async () => {
  const token = getToken();
  const response = await axios.get(`${API_BASE}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data; // Example response: [{ date, description, amount }]
};

// Add New Transaction API
export const addTransaction = async (data: {
  description: string;
  amount: number;
  date: string;
}) => {
  const token = getToken();
  const response = await axios.post(`${API_BASE}/transactions`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data; // Example response: { success: true, transaction: {...} }
};
