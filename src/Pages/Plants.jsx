import { FaArrowRight } from "react-icons/fa"
import { Link, useLoaderData } from "react-router"

export default function PlantsPage() {
    const data = useLoaderData()
    return (
        <main className="w-11/12 mx-auto my-6">
            <div className="flex items-center justify-between font-semibold gap-4 my-8">
                <h1 className="text-lg sm:text-2xl">All trees collection</h1>
                <h3 className="text-base sm:text-xl text-end">Available types in Stock ( {data.length} )</h3>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center gap-6 text-white">
                {
                    data.map(e => (
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
            </section>
        </main>
    )
}