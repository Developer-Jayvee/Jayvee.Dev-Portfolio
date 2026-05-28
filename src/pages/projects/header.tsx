import IconUtil from "@/utilities/icon.util";
import { BiFolder } from "react-icons/bi";


export default function ProjectHeader() {
    return <div className="grid grid-cols-[700px_1fr] gap-x-20">
        <div >
            <p className="text-primary">MY WORK</p>
            <h1 className="text-4xl font-bold">
                <span className="text-primary">Projects </span>
                <span className="text-white">I've Built</span>
            </h1>
            <p className="text-white">A collection of personal and client projects that showcase my skills, problem-solving approach and passion  for building meaningful digital experiences</p>
        </div>
        <div className="p-4">
            <div className="text-white grid grid-cols-3 bg-cardBg rounded-lg overflow-hidden ">
                <div className="border-0 border-r  p-4 ">
                    <BiFolder className="text-xl" />
                    <h2 className="text-3xl font-bold">6</h2>
                    <p className="text-sm">Projects Completed</p>
                </div>
                <div className="p-4  border-r ">
                    <IconUtil icon="code" customClass="text-xl" />
                    <h2 className="text-3xl font-bold">30K+</h2>
                    <p className="text-sm">Lines of code</p>
                </div>
                <div className="p-4  ">
                    <IconUtil icon="star" customClass="text-xl" />
                    <h2 className="text-3xl font-bold">3</h2>
                    <p className="text-sm">Years of Experience</p>
                </div>
            </div>
        </div>
    </div>
}