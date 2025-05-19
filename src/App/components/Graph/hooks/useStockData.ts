import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, INTERVALS_MS, OUTPUT_SIZE, TIME_ZONE } from "../constants.ts";

interface Stock {
  symbol: string;
  open: string;
  close: string;

  [key: string]: any;
}

export const useStockData = (
  symbol: string,
  interval: string,
) => {
  const [stock, setStock] = useState<Stock | null>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get<any, any>(
        `https://api.twelvedata.com/time_series?interval=${interval}&symbol=${symbol}&apikey=${API_KEY}&outputsize=${OUTPUT_SIZE}&&timezone=${TIME_ZONE}`,
      );

      const data = res.data;
      if (data && data.status === "ok") {
        setStock(data);
      }
    } catch (err) {
      console.error("Ошибка загрузки данных:", err);
    }
  };

  useEffect(() => {
    if (symbol && interval) {
      fetchData();
    }
  }, [symbol, interval]);


  useEffect(() => {
    const msTime = 60 * 1000 * INTERVALS_MS[interval];

    const msTimeInterval = setInterval(() => {
      fetchData();
    }, msTime);

    return () => {
      clearInterval(msTimeInterval);
    };
  }, []);

  return stock;
};