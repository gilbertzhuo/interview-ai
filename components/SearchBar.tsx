import { LucideSearch } from "lucide-react";

type Props = {
  placeHolder: string;
};

const SearchBar = ({ placeHolder }: Props) => {
  return (
    <div className="flex h-10 items-center w-full">
      <div className="mr-1">
        <LucideSearch className="w-5 h-5 text-gray-500" />
      </div>
      <input
        aria-label={placeHolder}
        type="text"
        placeholder={placeHolder}
        className="w-full border-0 bg-transparent py-1.5 px-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default SearchBar;
