import PercentageBar from "@/components/PercentageBar";
import type { iconMap } from "@/utilities/icon.util";
import IconUtil from "@/utilities/icon.util";
import { useEffect, useState } from "react";


interface SkillRateProps {
    data : DetailedSkillsProps;
}
interface DetailedSkillsProps {
    icon : keyof typeof iconMap;
    label : string;
    rate : number;
}
export default function SkillRate({
    data
} : SkillRateProps) {
    const [widthRate , setWidthRate] = useState<number>(0);
   useEffect(() => setWidthRate(data.rate),[data.rate])
    
    return <div className="grid grid-cols-[200px_1fr] items-center-safe">
        <div className="flex gap-2 items-center">
            <div className="bg-secondaryPrimary flex justify-center items-center p-2 rounded-lg text-2xl">
            <IconUtil icon={data.icon}/>
            </div>
            <p>{data.label}</p>
        </div>
        <PercentageBar rate={widthRate} />
    </div>
}