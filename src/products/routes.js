import express from "express";
import { index, get, create, update, destroy } from "./controller.js";
import { validateId, validateCreate, validateUpdate } from "./validator.js";

const productRouter = express.Router();

productRouter.get("/", index);
productRouter.get("/:id", validateId, get);
productRouter.post("/", validateCreate, create);
productRouter.put("/:id", validateId, validateUpdate, update);
productRouter.delete("/:id", validateId, destroy);

export default productRouter;
