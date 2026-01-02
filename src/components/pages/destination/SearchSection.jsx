import ContainerLayout from "@/components/templates/layout/container-layout.jsx";
import SearchBar from "@/components/molecules/SearchBar.jsx";
import React from "react";
import { useTranslation } from "react-i18next";

export default function SearchSection({ categories }) {
    const { t } = useTranslation("global");
    return (
        <section>
            <ContainerLayout className="flex justify-between">
                <SearchBar />
                <div>
                    <select id="category-select" className="w-full px-3 py-2 outline-none">
                        <option>{t("common.all")}</option>
                        {categories.map((cat) => (
                            <option key={cat.key} value={cat.key}>
                                {cat.label}
                            </option>
                        ))}
                    </select>
                </div>
            </ContainerLayout>
        </section>
    );
}
