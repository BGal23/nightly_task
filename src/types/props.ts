export interface IToken {
  tokenData: {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number | null;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    total_supply: number | null;
    max_supply: number | null;
    ath: number;
    ath_change_percentage: number;
    roi: ROI | null;
    last_updated: string;
  };
}

export interface IInput {
  filter: string;
  setFilter: (filter: string) => void;
}

export interface ROI {
  times: number;
  currency: string;
  percentage: number;
}
