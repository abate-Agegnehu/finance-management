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
import { motion } from "framer-motion"; 

const MotionBox = motion(Box); 
const MotionVStack = motion(VStack);

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      const { token } = response.data;

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
    <MotionBox
      bg="white"
      p="8"
      maxW="md"
      mx="auto"
      mt="10"
      shadow="md"
      borderRadius="lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <form onSubmit={handleSubmit}>
        <MotionVStack
          spacing="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
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
        </MotionVStack>
      </form>
    </MotionBox>
  );
};

export default LoginPage;
