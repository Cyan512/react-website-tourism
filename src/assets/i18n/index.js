import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esGlobal from "@/assets/i18n/locales/es/global.json";
import enGlobal from "@/assets/i18n/locales/en/global.json";

const resources = {
    es: {
        global: esGlobal,
    },
    en: {
        global: enGlobal,
    },
};

//const savedLanguage = localStorage.getItem("language") || "es";

i18n.use(initReactI18next).init({
    resources,
    lng: "e",
    fallbackLng: "es",
    defaultNS: "global",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
