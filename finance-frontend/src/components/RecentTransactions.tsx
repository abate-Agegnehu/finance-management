import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Text,
  Spinner,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  List,
  ListItem,
  ListIcon,
  Heading,
} from "@chakra-ui/react";

interface Transaction {
  description: string;
  amount?: number;
  date?: string;
}

const RecentTransactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTransactions = async (): Promise<void> => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found, please login again.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get<Transaction[]>(
          "http://localhost:5000/api/transactions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTransactions(response.data);
      } catch (err: any) {
        setError("Error fetching transactions.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Recent Transactions
      </Heading>
      <VStack align="start" spacing={4}>
        {transactions.length === 0 ? (
          <Text>No transactions to display</Text>
        ) : (
          <List spacing={3}>
            {transactions.map((transaction, index) => (
              <ListItem key={index}>
                <Box
                  borderWidth={1}
                  p={3}
                  borderRadius="md"
                  boxShadow="md"
                  display="flex"
                  justifyContent="space-between"
                >
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="bold">{`${index + 1}. ${
                      transaction.description
                    }`}</Text>
                    <Text color="gray.600">
                      {transaction.amount
                        ? `$${transaction.amount}`
                        : "No amount"}{" "}
                      {transaction.date ? `on ${transaction.date}` : ""}
                    </Text>
                  </VStack>
                </Box>
              </ListItem>
            ))}
          </List>
        )}
      </VStack>
    </Box>
  );
};

export default RecentTransactions;
