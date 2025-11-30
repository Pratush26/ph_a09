import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import NotFound from "../Pages/NotFound";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/loader";

export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const { pathname } = useLocation()
    if (loading) return <Loader />;
    if (user) return children;
    return <Navigate state={pathname} to="/login" />
}