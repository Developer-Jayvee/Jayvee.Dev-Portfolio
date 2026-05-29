

interface PercentageBarProps {
    rate : number;
}
export default function PercentageBar({
    rate
} : PercentageBarProps) {

  
    if(!rate) return null;
    return <div className="w-full flex gap-2 items-center">
        <div className="w-full bg-gray-600 h-1  rounded-sm   ">
            <div className={`
                 h-full bg-primary percentage-bar  
            `} style={{ width : `${rate}%`}}></div>
        </div>
        <p className="text-sm">{rate}%</p>
    </div>
}