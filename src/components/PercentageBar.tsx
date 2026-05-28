import { useEffect, useState } from "react";


interface PercentageBarProps {
    rate : number;
}
export default function PercentageBar({
    rate
} : PercentageBarProps) {
    const [rateWidth,setWidthRate] = useState<string | null>(null);
    
    useEffect(() => setWidthRate(`${String(rate)}%`),[rate])

    if(!rateWidth) return null;
    return <div className="w-full flex gap-2 items-center">
        <div className="w-full bg-gray-600 h-1  rounded-sm   ">
            <div className={`
                w-[${rateWidth}] h-full bg-primary percentage-bar  
            `}></div>
        </div>
        <p className="text-sm">{rate}%</p>
    </div>
}