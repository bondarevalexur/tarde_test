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
    <header className="absolute top-0 w-full left-0 z-50 shadow-md p-4">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">📊 График </h2>

        <div className="flex flex-wrap items-center gap-4">
          {/* Zoom Range */}
          <div>
            <label className="label">
              <span className="label-text">Zoom: {value.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0.1"
              max="40"
              step="0.1"
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="range range-primary w-64"
            />
          </div>

          {/* Symbol Selector */}
          <div className="form-control w-40">
            <label className="label">
              <span className="label-text">Symbol</span>
            </label>
            <select
              className="select select-bordered"
              value={symbol}
              onChange={(e) => onSymbolChange(e.target.value)}
            >
              {symbolOptions.map(sym => (
                <option key={sym} value={sym}>{sym}</option>
              ))}
            </select>
          </div>

          {/* Interval Selector */}
          <div className="form-control w-40">
            <label className="label">
              <span className="label-text">Interval</span>
            </label>
            <select
              className="select select-bordered"
              value={interval}
              onChange={(e) => onIntervalChange(e.target.value)}
            >
              {intervalOptions.map(iv => (
                <option key={iv} value={iv}>{iv}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ChartHeader;