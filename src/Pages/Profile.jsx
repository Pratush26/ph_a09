import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router"
import { FaUserCircle } from "react-icons/fa"

export default function Profile() {
    const { user } = useContext(AuthContext)
    return (
        <main className="flex flex-wrap h-full items-center justify-center gap-4">
            {
                user.photoURL ?
                <img src={user?.photoURL} loading="eager" className="rounded-xl object-cover object-center h-24 aspect-square" alt="user" />
                :
                <FaUserCircle className="h-16 w-auto" />
            }
            <div className="font-semibold">
                <p className="text-2xl">{user?.displayName}</p>
                <p className="text-gray-600 font-medium mb-4">{user?.email}</p>
                <Link to="/updateprofile" className="px-4 py-2 my-2 rounded-sm bg-emerald-900 text-white cursor-pointer">Update Profile</Link>
            </div>
        </main>
    )
}