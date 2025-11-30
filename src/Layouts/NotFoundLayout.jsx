import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NotFound from "../Pages/NotFound";

export default function NotFoundPageLayout() {
    return (
        <main className="flex flex-col items-center justify-between gap-4 min-h-screen">
            <Navbar />
            <NotFound />
            <Footer />
        </main>
    )
}