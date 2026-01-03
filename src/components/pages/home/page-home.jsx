import { assets } from "@/assets/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { categoryV1 } from "@/data/destinations-mock-1.js";

import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";

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
                <section style={{ backgroundImage: `url(${assets.line_pattern3})` }}>
                    <div>
                        <div>
                            <div>
                                <span>Top Destination</span>
                                <h2>Popular Destinations</h2>
                            </div>

                            <div>
                                <h2>850+ Destinations</h2>
                                <p>
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
                                        <div>
                                            <div>
                                                <img src={assets[cat.img]} alt={cat.title} />
                                            </div>

                                            <div>
                                                <a href={cat.href}>{t(cat.title)}</a>
                                                <span>See Morse</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </>
                        </Swiper>
                    </div>
                </section>
            </main>
        </>
    );
}
