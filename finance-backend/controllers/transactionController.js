const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  const { description, amount, date } = req.body;
  try {
    const newTransaction = new Transaction({
      description,
      amount,
      date,
      userId: req.user.id,
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ message: "Error adding transaction", error: err });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id })
      .sort({ date: -1 })
      .limit(5);

    res.status(200).json(transactions);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching transactions", error: err });
  }
};

exports.getBalance = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id });
    const balance = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    res.status(200).json({ balance });
  } catch (err) {
    res.status(500).json({ message: "Error fetching balance", error: err });
  }
};
