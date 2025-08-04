import express from "express";
import { index, get, create, update, destroy } from "./product.controllers.js";
import { validateId, validateCreate, validateUpdate } from "./product.validator.js";

const productRouter = express.Router();

productRouter.get("/", index);
productRouter.get("/:id", validateId, get);
productRouter.post("/", validateCreate, create);
productRouter.put("/:id", validateId, validateUpdate, update);
productRouter.delete("/:id", validateId, destroy);

export default productRouter;
