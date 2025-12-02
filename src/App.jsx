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
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      { state === 'loading' ?  <Loader /> : <Outlet /> }
      <ToastContainer position="top-center" />
      <ScrollToTop />
      <Footer />
    </div>
  )
}