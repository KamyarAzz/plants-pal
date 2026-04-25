import mongoose from "mongoose";
import process from "process";
import logger from "../utils/logger.js";

const connectDB = async () => {
  try {
    logger.info("Connecting to MongoDB...");
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    logger.info("Database connected", {
      host: connectionInstance.connection.host,
    });
  } catch (error) {
    logger.error("MongoDB connection failed", {
      message: error.message,
      stack: error.stack,
    });
    process.exit(1);
  }
};

export default connectDB;
