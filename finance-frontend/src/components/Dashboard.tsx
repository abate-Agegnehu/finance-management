import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import BalanceWidget from "./BalanceWidget";
import RecentTransactions from "./RecentTransactions";
import TransactionForm from "./TransactionForm";

const Dashboard: React.FC = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "2fr 1fr" }} gap="6" p="6">
      {/* Current Balance */}
      <GridItem>
        <BalanceWidget />
      </GridItem>

      {/* Recent Transactions */}
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <RecentTransactions />
      </GridItem>

      {/* Add Transaction */}
      <GridItem>
        <TransactionForm />
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
