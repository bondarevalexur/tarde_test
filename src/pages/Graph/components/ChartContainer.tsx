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

  return (
    <div
      ref={containerRef}
      className="w-full scrollbar-thin scrollbar-thumb-blue-300 overflow-x-scroll scrollbar-track-gray-100 mt-[140px]"
      style={{ height: `${(yDomain[1] - yDomain[0]) * pixelsPerPoint * 20}px` }}
    >
      <ResponsiveContainer width={chartWidth} height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 20 }}>
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