import { useEffect, useState } from "react";
import { IToken } from "../../types/props";
import createSmallIcons from "../../lib/createSmallIcons";
import Ripples from "react-ripples";

const ModalToken: React.FC<IToken> = ({ tokenData }) => {
  const [isPlus, setIsPlus] = useState<boolean>(false);
  const [smallIcons, setSmallIcons] = useState<string[]>([]);
  const MAX_ICONS = 3;

  useEffect(() => {
    const icons = createSmallIcons();
    setSmallIcons(icons);
  }, []);

  useEffect(() => {
    if (tokenData.price_change_percentage_24h > 0) {
      setIsPlus(true);
    }
  }, [tokenData.price_change_percentage_24h]);

  const formatToMinTwoDecimals = (number: number) => {
    const [integerPart, decimalPart = ""] = number.toString().split(".");

    if (decimalPart.length >= 2) {
      return number.toString();
    }
    return `${integerPart}.${decimalPart.padEnd(2, "0")}`;
  };

  return (
    <Ripples
      during={1500}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      className="mb-2 rounded-lg"
    >
      <button className="h-16 w-[328px] bg-token-color flex justify-between items-center px-4 py-2">
        <div>
          <img
            className="max-w-12 h-12 rounded-full"
            src={tokenData.image}
            alt={tokenData.name}
          />

          {smallIcons.length > MAX_ICONS ? (
            <>
              <div className="w-3 h-3 rounded-full bg-symbol-color z-50 relative left-9 bottom-3 mb-[-12px] text-[6px] flex items-center justify-center">
                {smallIcons.length - MAX_ICONS}+
              </div>
              {smallIcons.splice(0, MAX_ICONS).map((element, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full bg-symbol-color relative bottom-3 mb-[-12px]"
                  style={{
                    left: 30 - index * 6,
                    zIndex: 10 - index,
                  }}
                >
                  <img className="rounded-full" src={element} />
                </div>
              ))}
            </>
          ) : (
            smallIcons.map((element, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-symbol-color relative bottom-3 mb-[-12px]"
                style={{
                  left: 36 - index * 6,
                  zIndex: 10 - index,
                }}
              >
                <img className="rounded-full" src={element} />
              </div>
            ))
          )}
        </div>

        <div className="w-full h-12 flex flex-row justify-between">
          <div className="h-full ml-2 flex flex-col items-start justify-between">
            <h3>{tokenData.name}</h3>
            <span className="bg-symbol-color rounded-md font-normal text-font-color text-[10px] py-0.5 px-2">
              {tokenData.symbol.toUpperCase()}
            </span>
          </div>

          <div className="h-full flex flex-col justify-between items-end">
            <h3>${formatToMinTwoDecimals(tokenData.current_price)}</h3>
            <div
              className="rounded-md font-normal text-font-color text-[10px] py-0.5 px-2"
              style={{
                background: `var(${
                  isPlus ? "--color-positive" : "--color-negative"
                })`,
                color: `var(${isPlus ? "--font-positive" : "--font-negative"})`,
              }}
            >
              {isPlus && "+"}
              {tokenData.price_change_percentage_24h.toFixed(2)}%
            </div>
          </div>
        </div>
      </button>
    </Ripples>
  );
};

export default ModalToken;
