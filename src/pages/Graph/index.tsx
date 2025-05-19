import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";


import ChartHeader from "./components/ChartHeader";
import ChartContainer from "./components/ChartContainer";

import { useStockData } from "./hooks/useStockData";
import { useChartScaling } from "./hooks/useChartScaling";

import useStateStore from "./store";

import {  INTERVALS } from "./constants.ts";
import { SYMBOLS } from "shared/constants.ts";

import { IKlineData } from "./interface.ts";


const CandlestickChart: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<IKlineData[]>([]);

  const [selectedSymbol, setSelectedSymbol] = useState<string>(SYMBOLS[0]);
  const [selectedInterval, setSelectedInterval] = useState<string>(INTERVALS[0]);

  const pixelsPerPoint = useStateStore(state => state.pixelsPerPoint);
  const updatePixels = useStateStore(state => state.updatePixels);

  const rawStock = useStockData(selectedSymbol, selectedInterval);

  useEffect(() => {
    if (rawStock?.values) {
      const klines: IKlineData[] = rawStock.values.map((kline: any) => ({
        time: format(kline.datetime, "dd.MM.yyyy HH:mm"),
        open: parseFloat(kline.open),
        close: parseFloat(kline.close),
        high: parseFloat(kline.high),
        low: parseFloat(kline.low),
      })).reverse(); // Обычно API возвращает данные от новых к старым

      console.log(rawStock?.values?.at(-1));
      setData(klines);
    }
  }, [rawStock]);

  const chartWidth = data.length * 20;
  const containerHeight = containerRef.current?.clientHeight;
  const yDomain = useChartScaling(data, containerHeight, pixelsPerPoint);

  return (
    <div className="relative pt-30w-full min-h-[50vh]">
      <ChartHeader
        value={pixelsPerPoint}
        onChange={updatePixels}
        symbol={selectedSymbol}
        interval={selectedInterval}
        onSymbolChange={setSelectedSymbol}
        onIntervalChange={setSelectedInterval}
        symbolOptions={SYMBOLS}
        intervalOptions={INTERVALS}
      />
      <ChartContainer
        data={data}
        yDomain={yDomain}
        chartWidth={chartWidth}
        pixelsPerPoint={pixelsPerPoint}
        containerRef={containerRef}
      />
    </div>
  );
};

export default CandlestickChart;