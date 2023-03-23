import express from "express";
import { Product } from "../models/product";

export const productRouter = express.Router();

productRouter.get("", async (_req, res) => {
  const products = await Product.findAll();
  res.send(products);
});

productRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const product = await Product.findById(id);
  res.send(product);
});

productRouter.post("", async (req, res) => {
  const productToCreate = req.body;
  const createdProducts = await Product.create(productToCreate);
  res.send(createdProducts);
});

productRouter.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const productToUpdate = req.body;
  const updatedProduct = await Product.update(id, productToUpdate);
  return res.send(updatedProduct);
});

productRouter.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await Product.delete(id);
  res.send({ message: "Product deleted" });
});
