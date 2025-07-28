import Product from "../models/products.js";

export const index = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log("Error:", err.stack);
    res.status(500).json({
      message: "Something went wrong, Please try again later...",
    });
  }
};

export const get = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.status(200).json(product);
  } catch (err) {
    console.log("Error:", err.stack);
    res.status(500).json({
      message: "Something went wrong, Please try again later...",
    });
  }
};

export const create = async (req, res) => {
  try {
    const { name, price, description, category, inStock } = req.body;
    const product = await Product.create({
      name,
      price,
      description,
      category,
      inStock,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log("Error:", err.stack);
    res.status(500).json({
      message: "Something went wrong, Please try again later...",
    });
  }
};

export const update = async (req, res) => {
  try {
    const productId = req.params.id;
    const updated = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    res.status(200).json(updated);
  } catch (err) {
    console.log("Error:", err.stack);
    res.status(500).json({
      message: "Something went wrong, Please try again later...",
    });
  }
};

export const destroy = async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.status(204).json();
  } catch (err) {
    console.log("Error:", err.stack);
    res.status(500).json({
      message: "Something went wrong, Please try again later...",
    });
  }
};
