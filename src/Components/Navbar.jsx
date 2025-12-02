import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [isOpened, setIsOpened] = useState(false)
    const [hamburger, setHamburger] = useState(true)
    const { user, loading, signOutUser } = useContext(AuthContext)
    const handleLogout = () => {
        signOutUser().then(() => toast.success("Successfully Signed Out")).catch((c) => {
            toast.error(c.message)
        })
    }
    useEffect(() => {
        setIsOpened(false);
    }, [user]);
    return (
        <header className="p-4 sticky top-0 right-0 z-100 shadow bg-white w-full">
            <nav className="flex font-medium text-sm items-center justify-between gap-4 w-11/12 mx-auto">
                <Link to='/' className="text-2xl text-emerald-900 italic font-bold" >GreenNest</Link>
                <div className="space-x-4 hidden sm:block">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/plants'>Plants</NavLink>
                    <NavLink to='/about'>About Us</NavLink>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </div>
                <div>
                    {
                        loading ?
                            <p>Loading...</p>
                            :
                            user ?
                                <div className="hidden sm:flex items-center text-sm gap-2">
                                    {
                                        user.photoURL ?
                                            <img src={user?.photoURL} className="rounded-full object-center object-cover h-9 aspect-square" alt="user" />
                                            :
                                            <FaUserCircle className="h-7 w-auto" />
                                    }
                                    <NavLink to='/profile'>My profile</NavLink>
                                    <section className="relative"
                                        onMouseLeave={() => setIsOpened(false)}
                                        onMouseEnter={() => setIsOpened(true)}>
                                        <div className="flex gap-2 items-center font-semibold">
                                            <p>{user.displayName}</p>
                                            <IoIosArrowDown />
                                        </div>
                                        <button onClick={() => handleLogout()} className={`${isOpened ? "cursor-pointer bg-stone-50" : "hidden"} absolute w-full text-start bottom-0 translate-y-full px-4 py-2 hover:bg-stone-100 font-semibold`}>Log out</button>
                                    </section>
                                </div>
                                :
                                <div className="space-x-2 hidden sm:block">
                                    <NavLink to='/register'>Register</NavLink>
                                    <NavLink to='/login'>Login</NavLink>
                                </div>
                    }
                    {!loading && <button onClick={() => setHamburger(!hamburger)} className="sm:hidden">{hamburger ? <RxHamburgerMenu /> : <RxCross2 />}</button>}
                </div>
            </nav>
            {
                hamburger ?
                    <></>
                    :
                    <div className="flex sm:hidden flex-col absolute bottom-0 p-4 left-0 rounded-sm w-full translate-y-full z-30 bg-white">
                        {user ?
                            <div className="flex items-center text-sm gap-2">
                                {
                                    user.photoURL ?
                                        <img src={user?.photoURL} className="rounded-full object-center object-cover h-9 aspect-square" alt="user" />
                                        :
                                        <FaUserCircle className="h-7 w-auto" />
                                }
                                <NavLink to='/profile'>My profile</NavLink>
                                <button onClick={() => handleLogout()} className={`cursor-pointer bg-stone-50 px-4 py-2 font-semibold`}>Log out</button>
                            </div>
                            :
                            <div className="flex flex-col">
                                <NavLink to='/register'>Register</NavLink>
                                <NavLink to='/login'>Login</NavLink>
                            </div>}
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/plants'>Plants</NavLink>
                        <NavLink to='/about'>About Us</NavLink>
                        <NavLink to='/contact'>Contact Us</NavLink>
                    </div>
            }
        </header>
    )
}