import { createBrowserRouter } from "react-router";
import App from "../App";
import Loader from "../Components/loader";
import NotFoundPageLayout from "../Layouts/NotFoundLayout";
import HomePage from "../Pages/Home";
import axios from "axios";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import PlantsPage from "../Pages/Plants";
import ProfileUpdatePage from "../Pages/UpdateProfile";
import Loading from "../Layouts/Loading";
import PlantsDetails from "../Pages/Details";
import CaringGuidePage from "../Pages/Guide";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    hydrateFallbackElement: <Loading />,
    errorElement: <NotFoundPageLayout />,
    children: [
      {
        index: true,
        loader: async () => {
          const plants = await axios('/plants.json')
          const experts = await axios('/experts.json')
          const tips = await axios('/generalTips.json')
          return { topRatedPlants: plants.data.sort((a, b) => b.rating - a.rating).slice(0, 3), experts: experts.data, inStockPlants: plants.data.sort((a, b) => b.availableStock - a.availableStock).slice(0, 3), silderImg: plants.data.map(e => e.image), tips: tips.data }
        },
        Component: HomePage
      },
      {
        path: '/plants',
        loader: async () => {
          const res = await axios('/plants.json')
          return res.data.filter(e => e.availableStock > 0)
        },
        Component: PlantsPage
      },
      {
        path: '/details/:id',
        loader: async ({params}) => {
          const res = await axios('/plants.json')
          return res.data.filter(e => e.plantId == params.id)
        },
        element: <PrivateRoute><PlantsDetails /></PrivateRoute>
      },
      {
        path: '/care/:id',
        loader: async ({params}) => {
          const res = await axios('/generalTips.json')
          return res.data.plants.filter(e => e.id == params.id)
        },
        element: <PrivateRoute><CaringGuidePage /></PrivateRoute>
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: '/updateprofile',
        element: <PrivateRoute><ProfileUpdatePage /></PrivateRoute>
      },
      {
        path: "*",
        Component: NotFound
      }
    ]
  },
]);