// import { useEffect, useState } from "react";
import ModalInput from "../ModalInput/ModalInput";
import ModalToken from "../ModalToken/ModalToken";
// import fetchTokenList from "../../api/fetchTokenList";
import tokens from "../ModalToken/tokens.json";

const ModalWindow = () => {
  // const [tokenList, setTokenList] = useState([]);

  // useEffect(() => {
  //   const getTokenList = async () => {
  //     try {
  //       const data = await fetchTokenList();
  //       setTokenList(data);

  //       console.log(tokenList);
  //     } catch (error) {
  //       console.error("Error fetching token list:", error);
  //     }
  //   };

  //   getTokenList();
  // }, []);

  return (
    <div className="w-[360px] h-[544px] border border-secondary-color bg-primary-color rounded-xl flex flex-col">
      <div className="flex flex-row justify-between h-14 p-4 border-b border-secondary-color items-center after:content-[''] after:block after:w-8">
        <button
          type="button"
          className="w-8 h-8 rounded-full bg-secondary-color/50"
        ></button>
        <h3 className="text-center">Select a token</h3>
      </div>

      <ModalInput />

      <div className="px-4 pb-0">
        {tokens.map((element) => (
          <ModalToken key={element.id} tokenData={element} />
        ))}
      </div>
    </div>
  );
};

export default ModalWindow;
