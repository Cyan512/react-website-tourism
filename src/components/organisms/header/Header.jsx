import React, { useState } from "react";

import { MapPin, Clock, X, Menu } from "lucide-react";
import { assets } from "@/assets/img/index.js";
import { navigation } from "@/data/Navigation.js";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { cn } from "@/shared/utils/tailwind-utils.js";

const TravelHeader = () => {
    const { t } = useTranslation("global");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="relative z-100">
            <button onClick={handleToggleMenu}>{isMobileMenuOpen ? <X /> : <Menu />}</button>
            <nav
                className={cn(
                    "fixed top-0 left-0 h-[100dvh] w-72 bg-white shadow-lg border-r-2 border-title md:hidden transition-transform",
                    isMobileMenuOpen
                        ? "translate-x-0 overflow-visible"
                        : "-translate-x-full overflow-hidden"
                )}
            >
                <figure className="relative flex justify-center bg-primary/10">
                    <img src={assets.logo} className="w-48 pt-10 pb-7" />
                    <button
                        onClick={handleToggleMenu}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-title text-white p-2 rounded-full"
                    >
                        <X size={18} />
                    </button>
                </figure>
                {navigation.map((nav) => (
                    <div key={nav.label}>
                        <div>
                            <NavLink
                                to={nav.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    cn("text-base px-6 py-4 flex", isActive ? "" : "")
                                }
                            >
                                {t(nav.label)}
                            </NavLink>
                        </div>
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default TravelHeader;
