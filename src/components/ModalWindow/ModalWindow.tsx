import ModalInput from "../ModalInput/ModalInput";
import ModalToken from "../ModalToken/ModalToken";
import tokens from "../../assets/tokens.json";
import Ripples from "react-ripples";
import { useState } from "react";
import arrow from "../../images/svg/arrow.svg";

const ModalWindow = () => {
  const [filter, setFilter] = useState("");

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(filter.toLowerCase()) ||
      token.symbol.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-[360px] h-[544px] border border-secondary-color bg-primary-color rounded-xl flex flex-col">
      <div className="flex flex-row justify-between h-14 p-4 border-b border-secondary-color items-center after:content-[''] after:block after:w-8">
        <Ripples
          during={1500}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="rounded-full"
        >
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-secondary-color/50 flex justify-center items-center transition-all hover:scale-110"
          >
            <img src={arrow} alt="" />
          </button>
        </Ripples>
        <h3 className="text-center">Select a token</h3>
      </div>

      <ModalInput filter={filter} setFilter={setFilter} />

      <div className="px-4 pb-0 overflow-x-hidden">
        {filteredTokens.length > 0 ? (
          <div className="flex flex-col">
            {filteredTokens.map((element) => (
              <ModalToken key={element.id} tokenData={element} />
            ))}
          </div>
        ) : (
          <div className="text-center">Not found</div>
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
