import express from "express";
import { saveScan } from "../controllers/scanController.js";

const router = express.Router();

router.post("/scan", saveScan);

export default router;