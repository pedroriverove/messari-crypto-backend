import Proxy from "../utils/proxy";
import { BASE_URI_V1, BASE_URI_V2 } from "../utils/config";
import { IAssets } from "../types";

class MetricsService extends Proxy {
  constructor() {
    super();
  }

  public async getAssets(): Promise<IAssets> {
    const rawResponse = await super.get(
      `${BASE_URI_V2}/assets`
    );

    return rawResponse.data;
  }

  public async getAssetsBySlug(slug: string): Promise<IAssets> {
    const rawResponse = await super.get(
      `${BASE_URI_V1}/assets/${slug}/metrics`
    );

    return rawResponse.data;
  }
}

export default MetricsService;
