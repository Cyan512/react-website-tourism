import React from "react";
import { Clock, Star, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { assets } from "@/assets/img/index.js";

const DestinationCard = ({ destination }) => {
    const { t } = useTranslation("global");
    return (
        <div className="max-w-[320px] bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
            {/* Imagen del Destino */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={assets[destination.img]}
                    alt="Marina Bay Sands Singapore"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Contenido */}
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {t(destination.title)}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                    <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                        ))}
                    </div>
                    <span className="ml-2 text-gray-600 font-medium">(4.8 Rating)</span>
                </div>

                {/* Precio */}
                <div className="flex items-baseline mb-8">
                    <span className="text-3xl font-bold text-gray-900">$980.00</span>
                    <span className="text-gray-400 ml-1">/Person</span>
                </div>

                {/* Footer del Card */}
                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-cyan-700 font-medium">
                        <Clock size={20} />
                        <span>7 Days</span>
                    </div>

                    <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full text-cyan-800 font-semibold hover:bg-cyan-50 transition-colors">
                        Book Now
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DestinationCard;
