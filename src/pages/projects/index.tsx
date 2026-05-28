import { NavLink, Outlet } from "react-router-dom";
import ProjectHeader from "./header";
import "./css/index.css"

export default function ProjectIndex(){

    return <div className="w-full h-full">
        <div className="flex flex-col gap-2">
            <ProjectHeader/>          
            <div>
                <ul className="grid  grid-cols-1 md:grid-cols-2 max-sm:gap-y-5 md:flex  gap-2 text-white items-center project-links">
                    <li>
                        <NavLink to="/projects/all">
                            <span>All Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects/web">
                            <span>Web Applications</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    </div>
}