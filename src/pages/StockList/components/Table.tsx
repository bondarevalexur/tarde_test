import { IStockData } from "../interface.ts";
import TableRow from "./TableRow.tsx";

function Table({ filtered }: { filtered: Array<IStockData> }) {

  return <table className="w-full table-auto border border-gray-300">
    <thead>
    <tr className="bg-gray-100">
      <th className="border px-4 py-2">Символ</th>
      <th className="border px-4 py-2">Открытие</th>
      <th className="border px-4 py-2">Текущая цена</th>
      <th className="border px-4 py-2">% Изменение</th>
    </tr>
    </thead>
    <tbody>
    {filtered.map(TableRow)}
    </tbody>
  </table>;
}

export default Table;