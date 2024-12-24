import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      const { token } = response.data;

      // Store token in localStorage
      localStorage.setItem("token", token);

      toast({
        title: "Login successful!",
        status: "success",
        duration: 3000,
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Login failed. Please check your credentials.",
        status: "error",
        duration: 3000,
      });
    }
  };

  return (
    <Box
      bg="white"
      p="8"
      maxW="md"
      mx="auto"
      mt="10"
      shadow="md"
      borderRadius="lg"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing="4">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit" width="full">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginPage;
