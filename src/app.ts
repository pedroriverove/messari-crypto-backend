import express from "express";
import cors from "cors";
import helmet from "helmet";
import middleware from "./utils/middleware";
import { NODE_ENV } from "./utils/config";
import { metricsController } from "./controllers/metricsController";

const app = express();
app.use(express.static("build"));
app.use(express.json());

app.use(cors());
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  }),
);

if (NODE_ENV === "production") {
  app.get("*", (_req, res) => {
    res.sendFile("index.html", { root: "./build/" });
  });
}

app.use("/api/", metricsController);

app.use(middleware.unknownEndpoint);

export default app;
