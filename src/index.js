import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";
import process from "process";

dotenv.config({
  path: ".env",
});

const startServer = async () => {
  try {
    await connectDB();

    // app.error((err, req, res) => {
    //   res.status(500).json({
    //     message: err.message,
    //   });
    // });

    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
