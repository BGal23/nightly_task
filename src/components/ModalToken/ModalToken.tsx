import { IToken } from "../../types/props";

const ModalToken: React.FC<IToken> = ({ tokenData }) => {
  return (
    <div className="h-16 bg-token-color rounded-lg mb-2 flex justify-between items-center px-4 py-2 gap-2">
      <div>
        <img
          className="max-w-12 h-12 rounded-full"
          src={tokenData.image}
          alt={tokenData.name}
        />
      </div>
      <div className="w-full h-12 flex flex-row justify-between">
        <div className="h-full flex flex-col justify-between">
          <h3>{tokenData.name}</h3>
          <div className="bg-symbol-color rounded-md font-normal text-font-color text-[10px] py-0.5 px-2">
            {tokenData.symbol.toUpperCase()}
          </div>
        </div>
        <div className="h-full flex flex-col justify-between">
          <h3>${tokenData.current_price}</h3>
          <div
            className="rounded-md font-normal text-font-color text-[10px] py-0.5 px-2"
            style={{
              background:
                tokenData.price_change_percentage_24h < 0 ? "red" : "green",
            }}
          >
            {tokenData.price_change_percentage_24h}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalToken;
