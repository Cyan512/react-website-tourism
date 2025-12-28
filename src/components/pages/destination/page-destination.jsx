import React, { useState } from "react";
import { categoryV1 } from "@/data/destinations-mock-1.js";
import { useTranslation } from "react-i18next";
import SearchBar from "@/components/molecules/SearchBar.jsx";
import ContainerLayout from "@/components/templates/layout/container-layout.jsx";
import SectionTitleBanner from "@/components/organisms/SectionTitleBanner.jsx";

export default function PageDestination() {
    const { t } = useTranslation("global");

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [inputValue, setInputValue] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const ITEMS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(1);

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

    // destinos filtrados por búsqueda
    const destinations = filteredByCategory.filter((dest) =>
        t(dest.title).toLowerCase().includes(searchTerm.toLowerCase())
    );

    // lógica de paginación
    const totalPages = Math.ceil(destinations.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedDestinations = destinations.slice(startIndex, endIndex);

    // función para aplicar búsqueda
    const handleSearch = () => {
        setSearchTerm(inputValue);
        setCurrentPage(1);
    };

    return (
        <>
            <SectionTitleBanner title="Destination" />

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
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setCurrentPage(1);
                        }}
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
                        {paginatedDestinations.length > 0 ? (
                            paginatedDestinations.map((dest, index) => (
                                <div key={index} className="p-2 border rounded">
                                    {t(dest.title)}
                                </div>
                            ))
                        ) : (
                            <div>{t("noResults")}</div>
                        )}
                    </div>

                    {/* PAGINACIÓN */}
                    {destinations.length > 0 && (
                        <div className="flex justify-center gap-2 mt-6">
                            <button
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-3 py-1 border rounded disabled:opacity-50"
                            >
                                {t("prev")}
                            </button>

                            {Array.from({ length: totalPages }).map((_, index) => {
                                const page = index + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-1 border rounded ${
                                            currentPage === page ? "bg-blue-500 text-white" : ""
                                        }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}

                            <button
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 border rounded disabled:opacity-50"
                            >
                                {t("next")}
                            </button>
                        </div>
                    )}
                </div>

                <div className="lg:col-span-1">
                    <button
                        onClick={() => {
                            setSelectedCategory("all");
                            setCurrentPage(1);
                        }}
                        className={`px-3 py-1 border rounded ${
                            selectedCategory === "all" ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        {t("all")}
                    </button>

                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => {
                                setSelectedCategory(cat.key);
                                setCurrentPage(1);
                            }}
                            className={`px-3 py-1 border rounded ${
                                selectedCategory === cat.key ? "bg-blue-500 text-white" : ""
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </ContainerLayout>
        </>
    );
}
