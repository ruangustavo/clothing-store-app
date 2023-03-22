import express from "express";

export const productRouter = express.Router();

productRouter.get("", (_req, res) => {
  res.send("Get all products");
});

productRouter.get(":id", (req, res) => {
  const id = req.params.id;
  res.send(`Get product with ID ${id}`);
});

productRouter.post("", (req, res) => {
  const product = req.body;
  res.send(`Create product: ${JSON.stringify(product)}`);
});

productRouter.put(":id", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  res.send(`Update product with ID ${id}: ${JSON.stringify(product)}`);
});

productRouter.delete(":id", (req, res) => {
  const id = req.params.id;
  res.send(`Delete product with ID ${id}`);
});
