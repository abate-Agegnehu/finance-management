import React from "react";
import { Box } from "@chakra-ui/react";
import Dashboard from "../components/Dashboard";

const DashboardPage: React.FC = () => {
  return (
    <Box bg="gray.100" minH="100vh" p="4">
      <Dashboard />
    </Box>
  );
};

export default DashboardPage;
