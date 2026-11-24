import express, { type Application, type ErrorRequestHandler } from "express";
import cors from "cors";
import { allRoutes } from "./app/routes/index.ts";

const app: Application = express();

app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    message: "Server is running like a Rabit.",
  });
});

app.use("/api/v1", allRoutes);
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err);
  console.log(err?.message);
  console.log(err?.stack);
};

app.use(errorHandler);

export default app;
