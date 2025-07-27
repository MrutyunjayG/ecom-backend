const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productcontroller");
const { isAuth } = require("../middlewares/authMiddlewares");
const { isAdmin } = require("../middlewares/authMiddlewares");

const productRoutes = express.Router();

productRoutes.get("/products", isAuth, getAllProducts);

productRoutes.get("/products/:id", getProductById);

productRoutes.post("/products", isAuth, isAdmin, createProduct);

productRoutes.put("/products/:id", isAuth, isAdmin, updateProduct);

productRoutes.delete("/products/:id", isAuth, isAdmin, deleteProduct);

module.exports = productRoutes;
