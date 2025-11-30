import { Link } from "react-router"
import png from "../assets/404.png"

export default function NotFound() {
    return (
        <section className="h-full flex flex-col gap-4 items-center justify-center">
            <img src={png} loading="eager" alt="page not found" className="w-11/12 h-auto max-w-3xs" />
            <Link to='/' className="px-4 py-2 rounded-sm bg-emerald-700 text-white text-sm font-semibold">Go back to home</Link>
        </section>
    )
}