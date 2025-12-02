import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-white text-sm min-h-[40vh] w-full flex flex-col items-center justify-around p-2">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center-safe justify-items-center-safe w-11/12 mx-auto gap-4">
                <div>
                    <Link to='/' className="text-2xl italic font-bold" >GreenNest</Link>
                    <p>Transform your home and surroundings with stunning trees and healthy indoor plants.</p>
                </div>
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
                    <span className="flex gap-2 text-lg">
                        <a target="_blank" href='https://www.instagram.com'><FaInstagram /></a>
                        <a target="_blank" href='https://www.facebook.com'><FaFacebook /></a>
                        <a target="_blank" href='https://www.pinterest.com'><FaPinterest /></a>
                        <a target="_blank" href='https://www.twitter.com'><FaXTwitter /></a>
                    </span>
                </div>
            </section>
            <p className="text-center text-sm text-gray-400"><q>&copy; 2025 GreenNest. All rights reserved.</q></p>
        </footer>
    )
}