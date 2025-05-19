import useControl from "./useControl.ts";
import Table from "./components/Table.tsx";


function StockList() {

  const { search, filter, onFilter, onSearch, filtered } = useControl();

  return <div className="p-6">
    <h2 className="text-xl font-bold mb-4">📊 Таблица акций</h2>

    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Поиск по символу..."
        value={search}
        onChange={e => onSearch(e.target.value)}
        className="border px-3 py-1 rounded"
      />
      <select
        value={filter}
        onChange={e => onFilter(e.target.value as any)}
        className="border px-3 py-1 rounded"
      >
        <option value="all">Все</option>
        <option value="up">Только растущие</option>
        <option value="down">Только падающие</option>
      </select>
    </div>


    <Table filtered={filtered} />
  </div>;

};

export default StockList;