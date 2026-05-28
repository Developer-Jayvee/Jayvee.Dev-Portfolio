import IconUtil, { iconMap } from "@/utilities/icon.util";

interface OtherSkillCardProps {
    icon : keyof typeof iconMap;
    label: string;
}
export default function OtherSkillCard({ icon , label } : OtherSkillCardProps) {

    return <div className="  grid grid-cols-[90px_1fr] items-center place-content-center    p-2 rounded-lg text-md ring-1  text-primary  font-bold  shadow-primary  ">
        
            <div className="flex justify-center text-2xl">
                <IconUtil icon={icon} />
            </div>
            <span className="text-sm">{label}</span>
    </div>
}