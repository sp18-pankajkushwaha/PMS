import express from "express";
import {
  get,
  getById,
  create,
  update,
  deleteProduct,
} from "./controller.js";
import { validateId, validateCreate, validateUpdate } from "./validator.js";

const router = express.Router();

router.get("/", get);
router.get("/:id", validateId, getById);
router.post("/products", validateCreate, create);
router.put("/:id", validateId, validateUpdate, update);
router.delete("/:id", validateId, deleteProduct);

export default router;
