import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentTransactions: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("token"); // Get token from localStorage

      if (!token) {
        setError("No token found, please login again.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/transactions",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add token to header
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.length === 0 ? (
          <p>No transactions to display</p>
        ) : (
          transactions.map((transaction, index) => (
            <li key={index}>{transaction.description}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RecentTransactions;
