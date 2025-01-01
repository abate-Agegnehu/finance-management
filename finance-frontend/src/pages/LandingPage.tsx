import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const MotionCard = motion(Card);
  const MotionBox = motion(Box);

  return (
    <MotionBox
      bg="gray.50"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="8"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
    >
      <Heading size="2xl" color="teal.500" textAlign="center">
        Manage Your Finances with Ease
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap="8"
        width="100%"
        w="full"
        alignItems="stretch"
        padding="20px"
      >
        <MotionCard
          w="full"
          h="full"
          maxW="400%"
          border="1px solid"
          borderColor="gray.200"
          p={{ base: "6", md: "8" }}
          borderRadius="md"
          boxShadow="md"
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
        >
          <CardBody>
            <VStack
              align="start"
              spacing="4"
              color="gray.600"
              fontSize={{ base: "sm", md: "md" }}
            >
              <Text fontSize="lg" color="gray.600" mb="4">
                Stay on top of your financial health with our intuitive finance
                management dashboard. Track your income, expenses, and balance
                all in one place. Sign up today to gain insights into your
                spending habits and easily manage your transactions.
              </Text>

              <Text>• Effortlessly add and track your transactions.</Text>
              <Text>• Get real-time updates on your current balance.</Text>
              <Text>
                • Access your financial data securely with authentication.
              </Text>
              <Button
                variant="outline"
                colorScheme="teal"
                onClick={() => navigate("/login")}
                width="full"
              >
                Learn More
              </Button>
            </VStack>
          </CardBody>
        </MotionCard>

        <MotionCard
          w="full"
          h="full"
          maxW="400%"
          border="1px solid"
          borderColor="gray.200"
          p={{ base: "6", md: "8" }}
          borderRadius="md"
          boxShadow="md"
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.6 }} 
        >
          <CardBody>
            <Heading size="lg" color="teal.500" mb="4">
              Start Today!
            </Heading>
            <Text fontSize="lg" color="gray.600" mb="4">
              Join now and experience seamless finance management. Securely
              track your transactions and get insights into your spending.
            </Text>
            <Button
              colorScheme="teal"
              size="lg"
              onClick={() => navigate("/signup")}
              width="full"
            >
              Get Started
            </Button>
          </CardBody>
        </MotionCard>
      </Grid>
    </MotionBox>
  );
};

export default LandingPage;
