import BaseLayout from "@/components/layouts/BaseLayout";
import HomeIndex from "@/pages/home";
import ProjectIndex from "@/pages/projects";
import ProjectList from "@/pages/projects/list/ProjectList";
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
            },
            {
                path:"projects",
                element:<ProjectIndex/>,
                children:[
                    {
                        path:":type",
                        element:<ProjectList/>
                    },
                    {
                        index:true,
                        element:<Navigate to="/projects/all" replace/>
                    }
                ]
            }
        ]
    }
])

export default ROUTES;