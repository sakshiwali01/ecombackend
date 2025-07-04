const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");
const validateProduct = require("../utils/validateProduct");

const productRoutes = express.Router();
productRoutes.post("/", isAuth, isAdmin, validateProduct, createProduct);
productRoutes.get("/", isAuth, getAllProducts);
productRoutes.get("/:id", isAuth, getProductById);
productRoutes.put("/:id", isAuth, isAdmin, validateProduct, updateProduct);
productRoutes.delete("/:id", isAuth, isAdmin, deleteProduct);

module.exports = productRoutes;
