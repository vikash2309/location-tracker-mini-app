import Scan from "../models/Scan.js";


import { getLocationFromCoordinates } from "../services/geocode.service.js";

export const saveScan = async (req, res) => {

    try {

        const {
            latitude,
            longitude,
            accuracy,
           
        } = req.body;

        const location = await getLocationFromCoordinates(
    latitude,
    longitude
);

const { city, state, country } = location;

        const {
            ipAddress,
            userAgent,
            browser,
            os,
            deviceType
        }=req.clientInfo


       
// const city="sadabad"
// const state="up"
// const country="india"

        // Check if all required fields are present
        if (
            latitude === undefined ||
            longitude === undefined ||
            accuracy === undefined

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

            ipAddress,
            userAgent,

            browser,
            os,
            deviceType,

            


            city,
            state,
            country
        });
        return res.json({

            success: true,

            message: "Location recorded successfully.",

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

export const getdata=async(req,res)=>{

     try {
        const scans = await Scan.find().lean();

        res.json(scans);
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}