import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useLoaderData } from "react-router";

export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const { silderImg } = useLoaderData()

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty("--progress", 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <section className="relative w-11/12 md:w-5/6 lg:w-3/4 mx-auto">
            <Swiper centeredSlides={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper" >
                {silderImg.map(src => (
                    <SwiperSlide key={src.ic}>
                        <img src={src} loading="lazy" alt={`${src.name}'s image`} className="w-full aspect-auto md:aspect-video rounded-2xl object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}