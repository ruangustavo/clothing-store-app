import express from "express";
import { AuthController } from "../controllers/authController";

export const authRouter = express.Router();
const authController = new AuthController();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
