import { Search } from "lucide-react";

const SearchInput = ({ Inputplaceholder, searchValue, onChangeHandler }) => {
  return (
    <div className="flex gap-4 items-center w-[40%] rounded px-3 py-2 bg-(--bg-surface) border border-(--border-color)">
      <Search size={23} className="cursor-pointer" />

      <input
        className="outline-0 w-full"
        type="text"
        placeholder={Inputplaceholder}
        value={searchValue}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
