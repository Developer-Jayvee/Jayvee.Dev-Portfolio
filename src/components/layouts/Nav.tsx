import { NavLinks } from "@/constants";
import {  useState } from "react";
import { IoMdMenu } from "react-icons/io";
import {  NavLink } from "react-router-dom";


export default function Nav(){
    const [navHeight ,setNavHeight] = useState<string>("h-14.5");
    const expandNav = () => {
        setNavHeight(
            (prev) => prev === 'h-14.5' ? 'h-70 ' : 'h-14.5'
        );
    }

    return <nav className={`
        ${navHeight == 'h-14.5' ?  navHeight + ' overflow-hidden' : navHeight }
        fixed  border-0 border-b border-b-borderColor shadow-md shadow-borderColor top-0 left-0 right-0 p-3  backdrop-blur-2xl z-99
    `}>
        <div className="max-md:grid grid-cols-1 max-md:gap-y-10  md:flex justify-between items-center  px-2 ">
            <div className="flex items-center gap-2">
                <IoMdMenu className="cursor-pointer text-3xl md:hidden inline" onClick={() => expandNav()}/>
                <span className="text-primary text-2xl">{'</>'}</span>
                <span className="ml-1 text-lg font-kodeMono!">Jayvee.Dev</span>
            </div>
            <div>
                <ul className="flex max-md:flex-col justify-around items-center gap-10">
                    {
                        NavLinks.map((data , index) => (
                            <li className="max-md:w-full  max-md:text-center" key={index}>
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