import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import '../utils/utility.css'
import { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify'

export default function Login() {
    const [msg, setMsg] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const { user, googleSignIn, sigInUser, resetPassword } = useContext(AuthContext)
    const navigate = useNavigate()
    const { state } = useLocation()

    if (user) return <Navigate to="/" />

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    function validatePassword(password) {
        return passwordRegex.test(password);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (!validatePassword(e.target.password.value)) {
            setMsg({ type: "err", message: "Password must be include at least Upper & Lowercase 6 characters" });
            toast.warn("Password must be include at least Upper & Lowercase 6 characters")
            return;
        }
        sigInUser(e.target.email.value, e.target.password.value).then(() => {
            setMsg({ type: "success", message: "Successfully sign in" })
            e.target.reset()
            toast.success("Successfully sign in")
            setTimeout(() => { navigate(state || "/") }, 100);
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
            toast.error(c.message)
        })
    }
    const handleForgetPassword = (e) => {
        e.preventDefault();
        resetPassword(e.target.form?.email?.value).then(() => {
            setMsg({ type: "success", message: "Check your email to reset password" })
            toast.success("Check your email to reset password")
            e?.target?.form?.reset()
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
            toast.error(c.message)
        })
    }
    const googleLogin = () => {
        googleSignIn().then(() => {
            setMsg({ type: "success", message: "Successfully Signed in" })
            toast.success("Successfully Signed in")
        }).catch((c) => {
            setMsg({ type: "err", message: c.message })
            toast.error(c.message)
        })
    }
    return (
        <form onSubmit={handleLogin} className="bg-emerald-950 rounded-2xl text-white w-11/12 md:w-2/3 lg:w-2/5 mx-auto p-4 m-8 shadow-lg/50 shadow-gray-400">
            <h1 className="flex items-center justify-center text-center text-4xl font-semibold p-6" >Login</h1>
            {msg && <p className={`${msg.type === 'err' ? 'text-red-400' : 'text-green-400'} w-11/12 mx-auto`}>{msg.message}</p>}
            <fieldset className='flex flex-col gap-1'>
                <label htmlFor="email">Email:</label>
                <input type="email" required='true' name="email" id="email" placeholder="Enter your email" />
                <label htmlFor="password">Password:</label>
                <div className='relative flex items-center text-black justify-center'>
                    <input type={`${showPassword ? 'text' : 'password'}`} name="password" id="password" placeholder='Enter your password' />
                    <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute p-1 right-7 top-1/2 -translate-y-1/2 cursor-pointer'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                <button type='button' onClick={handleForgetPassword} className="mt-2 w-11/12 mx-auto text-start cursor-pointer text-sm">Forget password?</button>
                <p className="m-1 text-center text-sm">Don't have an account? <Link to="/register" state={state} className="text-blue-500 hover:text-blue-600 font-medium">Register</Link></p>
                <button type='submit' className='bg-emerald-700 font-semibold w-fit mx-auto px-4 py-2 rounded-md m-2 cursor-pointer hover:bg-emerald-800 transition-colors duration-100 transition-discrete'>Login</button>
            </fieldset>
            <button onClick={googleLogin} type="button" className="flex items-center justify-center text-gray-300 mx-auto gap-3 rounded-sm border px-4 py-2 text-sm font-medium hover:text-sky-600 w-fit cursor-pointer"><FcGoogle /> Login with Google</button>
        </form>
    )
}