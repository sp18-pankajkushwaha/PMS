import express from "express";
import {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
} from "./controller.js";
import { validateId, validateCreate, validateUpdate } from "./validator.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", validateId, getById);
router.post("/products", validateCreate, create);
router.put("/:id", validateId, validateUpdate, update);
router.delete("/:id", validateId, deleteProduct);

export default router;
