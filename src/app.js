import express from "express";
import process from "process";
import userRouter from "./routes/user.route.js";
import plantRouter from "./routes/plant.route.js";
import {requestLogger} from "./middleware/logger.middleware.js";
import {errorHandler, notFoundHandler} from "./middleware/error.middleware.js";

const app = express();
const path = process.env.API_BASE_PATH || "/api/v1";

app.use(express.json());
app.use(requestLogger);

app.use(`${path}/user`, userRouter);
app.use(`${path}/plants`, plantRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
