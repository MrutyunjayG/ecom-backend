const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await Product.create(productData);

    res.status(201).json({
      message: "Product created",
      product: newProduct,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const procductId = req.params.id;
    const productDate = req.body;
    cductData = req.body;

    const Product = await Product.findOneAndUpdate(productId, productData, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    res.json({
      message: "product updated",
      product,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const procductId = req.params.id;
    const productDate = req.body;
    cductData = req.body;

    const Product = await Product.findOneAndUpdate(productId, productData, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({
        message: "product not found",
      });
    }

    res.json({
      message: "product updated",
      product,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
