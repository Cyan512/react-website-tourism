import { Search } from "lucide-react";

const SearchBar = ({ inputValue, setInputValue, onSearch, placeholder }) => {
    return (
        <div className="relative flex items-center w-full max-w-sm">
            <input
                type="text"
                placeholder={`${placeholder}...`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full py-4 pl-8 pr-16 bg-primary/10 text-gray-600 placeholder-gray-500 rounded-full outline-none"
            />

            <button
                onClick={onSearch}
                className="absolute right-2 p-3 bg-primary hover:bg-title text-white rounded-full transition-colors shadow-sm cursor-pointer"
            >
                <Search size={22} strokeWidth={2.5} />
            </button>
        </div>
    );
};

export default SearchBar;
