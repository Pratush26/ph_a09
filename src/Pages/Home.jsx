import { Link, useLoaderData, useNavigation } from "react-router"
import Slider from "../Components/Slider"
import PlantsTips from "../Components/Tips"
import { FaArrowRight } from "react-icons/fa"

export default function HomePage() {
    const { topRatedPlants, experts, inStockPlants } = useLoaderData()
    const { state } = useNavigation();
    return (
        <main>
            <section className="grid grid-cols-1 md:grid-cols-2 pt-10 md:pt-0 items-center-safe md:items-end-safe justify-items-center-safe md:justify-items-end-safe bg-stone-300 md:gap-2">
                <div className="flex flex-col h-full items-center justify-center text-center gap-4 w-5/6 my-2">
                    <h1 className={`text-4xl font-bold text-emerald-950 ${state === "idle" && "animate-[strggr_0.7s_ease-in-out]"}`}>Plant trees, Breathe easy</h1>
                    <p className={`text-gray-700 ${state === "idle" && "animate-[strggr_1s_ease-in-out]"}`}>Transform your home and surroundings with stunning trees and healthy indoor plants.</p>
                    <p className={`text-gray-800 font-medium ${state === "idle" && "animate-[strggr_1.3s_ease-in-out]"}`}>At Green Nest, find premium trees, expert care guides, and personalized consultations to create a greener, healthier living space.</p>
                    <Link to='/plants' className={`bg-emerald-700 text-gray-100 font-semibold w-fit mx-auto px-4 py-2 rounded-full m-2 cursor-pointer hover:bg-emerald-800 transition-colors duration-100 transition-discrete ${state === "idle" && "animate-[strggr_1.6s_ease-in-out]"}`}>Shop now</Link>
                </div>
                <img src="https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg" loading="eager" className="w-full h-auto mix-blend-darken" alt="banner" />
            </section>
            <section className="text-center bg-emerald-900 text-white py-14 space-y-3" >
                <h2 className="text-4xl font-semibold" >Top Rated Trees</h2>
                <p className="font-medium text-sm text-gray-300 w-5/6 mb-6 mx-auto">Check out our popular trees collection and handpicked selection of top-rated trees, loved by customers for their beauty, quality, and resilience. From vibrant evergreens to stunning flowering varieties, this collection showcases the most popular trees that elevate any landscape.</p>
                <article className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-4 w-3/4 mx-auto" >
                    {
                        topRatedPlants.map(e => (
                            <div key={e.plantId} className="bg-emerald-800 shadow-lg/50 shadow-emerald-950 rounded-2xl space-y-2" >
                                <div className="w-full rounded-2xl bg-gray-300 aspect-square overflow-hidden">
                                    <img src={e.image} loading="lazy" alt={e.plantName} className="object-cover h-full w-full" />
                                </div>
                                <span className="flex justify-between px-3 gap-3">
                                    <p>{e.plantName}</p>
                                    <p>{e.rating}</p>
                                </span>
                                <span className="flex justify-between px-3 mb-2 gap-3">
                                    <p>Price : ${e.price}</p>
                                    <Link to={`/details/${e.plantId}`} className="italic flex items-center gap-1 text-sm underline-offset-2 hover:underline-offset-4 underline">See details <FaArrowRight /></Link>
                                </span>
                            </div>
                        ))
                    }
                </article>
            </section>
            <Slider />
            <section className="text-center my-30 space-y-5" >
                <h3 className="text-3xl font-semibold px-3" >Want to start gardening?</h3>
                <p className="font-medium text-sm text-gray-700 w-5/6 mx-auto">Explore our latest collection of fresh, high-quality trees now in stock! From unique varieties to timeless favorites, our new arrivals offer something for every garden enthusiast. Check out our vibrant selection and find the perfect tree to inspire your next gardening adventure!</p>
                <article className="grid grid-cols-1 md:grid-cols-3 place-content-center text-white gap-4 w-3/4 mx-auto" >
                    {
                        inStockPlants.map(e => (
                            <div key={e.plantId} className="bg-emerald-900 shadow-lg/50 shadow-emerald-950 space-y-2 rounded-2xl" >
                                <div className="w-full rounded-2xl bg-gray-300 aspect-square overflow-hidden">
                                    <img src={e.image} loading="lazy" alt={e.plantName} className="object-cover h-full w-full" />
                                </div>
                                <span className="flex justify-between px-3 gap-3">
                                    <p>{e.plantName}</p>
                                    <p>{e.rating}</p>
                                </span>
                                <span className="flex justify-between px-3 mb-2 gap-3">
                                    <p>Price : ${e.price}</p>
                                    <Link to={`/details/${e.plantId}`} className="italic flex items-center gap-1 text-sm underline-offset-2 hover:underline-offset-4 underline">See details <FaArrowRight /></Link>
                                </span>
                            </div>
                        ))
                    }
                </article>
            </section>
            <PlantsTips />
            <section className="text-center flex flex-col items-center justify-center gap-4 w-5/6 mx-auto my-18" >
                <div className="flex flex-col items-center justify-center gap-4">
                    <h3 className="text-3xl font-semibold" >Meet with our tree experts</h3>
                    <p className="font-medium text-sm text-gray-700 mb-6">Connect with our experienced and renowned panel of tree experts, dedicated to helping you grow and maintain a thriving garden. With years of expertise, our team offers personalized advice and insights to ensure your trees flourish. Whether you're a beginner or a seasoned gardener, schedule a consultation today and let our experts guide you to success!</p>
                </div>
                <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-content-center text-white gap-4 w-11/12 mx-auto" >
                    {
                        experts.map(e => (
                            <div key={e.expertId} className="bg-emerald-800 shadow-lg/50 shadow-emerald-950 rounded-2xl" >
                                <div className="w-full rounded-t-2xl bg-gray-300 aspect-square overflow-hidden">
                                    <img src={e.image} loading="lazy" alt={e.expertName} className="object-cover object-top h-full w-full" />
                                </div>
                                <div className="flex flex-col gap-1 items-start text-start px-3 text-wrap py-2 font-medium">
                                    <p>{e.expertName}</p>
                                    <p className="text-xs text-gray-300 mb-2">{e.specialization}</p>
                                    <p className="text-sm font-extralight text-gray-100">{e.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </aside>
            </section>
        </main>
    )
}