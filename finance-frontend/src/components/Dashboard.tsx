import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion"; 
import BalanceWidget from "./BalanceWidget";
import RecentTransactions from "./RecentTransactions";
import TransactionForm from "./TransactionForm";

const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);

const Dashboard: React.FC = () => {
  return (
    <MotionGrid
      templateColumns={{ base: "1fr", md: "2fr 1fr" }}
      gap="6"
      p="6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
    >
      <MotionGridItem
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }} 
      >
        <BalanceWidget />
      </MotionGridItem>

      <MotionGridItem
        colSpan={{ base: 1, md: 2 }}
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }} 
      >
        <RecentTransactions />
      </MotionGridItem>

      <MotionGridItem
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }} 
      >
        <TransactionForm />
      </MotionGridItem>
    </MotionGrid>
  );
};

export default Dashboard;
