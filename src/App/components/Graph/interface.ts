export interface IKlineData {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
    turnover?: number
    volume?:number
}