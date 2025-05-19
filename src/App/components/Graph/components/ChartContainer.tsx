import {
  ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar, Customized, ResponsiveContainer,
} from "recharts";
import Candle from "./Candle";
import CustomTooltip from "./CustomTooltip";

import { IKlineData } from "../interface.ts";

interface ChartContainerProps {
  data: IKlineData[];
  yDomain: [number, number];
  chartWidth: number;
  pixelsPerPoint: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function ChartContainer(props: ChartContainerProps) {

  const {
    data, yDomain, chartWidth, pixelsPerPoint, containerRef,
  } = props;

  console.log(yDomain[1] - yDomain[0]);
  return (
    <div
      ref={containerRef}
      className="w-full scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100"
      style={{ height: `${(yDomain[1] - yDomain[0]) * pixelsPerPoint * 20}px` }}
    >
      <ResponsiveContainer width={chartWidth} height="100%">
        <ComposedChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
          <XAxis dataKey="time" scale="band" type="category" tickFormatter={time => time} />
          <YAxis
            tickCount={(yDomain[1] - yDomain[0]) / 10}
            tickFormatter={(value) => value.toFixed(2)}
            width={90}
            allowDataOverflow
            domain={yDomain}
          />
          <Tooltip content={CustomTooltip} cursor={{ stroke: "#ddd", strokeWidth: 1 }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="high" fill="transparent" isAnimationActive={false} />
          <Bar dataKey="low" fill="transparent" isAnimationActive={false} />
          <Customized component={Candle} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartContainer;