import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import '../utils/utility.css'
import { useContext, useState } from 'react'
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../Context/AuthContext'
import { toast } from 'react-toastify'

export default function Register() {
    const [msg, setMsg] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const { user, createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const { state } = useLocation()
    const navigate = useNavigate()

    if (user) return <Navigate to="/" ></Navigate>

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    function validatePassword(password) {
        return passwordRegex.test(password);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (!validatePassword(e.target.password.value)) {
            setMsg({ type: "err", message: "Password must be include at least Upper & Lowercase 6 characters" });
            toast.warn("Password must be include at least Upper & Lowercase 6 characters")
            return;
        }
        createUser(e.target.email.value, e.target.password.value).then(() => {
            updateUser(e.target.name.value, e.target.photoUrl.value).then(() => {
                setMsg({ type: "success", message: "Successfully Registered User" })
                toast.success('Successfully Registered User')
                e.target.reset()
                setTimeout(() => { navigate(state || "/") }, 100);
            }).catch((c) => {
                setMsg({ type: "err", message: c.message })
                toast.error(c.message)
            })
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
            toast.error(c.message)
        })

    }
    const googleLogin = () => {
        googleSignIn().then(() => {
            setMsg({ type: "success", message: "Successfully Signed in" })
            toast.success('Successfully Signed in')
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
            toast.error(c.message)
        })
    }
    return (
        <form onSubmit={handleRegister} className="bg-emerald-950 rounded-2xl text-white w-11/12 md:w-2/3 lg:w-2/5 mx-auto p-4 m-8 shadow-lg/50 shadow-gray-400">
            <h1 className="flex items-center justify-center text-center text-4xl font-semibold p-6" >Signup</h1>
            {msg && <p className={`${msg.type === 'err' ? 'text-red-600' : 'text-green-600'} w-11/12 mx-auto`}>{msg.message}</p>}
            <fieldset className='flex flex-col gap-1'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" />
                <label htmlFor="photoUrl">Photo URL:</label>
                <input type="url" name="photoUrl" id="photoUrl" placeholder="Enter your photo url" />
                <label htmlFor="email">Email:</label>
                <input type="email" required='true' name="email" id="email" placeholder="Enter your email" />
                <label htmlFor="password">Password:</label>
                <div className='relative flex items-center text-black justify-center'>
                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" minLength={6} id="password" placeholder='Enter your password' />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute p-1 right-7 top-1/2 -translate-y-1/2 cursor-pointer'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <p className="m-2 text-center text-sm">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600 font-medium">Login</Link></p>
                <button className='bg-emerald-700 font-semibold w-fit mx-auto px-4 py-2 rounded-md m-2 cursor-pointer hover:bg-emerald-800 transition-colors duration-100 transition-discrete'>Register</button>
            </fieldset>
            <button onClick={googleLogin} type="button" className="flex text-gray-300 items-center justify-center mx-auto gap-3 rounded-sm border px-4 py-2 text-sm font-medium hover:text-sky-600 w-fit cursor-pointer"><FcGoogle /> Login with Google</button>
        </form>
    )
}