import { useEffect, useState } from "react";
import axios from "axios";

import { API_KEY, SYMBOLS } from "shared/constants.ts";
import { REFRESH_INTERVAL } from "./constants.ts";

import { IStockData } from "./interface.ts";

function useControl() {
  const [stocks, setStocks] = useState<IStockData[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "up" | "down">("all");

  const fetchData = async () => {
    try {
      const responses = await Promise.all(
        SYMBOLS.map(symbol =>
          axios.get(`https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${API_KEY}`),
        ),
      );

      const cleanData = responses
        .map(res => res.data)
        .filter(stock => stock && stock.symbol && stock.close);

      setStocks(cleanData);
    } catch (error) {
      console.error("Ошибка получения данных:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const filtered = stocks.filter(stock => {
    const symbolMatch = stock.symbol.toLowerCase().includes(search.toLowerCase());
    const open = parseFloat(stock.open);
    const close = parseFloat(stock.close);
    const isUp = close > open;
    const isDown = close < open;

    return (
      symbolMatch &&
      (filter === "all" ||
        (filter === "up" && isUp) ||
        (filter === "down" && isDown))
    );
  });


  return {search,filter, onSearch: setSearch, onFilter: setFilter,filtered };
}

export default useControl;