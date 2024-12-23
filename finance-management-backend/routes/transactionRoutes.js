const express = require("express");
const Transaction = require("../models/Transaction");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get recent transactions
router.get("/", authMiddleware, async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user.id })
      .sort({ date: -1 })
      .limit(5);
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions", error });
  }
});

// Add new transaction
router.post("/", authMiddleware, async (req, res) => {
  const { description, amount, date } = req.body;
  try {
    const transaction = await Transaction.create({
      userId: req.user.id,
      description,
      amount,
      date,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: "Error adding transaction", error });
  }
});

module.exports = router;
