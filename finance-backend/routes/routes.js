const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const {
  addTransaction,
  getTransactions,
  getBalance,
} = require("../controllers/transactionController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.post("/transactions", protect, addTransaction);
router.get("/transactions", protect, getTransactions);
router.get("/balance", protect, getBalance);

module.exports = router;
