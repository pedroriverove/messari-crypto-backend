import express, { Request, Response } from "express";
import MetricsService from "../services/metricsService";
import axios from "axios";
import { IAssets } from "../types";

export const metricsController = express.Router();

const metricsService: MetricsService = new MetricsService();

metricsController.get("/coin-metrics", async(_request: Request, response: Response) => {
  let metricsResponse: IAssets | undefined;

  try {
    metricsResponse = await metricsService.getCoinMetrics();
  } catch (error) {
    if (axios.isAxiosError(error))  {
      response.status(404).json({ message: error.message });
    }

    response.status(404).json({ message: "Unknown endpoint" });
  }

  response.status(200).json(metricsResponse);
});
