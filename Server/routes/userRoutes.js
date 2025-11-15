import express from "express";
import { addUser , showUsers } from "../controller/userController.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/all", showUsers);

export default router;
