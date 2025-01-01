import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { addTransaction } from "../services/api";

interface FormData {
  description: string;
  amount: string;
  date: string;
}

const TransactionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    description: "",
    amount: "",
    date: "",
  });

  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.description || !formData.amount || !formData.date) {
      toast({
        title: "All fields are required!",
        status: "error",
        duration: 3000,
      });
      return;
    }

    try {
      const transactionData = {
        ...formData,
        amount: parseFloat(formData.amount),
      };

      await addTransaction(transactionData);

      toast({
        title: "Transaction added successfully!",
        status: "success",
        duration: 3000,
      });

      setFormData({ description: "", amount: "", date: "" });

      window.location.reload();
    } catch (error) {
      toast({
        title: "Error adding transaction.",
        status: "error",
        duration: 3000,
      });
    }
  };

  return (
    <Box p="6" shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Add Transaction
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default TransactionForm;
