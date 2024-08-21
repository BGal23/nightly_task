import { IToken } from "./token";

export interface ITokenProps {
  tokenData: IToken;
}

export interface IInput {
  filter: string;
  setFilter: (filter: string) => void;
}

export interface IIcons {
  icons: string[];
}
