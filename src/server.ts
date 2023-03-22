import express from "express";
import { productRouter } from "./controllers/productController";
import { authRouter } from "./controllers/authController";

const app = express();
app.use(express.json());
app.use("/products", productRouter);
app.use("/auth", authRouter);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
