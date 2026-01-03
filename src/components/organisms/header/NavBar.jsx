import { X, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Destination", path: "/destination", hasSub: true },
    { label: "Service", path: "/service", hasSub: true },
    { label: "Activities", path: "/activities", hasSub: true },
    { label: "Pages", path: "/pages", hasSub: true },
    { label: "Blog", path: "/blog", hasSub: true },
    { label: "Contact Us", path: "/contact" },
];

export default function MobileMenu({ open, onClose }) {
    if (!open) return null;

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

            {/* Drawer */}
            <aside className="fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-xl animate-slideIn">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div>
                        <h2 className="text-xl font-bold">Tourm</h2>
                        <p className="text-xs text-gray-500">Explore World</p>
                    </div>
                    <button onClick={onClose}>
                        <X className="text-gray-600" />
                    </button>
                </div>

                {/* Menu */}
                <ul className="flex flex-col">
                    {menuItems.map((item) => (
                        <li
                            key={item.label}
                            className="flex items-center justify-between px-6 py-4 border-b"
                        >
                            <NavLink
                                to={item.path}
                                onClick={onClose}
                                className="text-gray-800 font-medium"
                            >
                                {item.label}
                            </NavLink>

                            {item.hasSub && <Plus size={18} className="text-primary" />}
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}
