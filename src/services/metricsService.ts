import Proxy from "../utils/proxy";
import { BASE_URI } from "../utils/config";
import { IAssets } from "../types";

class MetricsService extends Proxy {
  constructor() {
    super();
  }

  public async getCoinMetrics(): Promise<IAssets> {
    const rawResponse = await super.get(
      `${BASE_URI}/assets?fields=id,serial_id,symbol,name,slug,metrics/market_data/price_usd`
    );

    return rawResponse.data;
  }
}

export default MetricsService;
