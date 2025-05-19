interface ChartHeaderProps {
  value: number;
  onChange: (val: number) => void;
  symbol: string;
  interval: string;
  onSymbolChange: (val: string) => void;
  onIntervalChange: (val: string) => void;
  symbolOptions: string[];
  intervalOptions: string[];
}

function ChartHeader(props: ChartHeaderProps) {
  const {
    value, onChange,
    symbol, interval,
    onSymbolChange, onIntervalChange,
    symbolOptions, intervalOptions,
  } = props;


  return (
    <header className="fixed -top-0 bg-white z-2 p-3 flex flex-col gap-2">
      <h2 className="text-xl font-bold">Candlestick Chart</h2>

      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Zoom: {value.toFixed(1)}</label>
          <input
            type="range"
            min="0.1"
            max="40"
            step="0.1"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-64"
          />
        </div>

        <label>
          Symbol:
          <select
            className="ml-2 border rounded p-1"
            value={symbol}
            onChange={(e) => onSymbolChange(e.target.value)}
          >
            {symbolOptions.map(sym => (
              <option key={sym} value={sym}>{sym}</option>
            ))}
          </select>
        </label>

        <label>
          Interval:
          <select
            className="ml-2 border rounded p-1"
            value={interval}
            onChange={(e) => onIntervalChange(e.target.value)}
          >
            {intervalOptions.map(iv => (
              <option key={iv} value={iv}>{iv}</option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
};

export default ChartHeader;