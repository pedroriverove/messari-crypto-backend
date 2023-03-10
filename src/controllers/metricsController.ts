import express, { Request, Response } from "express";
import MetricsService from "../services/metricsService";
import axios from "axios";
import { IAssets } from "../types";

export const metricsController = express.Router();

const metricsService: MetricsService = new MetricsService();

metricsController.get("/assets", async(_request: Request, response: Response) => {
  let outputResponse: IAssets | undefined = await metricsService.getAssets();

  try {
    outputResponse = await metricsService.getAssets();
  } catch (error) {
    if (axios.isAxiosError(error))  {
      response.status(404).json({ message: error.message });
    }
  }

  response.status(200).json(outputResponse);
});

metricsController.get("/assets/:slug", async(request: Request, response: Response) => {
  let outputResponse: IAssets | undefined;

  try {
    outputResponse = await metricsService.getAssetsBySlug(request.params.slug);
  } catch (error) {
    if (axios.isAxiosError(error))  {
      response.status(404).json({ message: error.message });
    }
  }

  response.status(200).json(outputResponse);
});
