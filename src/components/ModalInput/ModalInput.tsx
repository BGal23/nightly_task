import { IInput } from "../../types/props";
import search from "../../images/svg/search.svg";

const ModalInput: React.FC<IInput> = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-row">
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Search"
        className="m-4 w-full h-10 bg-input-color border border-secondary-color rounded-lg p-2 font-normal"
      />
      <img className="relative ml-[-16px] right-6" src={search} alt="" />
    </div>
  );
};

export default ModalInput;
