import Product from "../models/products.model.js";

const allowedFields = ["name", "price", "description", "category", "inStock"];

const trimStringFields = (data) => {
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === "string") {
      data[key] = data[key].trim();
    }
  });
};

export async function validateId(req, res, next) {
  const { id } = req.params;
  if (id && !id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ error: "Invalid MongoDB ObjectID format" });
  }
  const product = await Product.findById(id);
  if (!product)
    return res.status(404).json({ error: "Product not found- Invalid ID" });
  next();
}

function validateFields(
  { name, price, description, category, inStock },
  res,
  isCreate = false
) {
  if (name !== undefined) {
    if (typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ error: "Name must be a non-empty string" });
    }
  } else if (isCreate) {
    return res
      .status(400)
      .json({ error: "Name is required and must be a non-empty string" });
  }
  if (price !== undefined) {
    if (typeof price !== "number") {
      return res.status(400).json({ error: "Price must be a number" });
    }
  } else if (isCreate) {
    return res
      .status(400)
      .json({ error: "Price is required and must be a number" });
  }
  if (description !== undefined && typeof description !== "string") {
    return res.status(400).json({ error: "Description must be a string" });
  }
  if (category !== undefined && typeof category !== "string") {
    return res.status(400).json({ error: "Category must be a string" });
  }
  if (inStock !== undefined && typeof inStock !== "boolean") {
    return res.status(400).json({ error: "inStock must be a boolean" });
  }
  return null;
}

function checkUnknownFields(body, res) {
  const unknownFields = Object.keys(body).filter(
    (key) => !allowedFields.includes(key)
  );
  if (unknownFields.length > 0) {
    res
      .status(400)
      .json({ error: `Unexpected fields: ${unknownFields.join(", ")}` });
    return true;
  }
  return false;
}

export function validateCreate(req, res, next) {
  if (checkUnknownFields(req.body, res)) return;
  const error = validateFields(req.body, res, true);
  trimStringFields(req.body)
  if (error) return;
  next();
}

export function validateUpdate(req, res, next) {
  if (checkUnknownFields(req.body, res)) return;
  const error = validateFields(req.body, res, false);
  trimStringFields(req.body)
  if (error) return;
  next();
}
