import express from "express";
import { User } from "../models/user";

export class AuthController {
  async login(req: express.Request, res: express.Response) {
    try {
      const user = await User.authenticate(req.body);
      res.status(200).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(401).json({ message: error.message });
      }
    }
  }

  async register(req: express.Request, res: express.Response) {
    try {
      const user = await User.register(req.body);
      res.status(201).json(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      }
    }
  }
}
