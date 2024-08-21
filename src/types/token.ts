export interface IToken {
  id: number;
  name: string;
  icon: string;
  symbol: string;
  price: number;
  percent: number | string;
  smallIcons: string[];
}
