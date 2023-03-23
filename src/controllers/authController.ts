import express from "express";

export class AuthController {
  async login(_req: express.Request, res: express.Response) {
    res.json({ message: "User logged in successfully" });
  }

  async register(_req: express.Request, res: express.Response) {
    res.json({ message: "User registered successfully" });
  }
}
