import { assets } from "@/assets/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { destinationsMock } from "@/data/destinations.mock.js";

import "swiper/css";
import "swiper/css/navigation";

export default function PageHome() {
    const loopCategories = Array.isArray(destinationsMock)
        ? [...destinationsMock, ...destinationsMock]
        : [];

    return (
        <>
            <section style={{ backgroundImage: `url(${assets.hero_bg_1_1})` }}>
                <div />
                <div>
                    <div>
                        <div>
                            <span>Get unforgettable pleasure with us</span>
                            <h1>Natural Wonder of the World</h1>

                            <div>
                                <a href="">
                                    <span></span>
                                    <span>Explore Tours</span>
                                </a>

                                <a href="">
                                    <span></span>
                                    <span>Our Services</span>
                                </a>
                            </div>
                        </div>
                        <div />
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
                                                <img src={cat.img} alt={cat.title} />
                                            </div>

                                            <div>
                                                <a href={cat.href}>{cat.title}</a>
                                                <span>See More</span>
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
