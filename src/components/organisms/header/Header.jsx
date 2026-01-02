import { MapPin, Clock, ChevronDown } from "lucide-react";
import { assets } from "@/assets/img/index.js";
import ContainerLayout from "@/components/templates/layout/container-layout.jsx";
import NavBar from "@/components/organisms/header/NavBar.jsx";

const Header = () => {
    return (
        <header className="shadow text-black">
            <div className="border-b border-gray-300 py-2 text-sm">
                <ContainerLayout className="flex justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>45 New Eskaton Road, Austria</span>
                        </div>
                        <div className="h-4 bg-black w-px" />
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>Sun to Friday: 8.00 am - 7.00 pm</span>
                        </div>
                    </div>

                    <div className="flex gap-6 items-cente">
                        <div className="relative">
                            <button className="flex items-center gap-1 border rounded-full px-3 py-1">
                                Language <ChevronDown size={14} />
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <a href="">FAQ</a>
                            <div className="h-4 bg-black w-px" />
                            <a href="">Support</a>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
            <div>
                <ContainerLayout className="flex justify-between items-center">
                    <a href="/" className="py-2">
                        <img src={assets.logo} className="h-14 w-auto" />
                    </a>
                    <NavBar />
                    <div>
                        <button>Book Now</button>
                    </div>
                </ContainerLayout>
            </div>
        </header>
    );
};

export default Header;
