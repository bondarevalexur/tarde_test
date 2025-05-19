import { IStockData } from "../interface.ts";

function TableRow({ open, symbol, close, percent_change }: IStockData) {

  const parseOpen = parseFloat(open);
  const parseClose = parseFloat(close);
  const isUp = parseClose > parseOpen;

  return (
    <tr
      key={symbol}
      className={isUp ? "bg-green-50" : "bg-red-50"}
    >
      <td className="border px-4 py-2 font-bold">{symbol}</td>
      <td className="border px-4 py-2">{parseOpen}</td>
      <td className="border px-4 py-2">{parseClose}</td>
      <td className="border px-4 py-2">{percent_change}%</td>
    </tr>
  );
}

export default TableRow;