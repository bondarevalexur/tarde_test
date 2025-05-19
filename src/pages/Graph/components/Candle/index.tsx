import useStateStore from "../../store";

import { IKlineData } from "../../interface.ts";

function Candle(props: any) {
  const pixelsPerPoint = useStateStore((state) => state.pixelsPerPoint);

  const { xAxisMap, yAxisMap, data } = props;

  if (!xAxisMap || !yAxisMap || !data?.length) return null;

  const xScale = xAxisMap?.[0]?.scale;
  const yScale = yAxisMap?.[0]?.scale;

  if (typeof xScale !== "function" || typeof yScale !== "function") return null;

  return data.map((entry: IKlineData, index: number) => {
    const x = xScale(entry.time);
    const bandWidth = xScale.bandwidth();

    // Преобразование значений в числа
    const high = Number(entry.high);
    const low = Number(entry.low);
    const open = Number(entry.open);
    const close = Number(entry.close);

    const priceDiff = Math.abs(close - open);
    const bodyHeight = (priceDiff > 1 ? priceDiff : 1) * pixelsPerPoint;

    // Проверка на валидность значений
    if ([high, low, open, close, x].some(isNaN)) return null;

    const highY = yScale(high);
    const lowY = yScale(low);
    const color = close >= open ? "#4CAF50" : "#FF5252";
    const bodyWidth = bandWidth * 0.6;


    return (
      <g key={`candle-${index}`}>
        <line
          x1={x}
          x2={x}
          y1={highY}
          y2={lowY}
          stroke={color}
          strokeWidth={1}
        />
        <rect
          x={x + (-bodyWidth) / 2}
          y={yScale(Math.max(entry.open, entry.close))}
          width={bodyWidth}
          height={bodyHeight}
          fill={color}
        />
      </g>
    );
  });
}

export default Candle;