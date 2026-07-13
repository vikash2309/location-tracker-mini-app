import Scan from "../models/Scan.js";

export const saveScan = async (req, res) => {

    try {

        const {
            latitude,
            longitude,
            accuracy,
            deviceInfo
        } = req.body;

        // Check if all required fields are present
        if (
            latitude === undefined ||
            longitude === undefined ||
            accuracy === undefined ||
            !deviceInfo
        ) {

            return res.json({

                success: false,

                message: "Missing required fields"

            });

        }

        const scan = await Scan.create({

            latitude,

            longitude,

            accuracy,

            deviceInfo

        });

        return res.json({

            success: true,

            message: "Location stored successfully.",

            data: scan

        });

    }

    catch (error) {

        console.log(error);

        return res.json({

            success: false,

            message: "Internal Server Error"

        });

    }

};