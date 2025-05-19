import { Routes, Route, Link } from 'react-router-dom';
import StockList from './pages/StockList';
import Graph from './pages/Graph';

function App() {
  return (
  <div className="p-4">
    <div className="navbar bg-base-200 rounded-box mb-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">TRADE_TEST</a>
      </div>
      <nav className="flex-none">
        <Link to="/" className="btn btn-outline btn-sm mx-1">Главная</Link>
        <Link to="/graph" className="btn btn-outline btn-sm mx-1">График</Link>
      </nav>
    </div>

    <div className="card bg-base-100 shadow-xl p-6">
      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </div>
  </div>
)
  ;
}

export default App;