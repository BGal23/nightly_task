import { IInput } from "../../types/props";

const ModalInput: React.FC<IInput> = ({ filter, setFilter }) => {
  return (
    <input
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
      placeholder="Search"
      className="m-4 h-10 bg-input-color border border-secondary-color rounded-lg p-2 font-normal"
    />
  );
};

export default ModalInput;
