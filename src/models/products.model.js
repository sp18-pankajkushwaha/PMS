import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("products", productSchema);
