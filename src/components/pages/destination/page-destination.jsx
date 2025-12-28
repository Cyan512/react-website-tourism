import React, { useState } from "react";
import { categoryV1 } from "@/data/destinations-mock-1.js";
import { useTranslation } from "react-i18next";
import SearchBar from "@/components/molecules/SearchBar.jsx";

export default function PageDestination() {
    const { t } = useTranslation("global");

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    // categorías para el filtro
    const categories = categoryV1.map((cat) => ({
        key: cat.title,
        label: t(cat.title),
    }));

    // destinos filtrados por categoría
    const filteredByCategory =
        selectedCategory === "all"
            ? categoryV1.flatMap((cat) => cat.destinationV1)
            : (categoryV1.find((cat) => cat.title === selectedCategory)?.destinationV1 ?? []);

    // destinos filtrados por búsqueda (solo cuando se aplica)
    const destinations = filteredByCategory.filter((dest) =>
        t(dest.title).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // función para aplicar búsqueda
    const handleSearch = () => {
        setSearchTerm(inputValue);
    };

    return (
        <div className="p-4">
            {/* BUSCADOR */}
            <div className="mb-4">
                <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onSearch={handleSearch}
                    placeholder={t("search")}
                />
            </div>

            {/* FILTRO POR CATEGORÍA */}
            <div className="flex gap-3 mb-6 flex-wrap">
                <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-3 py-1 border rounded ${
                        selectedCategory === "all" ? "bg-blue-500 text-white" : ""
                    }`}
                >
                    {t("all")}
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => setSelectedCategory(cat.key)}
                        className={`px-3 py-1 border rounded ${
                            selectedCategory === cat.key ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* DESTINOS */}
            <div className="space-y-2">
                {destinations.length > 0 ? (
                    destinations.map((dest, index) => (
                        <div key={index} className="p-2 border rounded">
                            {t(dest.title)}
                        </div>
                    ))
                ) : (
                    <div>{t("noResults")}</div>
                )}
            </div>
        </div>
    );
}
