import express from "express";
import { login, signUp } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/auth/sign-up", signUp);
router.post("/auth/login", login);

export default router;
