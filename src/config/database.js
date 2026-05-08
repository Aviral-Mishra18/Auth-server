import mongoose from "mongoose";
import config from "./config.js";


async function connectDB(uri) {

    await mongoose.connect(config.MONGO_URI)

    console.log("Connected to DB")
}

export default connectDB;
