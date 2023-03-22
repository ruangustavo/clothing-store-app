import express from "express";
import { productRouter } from "./controllers/productController";

const app = express();
app.use("/products", productRouter);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
