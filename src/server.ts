import express from "express";
import { productRouter } from "./routes/productRouter";
import { authRouter } from "./routes/authRouter";

const app = express();
app.use(express.json());
app.use("/", authRouter);
app.use("/products", productRouter);

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
