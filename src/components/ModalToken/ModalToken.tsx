import Ripples from "react-ripples";
import SmallIcons from "../SmallIcons/SmallIcons";
import { ITokenProps } from "../../types/props";

const ModalToken: React.FC<ITokenProps> = ({ tokenData }) => {
  const formatToMinTwoDecimals = (number: number) => {
    const [integerPart, decimalPart = ""] = number.toString().split(".");

    if (decimalPart.length >= 2) {
      return number.toString();
    }
    return `${integerPart}.${decimalPart.padEnd(2, "0")}`;
  };

  return (
    <Ripples
      during={1600}
      placeholder={undefined}
      onPointerEnterCapture={() => {}} // Temporary bug fix
      onPointerLeaveCapture={() => {}} // Temporary bug fix
      className="mb-2 rounded-lg"
    >
      <button className="h-16 w-[328px] bg-token-color flex justify-between items-center px-4 py-2">
        <div>
          <img
            className="max-w-12 h-12 rounded-full"
            src={tokenData.icon}
            alt={tokenData.name}
          />
          <SmallIcons icons={tokenData.smallIcons} />
        </div>

        <div className="w-full h-12 flex flex-row justify-between">
          <div className="truncate h-full w-32 ml-2 flex flex-col items-start justify-between">
            <p>{tokenData.name}</p>
            <span className="bg-symbol-color rounded-md font-normal text-font-color text-[10px] py-0.5 px-2">
              {tokenData.symbol.toUpperCase()}
            </span>
          </div>

          <div className="h-full flex flex-col justify-between items-end">
            <h3>${formatToMinTwoDecimals(tokenData.price)}</h3>
            <div
              className="rounded-md font-normal text-font-color text-[10px] py-0.5 px-2"
              style={{
                background: `var(${
                  Number(tokenData.percent) > 0
                    ? "--color-positive"
                    : "--color-negative"
                })`,
                color: `var(${
                  Number(tokenData.percent) > 0
                    ? "--font-positive"
                    : "--font-negative"
                })`,
              }}
            >
              {tokenData.percent}%
            </div>
          </div>
        </div>
      </button>
    </Ripples>
  );
};

export default ModalToken;
