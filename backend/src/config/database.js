
import mongoose from "mongoose";
import { configuration } from "./configuration.js";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(
            configuration.mongoUri,
            {
                serverSelectionTimeoutMS: 10000
            }
        );

        console.log(
            `MongoDB Connected: ${connection.connection.host}`
        );

        mongoose.connection.on("error", (error) => {
            console.error("MongoDB Error:", error);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("MongoDB Disconnected");
        });

    } catch (error) {
        console.error(error)
        console.error("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;
