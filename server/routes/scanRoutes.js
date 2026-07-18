import express from "express";
import { getdata, saveScan } from "../controllers/scanController.js";
import { suspiciousMiddleware } from "../middleware/suspicious.middleware.js";


const router = express.Router();

router.post("/scan",suspiciousMiddleware, saveScan);
router.get("/data",getdata);

export default router;