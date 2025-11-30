import { useLoaderData } from "react-router"
import ConsultantForm from "../Components/ConsultantForm"

export default function CaringGuidePage() {
    const data = useLoaderData()
    const e = data[0]
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto my-8">
            <img src={e.image} loading="eager" className="w-full h-auto rounded-xl" alt={e.name} />
            <section className="flex flex-col justify-center gap-3">
                    <h1 className="text-2xl md:text-3xl text-emerald-950 font-bold">{e.name}</h1>
                    <p className="font-semibold">Difficulty: {e.difficulty}</p>
                <h5 className="text-xl font-bold">Watering Process</h5>
                <ul className="list-disc list-inside">
                    <li><span className="font-semibold capitalize">{Object.keys(e.watering)[0]}: </span>{Object.values(e.watering)[0]}</li>
                    <li><span className="font-semibold capitalize">{Object.keys(e.watering)[1]}: </span>{Object.values(e.watering)[1]}</li>
                    <li><span className="font-semibold capitalize">{Object.keys(e.watering)[2]}: </span>{Object.values(e.watering)[2]}</li>
                </ul>
                <h5 className="text-xl font-bold">Sunlight Level</h5>
                <ul className="list-disc list-inside">
                    <li><span className="font-semibold capitalize">{Object.keys(e.sunlight)[0]}: </span>{Object.values(e.sunlight)[0]}</li>
                    <li><span className="font-semibold capitalize">{Object.keys(e.sunlight)[1]}: </span>{Object.values(e.sunlight)[1]}</li>
                    <li><span className="font-semibold capitalize">{Object.keys(e.sunlight)[2]}: </span>{Object.values(e.sunlight)[2]}</li>
                </ul>
                <h5 className="text-xl font-bold">Fertilization Process</h5>
                <ul className="list-disc list-inside">
                    <li><span className="font-semibold capitalize">{Object.keys(e.fertilizing)[0]}: </span>{Object.values(e.fertilizing)[0]}</li>
                    <li><span className="font-semibold capitalize">{Object.keys(e.fertilizing)[1]}: </span>{Object.values(e.fertilizing)[1]}</li>
                    <li><span className="font-semibold capitalize">{Object.keys(e.fertilizing)[2]}: </span>{Object.values(e.fertilizing)[2]}</li>
                </ul>
                <h5 className="text-xl font-bold">Common Issues</h5>
                <ul className="list-disc list-inside">
                    {e.commonIssues.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
            </section>
            <ConsultantForm />
        </main>
    )
}