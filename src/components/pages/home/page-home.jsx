import {assets} from "@/assets/img";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import {destinationsMock} from "@/data/destinations.mock.js"

import "swiper/css";
import "swiper/css/navigation";

export default function PageHome() {
    const loopCategories = [...destinationsMock, ...destinationsMock];
    return (
        <>
            <section style={{backgroundImage: `url(${assets.hero_bg_1_1})`}}>
                <div/>
                <div>
                    <div>
                        <div>
                            <span>Get unforgetable pleasure with us</span>
                            <h1>Natural Wonder of the world</h1>
                            <div>
                                <a href="">
                                    <span></span>
                                    <span>
                                        Explore Tours
                                    </span>
                                </a>
                                <a href="">
                                    <span></span>
                                    <span>
                                        Our Services
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div/>
                    </div>
                </div>
            </section>
            <main>
                <section style={{backgroundImage: `url(${assets.line_pattern3})`}}>
                    <div>
                        <div>
                            <div>
                                <span>Top Destination</span>
                                <h2>Popular Destination</h2>
                            </div>
                            <div>
                                <h2>850+ Destinations</h2>
                                <p>One of the most well-liked travel companies for people looking to
                                    experience adventure and see the world is Tourm.</p>
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
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {loopCategories.map((cat, index) => (
                                <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full h-64">
                                            <img
                                                src={cat.img}
                                                alt={cat.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="pt-4 flex flex-col items-center w-full bg-theme/20">
                                            <a
                                                href={cat.href}
                                                className="text-2xl font-semibold hover:text-[#1EB3D7] transition-colors"
                                            >
                                                {cat.title}
                                            </a>
                                            <span className="text-sm mt-1">See More</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </main>
        </>
    )
}
