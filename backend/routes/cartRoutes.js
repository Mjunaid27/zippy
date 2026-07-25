const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");


// Add Product To Cart
router.post("/", protect, addToCart);


// Get User Cart
router.get("/", protect, getCart);


// Update Cart Quantity
router.put("/", protect, updateCart);


// Remove Product From Cart
router.delete("/", protect, removeFromCart);


module.exports = router;