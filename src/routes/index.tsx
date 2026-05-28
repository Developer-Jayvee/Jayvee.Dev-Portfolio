import BaseLayout from "@/components/layouts/BaseLayout";
import HomeIndex from "@/pages/home";
import SkillIndex from "@/pages/skills";
import { createBrowserRouter, Navigate } from "react-router-dom";


const ROUTES = createBrowserRouter([
    {
        path:'/',
        element:<BaseLayout/>,
        children:[
            {
                index:true,
                element:<Navigate to='home' replace/>
            },
            {
                path:'home',
                element:<HomeIndex/>
            },
            {
                path:'skills',
                element:<SkillIndex/>
            }
        ]
    }
])

export default ROUTES;