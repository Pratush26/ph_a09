import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-white min-h-[40vh] w-full flex flex-col items-center justify-around p-2">
            <section className="flex items-center justify-around w-full gap-4">
                <div className="grid grid-flow-row gap-3">
                    <Link to='/'>Home</Link>
                    <Link to='/plants'>Plants</Link>
                    <Link to='/profile'>Profile</Link>
                </div>
                <div className="grid grid-flow-row gap-3">
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Privacy Policy</Link>
                </div>
                <div className="grid grid-flow-row gap-3">
                    <h5 className="font-semibold text-lg">Social Links</h5>
                    <a target="_blank" href='https://www.instagram.com'>Instagram</a>
                    <a target="_blank" href='https://www.facebook.com'>Facebook</a>
                    <a target="_blank" href='https://www.pinterest.com'>Pinterest</a>
                </div>
            </section>
            <p className="text-center text-sm text-gray-400"><q>&copy; 2025 GreenNest. All rights reserved.</q></p>
        </footer>
    )
}