import mongoose from "mongoose";

const scanSchema = new mongoose.Schema({

    latitude: {
        type: Number,
        required: true
    },

    longitude: {
        type: Number,
        required: true
    },

    accuracy: {
        type: Number,
        required: true
    },

    // deviceInfo: {
    //     type: String,
    //     required: true
    // },
     city: {
        type: String
    },

    state: {
        type: String
    },

    country: {
        type: String
    },

    // Client Information
    ipAddress: {
        type: String,
        required: true
    },
     browser: {
        type: String
    },

    os: {
        type: String
    },
    userAgent: {
    type: String,
    required: true
},


    deviceType: {
        type: String
    },
     // Location Permission
    // permissionStatus: {
    //     type: String,
    //     enum: ["granted", "denied"],
    //     default: "granted"
    // },

    // Rapid Request Detection
   

    scannedAt: {
        type: Date,
        default: Date.now
    }

});

const Scan = mongoose.model("Scan", scanSchema);

export default Scan;