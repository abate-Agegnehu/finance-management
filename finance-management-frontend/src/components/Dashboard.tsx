import { useEffect, useState } from "react";
import API from "../services/api";

interface Transaction {
  id: string;
  description: string;
  amount: number;
}

interface DashboardData {
  balance: number;
  transactions: Transaction[];
}

const Dashboard = () => {
  const [balance, setBalance] = useState<number>(0); // Store the user's balance
  const [transactions, setTransactions] = useState<Transaction[]>([]); // Store the user's transactions
  const [loading, setLoading] = useState<boolean>(true); // Loading state for the component
  const [error, setError] = useState<string | null>(null); // Explicitly define error type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get<DashboardData>("/transactions");
        setBalance(res.data.balance); // Set the balance
        setTransactions(res.data.transactions); // Set the transactions list
      } catch (err) {
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false); // End the loading state
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading indicator
  }

  if (error) {
    return <p className="text-red-500">{error}</p>; // Show an error message
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="mb-4">
        <p className="text-lg font-medium">Current Balance:</p>
        <p className="text-green-600 text-xl">${balance}</p>
      </div>
      <h2 className="text-xl font-medium mb-2">Recent Transactions:</h2>
      <ul className="space-y-2">
        {transactions.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          transactions.map((tx) => (
            <li
              key={tx.id}
              className="p-2 border rounded-md shadow-sm flex justify-between items-center"
            >
              <span>{tx.description}</span>
              <span
                className={`${
                  tx.amount < 0 ? "text-red-500" : "text-green-500"
                } font-semibold`}
              >
                ${tx.amount}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
