import { Outlet, useNavigation } from 'react-router'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Loader from './Components/loader'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from './utils/ScrollTop'

export default function App() {
  const { state } = useNavigation()
  return (
    <div className="flex flex-col gap-1 min-h-screen justify-between">
      <Navbar />
      <ToastContainer position="top-center" />
      <ScrollToTop />
      { state === 'loading' ?  <Loader /> : <Outlet /> }
      <Footer />
    </div>
  )
}