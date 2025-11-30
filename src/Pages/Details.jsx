import { useState } from "react"
import { useLoaderData } from "react-router"
import { toast } from "react-toastify"
import ConsultantForm from "../Components/ConsultantForm"

export default function PlantsDetails() {
    const data = useLoaderData()
    const e = data[0]
    const [stock, setStock] = useState(e.availableStock)
    const handleBuy = () => {
        if (stock > 0) {
            setStock(stock - 1)
            toast.success(`Successfully purchased ${e.plantName}`)
        } else toast.warn(`Sorry! ${e.plantName} is stock out`)
    }
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 place-content-center w-11/12 mx-auto my-8">
            <img src={e.image} loading="eager" className="w-full h-auto rounded-xl" alt={e.plantName} />
            <section className="flex flex-col justify-center gap-3">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
                    <h1 className="text-4xl text-emerald-950 font-bold">{e.plantName}</h1>
                    <p className="text-sm">Provider: {e.providerName}</p>
                </div>
                <p className="font-semibold text-gray-800">Category: {e.category}</p>
                <div className="flex flex-wrap items-center font-medium justify-between gap-4">
                    <div className="flex gap-1 items-center">
                        {Array.from({ length: Math.floor(e.rating) }, (_, i) => <span key={i}>⭐</span>)}
                        <p>{e.rating}</p>
                    </div>
                    <p>Difficulty level: {e.careLevel}</p>
                </div>
                <article className="text-gray-700 my-2 font-medium text-sm">{e.description}</article>
                <div className="flex flex-col sm:flex-row font-semibold text-lg justify-between gap-2">
                    <p>In stock: {stock}</p>
                    <p>Price: ${e.price}</p>
                </div>
                <div className="space-x-3 font-medium">
                    <button className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-950 cursor-pointer">Add to Cart</button>
                    <button onClick={() => handleBuy()} className="px-4 py-2 rounded-md bg-emerald-900 text-white hover:bg-emerald-950 cursor-pointer">Buy Now</button>
                </div>
            </section>
            <ConsultantForm />
        </main>
    )
}