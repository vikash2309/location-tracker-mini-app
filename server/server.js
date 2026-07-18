import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import scanRoutes from "./routes/scanRoutes.js"


dotenv.config();

const app = express();
// console.log(process.env.MONGO_URI);

// Connect Database
connectDB();


app.use(cors());
app.use(express.json());
  app.set("trust proxy", true);

//  Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "QR Visitor Tracking API is running."
    });
});


app.use("/api", scanRoutes);


app.use((req, res) => {
    res.json({
        success: false,
        message: "Route Not Found"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});