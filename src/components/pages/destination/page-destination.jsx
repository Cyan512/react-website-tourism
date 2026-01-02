import React, { useState } from "react";
import { categoryV1 } from "@/data/destinations-mock-1.js";
import { useTranslation } from "react-i18next";
import SearchBar from "@/components/molecules/SearchBar.jsx";
import ContainerLayout from "@/components/templates/layout/container-layout.jsx";
import SectionTitleBanner from "@/components/organisms/SectionTitleBanner.jsx";
import DestinationCard from "@/components/molecules/DestinationCard.jsx";
import SearchSection from "@/components/pages/destination/SearchSection.jsx";

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
            <main className="pt-28">
                <SearchSection categories={categories} />
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
                        <div className="grid grid-cols-3 gap-6">
                            {paginatedDestinations.length > 0 ? (
                                paginatedDestinations.map((dest, index) => (
                                    <DestinationCard key={index} destination={dest} />
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
                                    className="px-3 py-1 border rounded-full disabled:opacity-50"
                                >
                                    {t("prev")}
                                </button>

                                {Array.from({ length: totalPages }).map((_, index) => {
                                    const page = index + 1;
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-4 py-2 border border-gray-200 rounded-full ${
                                                currentPage === page
                                                    ? "bg-primary border-none text-white "
                                                    : ""
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}

                                <button
                                    onClick={() =>
                                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                                    }
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 border rounded-full disabled:opacity-50"
                                >
                                    {t("next")}
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        {/*<button
                        onClick={() => {
                            setSelectedCategory("all");
                            setCurrentPage(1);
                        }}
                        className={`px-3 py-1 border rounded ${
                            selectedCategory === "all" ? "bg-blue-500 text-white" : ""
                        }`}
                    >
                        {t("all")}
                    </button>*/}
                        <div className="w-full max-w-[320px] bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-[#004a61] mb-2">
                                    Categories
                                </h3>
                                <div className="w-full h-[2px] bg-gray-100 relative">
                                    <div className="absolute left-0 top-0 h-full w-12 bg-[#22a6c6]"></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.key}
                                        onClick={() => {
                                            setSelectedCategory(cat.key);
                                            setCurrentPage(1);
                                        }}
                                        className={` ${
                                            selectedCategory === cat.key ? "text-primary" : ""
                                        }`}
                                    >
                                        {cat.label}
                                        <span className="text-sm text-gray-400">
                                            {categoryV1.find((c) => c.title === cat.key)
                                                ?.destinationV1.length ?? 0}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </main>
        </>
    );
}
