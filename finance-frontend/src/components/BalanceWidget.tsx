import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Spinner } from "@chakra-ui/react";
import axios from "axios";

const BalanceWidget: React.FC = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found, please login.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/balance", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Box p="6" shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
      <Heading size="md" mb="4">
        Current Balance
      </Heading>
      {loading ? (
        <Spinner />
      ) : (
        <Text fontSize="2xl" color="teal.600">
          ${balance?.toFixed(2)}
        </Text>
      )}
    </Box>
  );
};

export default BalanceWidget;
