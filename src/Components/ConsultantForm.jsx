import { useState } from 'react'
import '../utils/utility.css'
import { toast } from 'react-toastify';

export default function ConsultantForm() {
    const [msg, setMsg] = useState({})
    const handleBook = (e) => {
        e.preventDefault();
        setMsg({ type: "success", message: "Successfully Book an apoinment" })
        toast.success('Successfully Book an apoinment')
        e.target.reset()
    }
    return (
        <form onSubmit={handleBook} className="bg-emerald-950 md:col-span-2 rounded-2xl text-white w-11/12 md:w-2/3 lg:w-1/2 mx-auto p-4 m-8 shadow-lg/50 shadow-gray-400">
            <h1 className="flex items-center justify-center text-center text-4xl font-semibold p-6" >Consultation Form</h1>
            {msg && <p className={`${msg.type === 'err' ? 'text-red-600' : 'text-green-600'} w-11/12 mx-auto`}>{msg.message}</p>}
            <fieldset className='flex flex-col gap-1'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <label htmlFor="email">Email:</label>
                <input type="email" required='true' name="email" id="email" placeholder="Enter your email" />
                <button className='bg-emerald-700 font-semibold w-fit mx-auto px-4 py-2 rounded-md m-2 cursor-pointer hover:bg-emerald-800 transition-colors duration-100 transition-discrete'>Book Now</button>
            </fieldset>
        </form>
    )
}