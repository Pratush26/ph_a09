import '../utils/utility.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { toast } from 'react-toastify'

export default function ProfileUpdatePage() {
    const [msg, setMsg] = useState({})
    const { updateUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        updateUser(e.target.name.value, e.target.photoUrl.value).then(() => {
            setMsg({ type: "success", message: "Successfully Updated User details" })
            toast.success("Successfully Updated User details")
            e.target.reset()
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
                        toast.error(c.message)
        })
    }
    return (
        <form onSubmit={handleRegister} className="bg-emerald-950 rounded-2xl text-white w-11/12 md:w-2/3 lg:w-2/5 mx-auto p-4 m-8 shadow-lg/50 shadow-gray-400">
            <h1 className="flex items-center justify-center text-center text-4xl font-semibold p-6" >Update Profile</h1>
            {msg && <p className={`${msg.type === 'err' ? 'text-red-600' : 'text-green-600'} w-11/12 mx-auto`}>{msg.message}</p>}
            <fieldset className='flex flex-col gap-1'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <label htmlFor="photoUrl">Photo URL:</label>
                <input type="url" name="photoUrl" id="photoUrl" placeholder="Enter your photo url" />
                <button className='bg-emerald-700 font-semibold w-fit mx-auto px-4 py-2 rounded-md m-2 cursor-pointer hover:bg-emerald-800 transition-colors duration-100 transition-discrete'>Update</button>
            </fieldset>
        </form>
    )
}