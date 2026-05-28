import { NavLinks } from "@/constants";
import {  NavLink } from "react-router-dom";


export default function Nav(){

    return <nav className="fixed top-0 left-0 right-0 p-3 shadow-borderColor shadow-2xs">
        <div className="flex justify-between items-center px-2 ">
            <div className="flex items-center gap-2">
                <span className="text-primary text-2xl">{'</>'}</span>
                <span className="ml-1 text-lg font-kodeMono!">Jayvee.Dev</span>
            </div>
            <div>
                <ul className="flex justify-around items-center gap-10">
                    {
                        NavLinks.map((data) => (
                            <li>
                                <NavLink to={data.path} replace>
                                    <span>{data.label}</span>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
}