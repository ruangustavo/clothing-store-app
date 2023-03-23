import express from "express";
import { Product } from "../models/product";

export class ProductController {
  async getAllProducts(_req: express.Request, res: express.Response) {
    const products = await Product.findAll();
    res.status(200).send(products);
  }

  async getProductById(req: express.Request, res: express.Response) {
    const id = Number(req.params.id);
    const product = await Product.findById(id);
    res.status(200).send(product);
  }

  async createProduct(req: express.Request, res: express.Response) {
    const productToCreate = req.body;
    const createdProducts = await Product.create(productToCreate);
    res.status(201).send(createdProducts);
  }

  async updateProduct(req: express.Request, res: express.Response) {
    const id = Number(req.params.id);
    const productToUpdate = req.body;
    const updatedProduct = await Product.update(id, productToUpdate);
    res.status(200).send(updatedProduct);
  }

  async deleteProduct(req: express.Request, res: express.Response) {
    const id = Number(req.params.id);
    await Product.delete(id);
    res.status(200).send({ message: "Product deleted" });
  }
}
