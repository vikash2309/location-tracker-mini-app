import Scan from "../models/Scan.js";
import { UAParser } from "ua-parser-js";

export const suspiciousMiddleware = async (req, res, next) => {
    try {
         console.log("=== Suspicious middleware entered ===");

        const ipAddress = req.ip;

        const userAgent = req.headers["user-agent"] || "";

        const parser = new UAParser(userAgent);

        const browser = parser.getBrowser().name || "Unknown";
        const os = parser.getOS().name || "Unknown";
        const deviceType = parser.getDevice().type || "Desktop";

        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

        const requestCount = await Scan.countDocuments({
            ipAddress,
            browser,
            os,
            deviceType,
            scannedAt: {
                $gte: fiveMinutesAgo
            }
        });
        console.log(requestCount)

        if (requestCount >= 7) {
            return res.json({
                success: false,
                message: "Access denied. Suspicious activity detected."
            });
        }

        // Make these values available to the controller
        req.clientInfo = {
            ipAddress,
            userAgent,
            browser,
            os,
            deviceType
        };

        next();

    } catch (error) {

        console.error(error);

        return res.json({
            success: false,
            message: "Internal Server Error"
        });

    }
};