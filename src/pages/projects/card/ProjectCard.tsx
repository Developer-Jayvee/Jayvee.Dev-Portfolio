import { MdOutlineArrowOutward } from "react-icons/md";
import TechCards from "./TechCards";

interface ProjectDetails {
    title:string;
    description : string;
    status : string;
}
interface ProjectProps {
    image : any;
    info : ProjectDetails;
    stacks : Array<string>;
    links ?: Array<{ label:string; path:string; }>
}
export default function ProjectCard({
    image , info , stacks , links = []
}: ProjectProps) {

    return <div className="  border border-borderColor bg-cardBg rounded-lg overflow-hidden p-2">
        <div className="w-full h-full grid grid-cols-1 grid-rows-[190px_1fr]">
            <div className="w-full overflow-hidden rounded-md">
                <div className="w-full h-full">
                    <img src={image} className="h-full w-full object-center" />
                </div>
            </div>
            <div className="text-white p-2">
                <div className="grid grid-cols-[1fr_95px] overflow-hidden">
                    <div className="grid grid-rows-4  ">
                        <h3 className="text-lg font-bold text-elipsis overflow-hidden text-nowrap ">{info.title}</h3>
                        <p className="text-sm text-ellipsis overflow-hidden text-nowrap">{info.description}</p>
                        <div className="flex gap-3 mb-2">
                            {
                                stacks && stacks.map( (items) => (
                                    <TechCards label={items}/>

                                ))
                            }
                        </div>
                        <div className="flex gap-5 ">
                            {
                                links.length > 0 && links.map((data) => (
                                    <a href={data.path} target="_blank" className="bg-cardBg text-secondary cursor-pointer hover:text-accent flex items-center gap-2">
                                        <span>{data.label}</span>
                                        <MdOutlineArrowOutward />
                                    </a>
                                ))
                            }
                          
                        </div>
                    </div>
                    <div className=" text-sm">
                        <div className="grid grid-cols-[9px_1fr] items-center gap-2 text-secondary">
                            <div className="rounded-full bg-secondary w-2 h-2"></div>
                            <p>{info.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}