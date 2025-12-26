import { MapPin, Clock, ChevronDown } from "lucide-react";
import { assets } from "@/assets/img/index.js";
import ContainerLayout from "@/components/templates/layout/container-layout.jsx";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-100 text-black">
            <div className="bg-white border-b border-gray-300 px-4 py-2 text-xs">
                <ContainerLayout className=" flex justify-between items-center">
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
            <nav className="bg-white px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="" className="py-2">
                        <img src={assets.logo} alt="" className="h-14 w-auto" />
                    </a>
                    <ul className="flex items-center gap-8">
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/about">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="/destination">Destinos</a>
                        </li>
                        <li className="">
                            <a href="/contact">Contactanos</a>
                        </li>
                    </ul>
                    <div>
                        <button>Book Now</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
