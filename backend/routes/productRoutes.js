const express = require("express");
const router = express.Router();


const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");


// Add Product
router.post("/", addProduct);


// Get All Products
router.get("/", getProducts);


// Get Single Product
router.get("/:id", getSingleProduct);


// Update Product
router.put("/:id", updateProduct);


// Delete Product
router.delete("/:id", deleteProduct);


module.exports = router;