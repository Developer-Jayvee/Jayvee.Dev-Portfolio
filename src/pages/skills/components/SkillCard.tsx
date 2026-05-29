import type { ProglanguageProps } from "@/types";
import SkillRate from "./SkillRate";
import type { iconMap } from "@/utilities/icon.util";
import IconUtil from "@/utilities/icon.util";


interface SkillCardProps {
    list: ProglanguageProps[];
    labels : {
        title:string;
        description : string;
    },
    icon : keyof typeof iconMap;
}
export default function SkillCard({ list , labels , icon } : SkillCardProps) {

    return (
        <div className="skill-card  h-full flex flex-col gap-7   bg-[linear-gradient(40deg,rgb(5,8,22)_70%,#0F172A_100%,#8B5CF6_100%)]  p-4 rounded-lg">
            <div className="flex  items-center gap-4">
                <div>
                    <div className="bg-secondary rounded-full w-10 h-10 flex justify-center items-center text-2xl">
                        <IconUtil icon={icon}/> 
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{labels.title}</h3>
                    <p className="text-sm font-extralight">{labels.description}</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                {
                    list && list.map((data, index) => (
                        <SkillRate key={index} data={data} />
                    ))
                }

            </div>

        </div>
    )
}