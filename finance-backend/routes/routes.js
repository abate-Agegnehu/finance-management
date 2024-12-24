const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const {
  addTransaction,
  getTransactions,
} = require("../controllers/transactionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Auth Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Transaction Routes (Protected)
router.post("/transactions", protect, addTransaction);
router.get("/transactions", protect, getTransactions);

module.exports = router;
