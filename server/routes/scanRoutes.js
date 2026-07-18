import express from "express";
import { saveScan } from "../controllers/scanController.js";
import { suspiciousMiddleware } from "../middleware/suspicious.middleware.js";

const router = express.Router();

router.post("/scan",suspiciousMiddleware, saveScan);

export default router;