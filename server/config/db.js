import mongoose from "mongoose";

const connectDB = async () => {

    try {

        const connection = await mongoose.connect(`${process.env.MONGO_URI}/qr_app`);
        console.log("mongo db is connected")

    }
    catch (error) {

        console.log("MongoDB Connection Failed");

        console.log(error.message);



    }

};

export default connectDB;