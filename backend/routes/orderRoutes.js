const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getMyOrders,
} = require("../controllers/orderController");

const { protect } = require("../middleware/authMiddleware");

// Place Order
router.post("/", protect, placeOrder);

// Get My Orders
router.get("/", protect, getMyOrders);

module.exports = router;