import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Loading() {
    return (
        <main className="flex flex-col gap-1 min-h-screen justify-between">
            <Navbar />
            <section className="flex items-center justify-center h-full gap-4 p-4 text-gray-700">
                <div className="h-6 w-6 animate-bounce"><div className="h-6 w-6 bg-emerald-800 rounded-tl-md rounded-br-md animate-spin">l</div></div>
                <div className="h-6 w-6 animate-bounce"><div className="h-6 w-6 bg-emerald-800 rounded-tl-md rounded-br-md animate-spin">l</div></div>
                <div className="h-6 w-6 animate-bounce"><div className="h-6 w-6 bg-emerald-800 rounded-tl-md rounded-br-md animate-spin">l</div></div>
            </section>
            <Footer />
        </main>
    )
}