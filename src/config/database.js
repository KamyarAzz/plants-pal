import mongoose from "mongoose";
import process from "process";
const connectDB = async () => {
  try {
    console.log("MongoDB conection started");
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected \n ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB cnnection failed", error);
    process.exit(1);
  }
};

export default connectDB;
