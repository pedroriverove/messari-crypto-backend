export interface IAssets {
  id: string;
  serial_id: number;
  symbol: string;
  name: string;
  slug: string;
  metrics: {
    market_data: {
      price_usd: number;
    }
  }
}
