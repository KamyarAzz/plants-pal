import express from "express";
import process from "process";
const app = express();
const path = process.env.API_BASE_PATH || "/api/v1";

app.use(express.json());

import userRouter from "./routes/user.route.js";
import plantRouter from "./routes/plant.route.js";

app.use(`${path}/user`, userRouter);
app.use(`${path}/plant`, plantRouter);

export default app;
