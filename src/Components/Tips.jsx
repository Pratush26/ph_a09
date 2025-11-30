import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link, useLoaderData } from "react-router";

export default function PlantsTips() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const { tips } = useLoaderData()
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty("--progress", 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <section className="relative w-11/12 md:w-5/6 lg:w-3/4 mx-auto my-10">
            <div className="text-center space-y-2">
                <h4 className="text-3xl font-semibold">Plantation Guide</h4>
                <p className="text-sm font-medium text-gray-700">Grow healthy trees with ease! Our concise Plantation Guide offers expert tips and simple steps to ensure your trees thrive. From planting to care, follow our guidelines to cultivate a vibrant, flourishing garden.</p>
            </div>
            <Swiper centeredSlides={true}
                autoplay={{ delay: 5000 }}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper" >
                {tips.plants.map(e => (
                    <SwiperSlide key={e.id}>
                        <div className="flex flex-col gap-1 w-fit mx-auto p-6 sm:shadow-lg/90 my-8 shadow-emerald-950 rounded-sm bg-emerald-800 font-medium text-emerald-50 justify-center text-sm">
                            <p className="font-bold text-center text-white text-base">{e?.name}</p>
                            <p>Sunlight : {e?.sunlight?.hours}</p>
                            <p>Watering : {e?.watering?.frequency}</p>
                            <p>fertilizing : {e?.fertilizing?.frequency}</p>
                            <Link to={`/care/${e.id}`} className="text-center hover:underline">View more</Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <h6 className="text-2xl text-center font-semibold my-4">General Tips</h6>
            <dl className="w-full text-start">
                {Object.keys(tips.generalTips).map((tip, i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <dt className="font-bold capitalize text-gray-700">• {tip}</dt>
                        {tips.generalTips[tip].map((t, id) => (
                            <dd key={id} className="text-gray-600 text-sm font-medium ml-4">
                                {t}
                            </dd>
                        ))}
                    </div>
                ))}
            </dl>
        </section>
    );
}