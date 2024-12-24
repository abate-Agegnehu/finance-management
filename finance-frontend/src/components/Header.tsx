import React from "react";
import { Flex, Heading, Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      as="header"
      bg="white"
      py="4"
      px="8"
      shadow="sm"
      justify="space-between"
      align="center"
    >
      <Heading as="h1" size="lg" color="teal.500">
        Finance Manager
      </Heading>
      <Box>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={() => navigate("/login")}
          mr="4"
        >
          Login
        </Button>
        <Button colorScheme="teal" onClick={() => navigate("/signup")}>
          Sign Up
        </Button>
      
      </Box>
    </Flex>
  );
};

export default Header;
