import React from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      bg="gray.50"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="8"
    >
      <VStack spacing="6" textAlign="center">
        <Heading size="2xl" color="teal.500">
          Welcome to Finance Manager
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Manage your finances efficiently and effectively with our easy-to-use
          dashboard.
        </Text>
        <VStack spacing="4">
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            colorScheme="teal"
            onClick={() => navigate("/login")}
          >
            Learn More
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default LandingPage;
