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
import { signUp } from "../services/api";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toast = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords do not match.",
        status: "error",
        duration: 3000,
      });
      return;
    }
    try {
      await signUp(formData);
      toast({
        title: "Account created successfully!",
        status: "success",
        duration: 3000,
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error creating account.",
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
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </FormControl>
          <Button colorScheme="teal" type="submit" width="full">
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SignUpPage;
