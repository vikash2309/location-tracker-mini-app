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

    deviceInfo: {
        type: String,
        required: true
    },

    scannedAt: {
        type: Date,
        default: Date.now
    }

});

const Scan = mongoose.model("Scan", scanSchema);

export default Scan;