import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../layouts/Login";
import Rester from "../layouts/Rester";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
          path:'',
          element:<Navigate to={'/category/01'}></Navigate>

        },
        {
          path:'/category/:id',
          element:<CategoryNews></CategoryNews>,
          loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        
        },
      ],
    },
    {
      path:'/news/:id',
      element:<PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>,
      loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    

    },
    {
      path:'/login',
      element:<Login></Login>

    },
    {
      path:'/rester',
      element:<Rester></Rester>

    },
    {
        path: "*",
        element: <div>Error!</div>,
      },
  ]);
  export default router;