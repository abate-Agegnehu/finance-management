const Transaction = require("../models/Transaction");

// Add a new transaction
exports.addTransaction = async (req, res) => {
  const { description, amount, date } = req.body;
  try {
    const newTransaction = new Transaction({
      description,
      amount,
      date,
      userId: req.user.id, // From JWT token
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ message: "Error adding transaction", error: err });
  }
};

// Get all transactions for the logged-in user
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id });
    res.status(200).json(transactions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching transactions", error: err });
  }
};
