import express from "express";

export const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  res.json({ token: "jwt-token" });
});

authRouter.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.json({ message: "User registered successfully" });
});
