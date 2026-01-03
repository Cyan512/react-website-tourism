import { assets } from "@/assets/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { categoryV1 } from "@/data/destinations-mock-1.js";

import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import { tours } from "@/data/Tour";
import { ArrowRight, Clock, Star } from "lucide-react";

export default function PageHome() {
    const { t } = useTranslation("global");
    const loopCategories = Array.isArray(categoryV1) ? [...categoryV1, ...categoryV1] : [];

    return (
        <>
            <section
                className="relative min-h-screen bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${assets.hero_bg_1_1})` }}
            >
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                            <div className="text-center lg:text-left">
                                <span className="block text-sm sm:text-base uppercase tracking-widest text-white/80 mb-4">
                                    Get unforgettable pleasure with us
                                </span>

                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                                    Natural Wonder of the World
                                </h1>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a
                                        href=""
                                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition"
                                    >
                                        <span />
                                        <span>Explore Tours</span>
                                    </a>

                                    <a
                                        href=""
                                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white text-white font-medium hover:bg-white hover:text-black transition"
                                    >
                                        <span />
                                        <span>Our Services</span>
                                    </a>
                                </div>
                            </div>

                            <div className="hidden lg:block" />
                        </div>
                    </div>
                </div>
            </section>

            <main>
                <section
                    className="py-20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${assets.line_pattern3})` }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-14">
                            <div>
                                <span className="block text-sm uppercase tracking-widest text-primary mb-2">
                                    Top Destination
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                                    Popular Destinations
                                </h2>
                            </div>

                            <div className="max-w-md">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                    850+ Destinations
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    One of the most well-liked travel companies for people looking
                                    to experience adventure and see the world is Tour.
                                </p>
                            </div>
                        </div>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop
                            spaceBetween={20}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={800}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 },
                            }}
                        >
                            <>
                                {loopCategories.map((cat, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition">
                                            <div className="overflow-hidden">
                                                <img
                                                    src={assets[cat.img]}
                                                    alt={cat.title}
                                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>

                                            <div className="p-5 flex items-center justify-between">
                                                <a
                                                    href={cat.href}
                                                    className="text-lg font-semibold text-gray-900 hover:text-primary transition"
                                                >
                                                    {t(cat.title)}
                                                </a>
                                                <span className="text-sm text-gray-500">
                                                    See Morse
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </>
                        </Swiper>
                    </div>
                </section>
                <section className="py-24 relative overflow-hidden bg-[#F0F9FB]">
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        {/* Encabezado */}
                        <div className="text-center mb-16">
                            <h4 className="font-serif text-[#1EB3D7] text-2xl italic mb-2">
                                Best Place For You
                            </h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#123E46] mb-4">
                                Most Popular Tour
                            </h2>
                            <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        {/* Cuadrícula de Tours */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {tours.map((tour) => (
                                <div
                                    key={tour.id}
                                    className="bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                                >
                                    {/* Imagen del Tour */}
                                    <div className="h-60 overflow-hidden">
                                        <img
                                            src={tour.image}
                                            alt={tour.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Contenido de la Tarjeta */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold text-[#123E46]">
                                            {tour.title}
                                        </h3>

                                        {/* Estrellas y Rating */}
                                        <div className="flex items-center gap-1 text-orange-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="currentColor" />
                                            ))}
                                            <span className="text-gray-400 text-xs ml-1">
                                                ({tour.rating} Rating)
                                            </span>
                                        </div>

                                        {/* Precio */}
                                        <div className="flex items-baseline">
                                            <span className="text-2xl font-black text-[#1EB3D7]">
                                                ${tour.price}
                                            </span>
                                            <span className="text-gray-400 text-sm font-medium">
                                                /Person
                                            </span>
                                        </div>

                                        {/* Footer de la tarjeta: Duración y Botón */}
                                        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                <Clock size={16} className="text-[#1EB3D7]" />
                                                {tour.duration}
                                            </div>
                                            <button className="border border-[#1EB3D7] text-[#123E46] font-bold text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#1EB3D7] hover:text-white transition-all">
                                                Book Now <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
