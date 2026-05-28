import { FaGithub, FaLinkedin } from "react-icons/fa";
import {  NavLink } from "react-router-dom";

export default function HomeIndex(){
    return <div className="min-h-0 h-full flex items-center max-md:justify-center text-white">
        <div className="flex flex-col gap-3 p-10">
            <div>
                <div className="text-[45px] font-bold leading-12">
                    <p>Hi,</p>
                    <p className="text-primary">I'm Jayvee Hidlao</p>
                </div>
                <p className="text-lg font-extralight mt-2">A Full Stack Developer</p>
            </div>
            <div className="flex items-center gap-7">
                <NavLink to="/projects/all" replace className="cta-btn text-lg ring-1 ring-bg-secondary text-primary shadow-2xl px-10 font-bold py-1 shadow-primary  ">
                    View Projects
                </NavLink>
                <div className="flex items-center gap-5">
                    <a href="https://github.com/Developer-Jayvee" target="_blank" className="icon-btn text-primary text-3xl">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/jayvee-hidlao-857452244" target="_blank"  className="icon-btn text-primary text-3xl">
                        <FaLinkedin/>
                    </a>
                </div>
            </div>
        </div>
    </div>
}