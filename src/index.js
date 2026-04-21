import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";
import process from "process";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
