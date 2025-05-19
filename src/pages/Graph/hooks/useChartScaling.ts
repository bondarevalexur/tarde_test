import { useEffect, useState } from "react";
import { IKlineData } from "../interface.ts";

export const useChartScaling = (
  data: IKlineData[],
  containerHeight: number | undefined,
  pixelsPerPoint: number,
): [number, number] => {
  const [domain, setDomain] = useState<[number, number]>([0, 0]);


  useEffect(() => {
    if (!containerHeight && containerHeight !== 0) return;

    const allPrices = data.flatMap(d => [d.high, d.low]);
    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);
    const priceRange = maxPrice - minPrice;

    const height = containerHeight - 140;
    const requiredPixels = priceRange * pixelsPerPoint;
    const scaleFactor = height / requiredPixels;

    const padding = (height / (scaleFactor * pixelsPerPoint) - priceRange) / 2;

    setDomain([minPrice - padding, maxPrice + padding]);

  }, [data, containerHeight, pixelsPerPoint]);

  return domain;
};