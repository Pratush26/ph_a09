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
        <header className="w-11/12 mx-auto p-4 relative">
            <nav className="flex font-medium items-center justify-between gap-4">
                <Link to='/' className="text-2xl text-emerald-900 italic font-bold" >GreenNest</Link>
                <div className="space-x-2 hidden sm:block">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/plants'>Plants</NavLink>
                    <NavLink to='/profile'>My profile</NavLink>
                </div>
                <div>
                    {
                        loading ?
                            <p>Loading...</p>
                            :
                            user ?
                                <div className="hidden sm:flex items-center font-semibold text-sm gap-2">
                                    {
                                        user.photoURL ?
                                            <img src={user?.photoURL} className="rounded-full object-center object-cover h-9 aspect-square" alt="user" />
                                            :
                                            <FaUserCircle className="h-7 w-auto" />
                                    }
                                    <section className="relative"
                                        onMouseLeave={() => setIsOpened(false)}
                                        onMouseEnter={() => setIsOpened(true)}>
                                        <div className="flex gap-2 items-center">
                                            <p>{user.displayName}</p>
                                            <IoIosArrowDown />
                                        </div>
                                        <button onClick={() => handleLogout()} className={`${isOpened ? "cursor-pointer bg-stone-50" : "hidden"} absolute w-full text-start bottom-0 translate-y-full px-4 py-2 hover:bg-stone-100`}>Log out</button>
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
                    <div className="flex items-center font-semibold text-sm gap-2">
                        {
                            user.photoURL ?
                                <img src={user?.photoURL} className="rounded-full object-center object-cover h-9 aspect-square" alt="user" />
                                :
                                <FaUserCircle className="h-7 w-auto" />
                        }
                            <button onClick={() => handleLogout()} className={`cursor-pointer bg-stone-50 px-4 py-2`}>Log out</button>
                    </div>
                    :
                    <div className="flex flex-col">
                        <NavLink to='/register'>Register</NavLink>
                        <NavLink to='/login'>Login</NavLink>
                    </div>}
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/plants'>Plants</NavLink>
                    <NavLink to='/profile'>My profile</NavLink>
                </div>
            }
        </header>
    )
}