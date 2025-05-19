export const API_KEY: string = import.meta.env.VITE_TWELVEDATA_API_KEY;
export const TIME_ZONE="Europe/Moscow"
export const OUTPUT_SIZE="200"


export const SYMBOLS: string[] = ["AAPL", "GOOGL", "AMZN", "MSFT", "TSLA"];
export const INTERVALS = ["1min", "5min", "15min", "1h", "1day"];
export const INTERVALS_MS:Record<string, number> = {
  "1min": 1, "5min": 5, "15min": 15, "1h": 60, "1day": 24 * 60,
};

