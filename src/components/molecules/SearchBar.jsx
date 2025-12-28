import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ inputValue, setInputValue, onSearch, placeholder }) => {
    return (
        <div className="relative flex items-center w-full max-w-md">
            {/* Input controlado */}
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full py-4 pl-8 pr-16 bg-[#ebf7f9] text-gray-600 placeholder-gray-500 rounded-full outline-none focus:ring-2 focus:ring-cyan-200 transition-all"
            />

            {/* Botón de búsqueda */}
            <button
                onClick={onSearch}
                className="absolute right-2 p-3 bg-[#22a6c6] hover:bg-[#1a8ba7] text-white rounded-full transition-colors shadow-sm"
                aria-label="Submit search"
            >
                <Search size={22} strokeWidth={2.5} />
            </button>
        </div>
    );
};

export default SearchBar;
