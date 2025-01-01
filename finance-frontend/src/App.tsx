import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TransactionForm from "./components/TransactionForm";

const App: React.FC = () => {
  return (
    <Router>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add-transaction" element={<TransactionForm />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
