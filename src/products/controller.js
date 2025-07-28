import Product from "../models/products.js";

export const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log("Error:", err);
  }
};

export const getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Product not found- Invalid ID" });
    res.json(product);
  } catch (err) {
    console.log("Error:", err);
  }
};

export const create = async (req, res) => {
  try {
    const { name, price, description, category, inStock } = req.body;
    const product =await Product.create({
      name,
      price,
      description,
      category,
      inStock,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log("Error:", err);
  }
};

export const update = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Product not found." });
    res.json(updated);
  } catch (err) {
    console.log("Error:", err);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product Deleted" });
  } catch (err) {
    console.log("Error:", err);
  }
};
