
/**
 * Тип описания акции, полученной из API
 */
export type StockType = {
  symbol: string;
  open: string;
  close: string;
  change: string;
  percent_change: string;
};