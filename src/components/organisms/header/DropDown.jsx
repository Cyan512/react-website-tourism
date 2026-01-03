import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

export default function DropDown() {
    const { t, i18n } = useTranslation("global");

    const changeLanguage = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
    };

    return (
        <div className="relative w-32">
            <select
                value={i18n.language}
                onChange={changeLanguage}
                className="w-full border border-gray-200 rounded-full py-1 px-3 pr-10 outline-none appearance-none cursor-pointer"
            >
                <option value="es">{t("common.es")}</option>
                <option value="en">{t("common.en")}</option>
            </select>

            <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                size={18}
            />
        </div>
    );
}
