import React, { useState } from "react";
import { categoryV1 } from "@/data/destinations-mock-1.js";
import { useTranslation } from "react-i18next";
import SearchBar from "@/components/molecules/SearchBar.jsx";
import ContainerLayout from "@/components/templates/layout/container-layout.jsx";

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
            <ContainerLayout className="flex justify-between">
                <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onSearch={handleSearch}
                    placeholder={t("common.search")}
                />
                <div>
                    <select
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-3 py-2 outline-none"
                    >
                        <option value="all">{t("all")}</option>

                        {categories.map((cat) => (
                            <option key={cat.key} value={cat.key}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>
            </ContainerLayout>
            <ContainerLayout className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-3">
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
                <div className="lg:col-span-1">
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
            </ContainerLayout>
        </div>
    );
}
