import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { Link, useLoaderData } from "react-router"

const categories = [
    { option: "Air Purifier", value: "Air Purifier" },
    { option: "Trailing Plant", value: "Trailing Plant" },
    { option: "Foliage", value: "Foliage" },
    { option: "Low Light", value: "Low Light" },
    { option: "Flowering", value: "Flowering" },
    { option: "Statement Tree", value: "Statement Tree" },
    { option: "Pet-Friendly", value: "Pet-Friendly" },
    { option: "Succulent", value: "Succulent" },
    { option: "Hanging Plant", value: "Hanging Plant" },
    { option: "None", value: "" },
]
export default function PlantsPage() {
    const data = useLoaderData()
    const [dataSet, setDataSet] = useState(data)
    const [searchText, setSearchText] = useState("")
    const [categoryType, setCategoryType] = useState("")

    const handleSearch = (value) => {
        setSearchText(value)
        setDataSet(filterData(value, categoryType))
    }
    const handleCategory = (value) => {
        setCategoryType(value)
        setDataSet(filterData(searchText, value))
    }
    const filterData = (searchText, category) => {
        return data.filter((f) =>
            f.plantName.toLowerCase().includes(searchText.toLowerCase()) &&
            (category ? f.category === category : true)
        )
    }
    return (
        <main className="w-11/12 mx-auto my-6">
            <div className="flex items-center justify-between font-semibold gap-4 my-8">
                <h1 className="text-lg sm:text-2xl">All trees collection</h1>
                <h3 className="text-base sm:text-xl text-end">Available types in Stock ( {dataSet.length} )</h3>
            </div>
            <form className="lg:w-1/2 mx-auto my-6 flex flex-wrap md:flex-nowrap gap-3 items-center justify-center">
                <input type="text" name="search" onChange={s => handleSearch(s.target.value)} placeholder="Search" />
                <select onChange={s => handleCategory(s.target.value)} defaultValue="" name="category" className="bg-gray-100 px-4 py-3 text-black rounded-full text-sm">
                    <option value="" disabled>Choose by category</option>
                    {
                        categories.map((e, i) => <option key={i} value={e.value}>{e.option}</option>)
                    }
                </select>
            </form>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-center gap-6 text-white">
                {
                    dataSet.map(e => (
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