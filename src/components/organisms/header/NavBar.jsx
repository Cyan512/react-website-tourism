import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const navigation = [
    {label: "common.home", path: "/"},
    {label: "common.about", path: "/about"},
    {label: "common.destination", path: "/destination"},
    {label: "common.contact", path: "/contact"},
];

export default function NavBar() {
    const {t} = useTranslation("global");

    return (
        <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8">
                {navigation.map(({label, path}) => (
                    <li key={label}>
                        <NavLink
                            to={path}
                            className={({isActive}) =>
                                `transition-colors hover:text-primary ${
                                    isActive
                                        ? "text-primary font-semibold"
                                        : "text-gray-600"
                                }`
                            }
                        >
                            {t(label)}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
