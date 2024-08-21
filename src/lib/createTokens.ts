import { uniqueNamesGenerator, colors, animals } from "unique-names-generator";
import tokenImg from "../assets/tokenImg.json";
import { IToken } from "../types/token";

const createTokens = (count: number): IToken[] => {
  const MIN_PERCENT = -89.9;
  const MAX_PERCENT = 57.15;
  const tokensArray: IToken[] = [];

  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, " ");
  };

  const createSmallIcons = (): string[] => {
    const randomIconsNumbers = Math.floor(Math.random() * 10) + 1;
    const iconsArray: string[] = [];

    for (let i = 0; i < randomIconsNumbers; i++) {
      const randomIcon = Math.floor(Math.random() * tokenImg.length);
      const tokenImage = tokenImg[randomIcon];
      iconsArray.push(tokenImage);
    }

    return iconsArray;
  };

  for (let i = 0; i < count; i++) {
    const name = uniqueNamesGenerator({
      dictionaries: [colors, animals],
    });

    const newToken: IToken = {
      id: i,
      name: capitalizeFirstLetter(name),
      icon: tokenImg[Math.floor(Math.random() * tokenImg.length)],
      symbol: uniqueNamesGenerator({
        dictionaries: [colors, animals],
        length: 1,
      })
        .substring(0, 3)
        .toUpperCase(),
      price: Number((Math.random() * 1000000).toFixed(2)),
      percent: (
        Math.random() * (MAX_PERCENT - MIN_PERCENT) +
        MIN_PERCENT
      ).toFixed(2),
      smallIcons: createSmallIcons(),
    };

    tokensArray.push(newToken);
  }

  return tokensArray;
};

export default createTokens;
