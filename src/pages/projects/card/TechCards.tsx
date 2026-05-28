
interface TechCardProps {
    label : string;
}
export default function TechCards({ label } : TechCardProps) {
    return <div className="bg-cardBg px-2 text-center rounded-md border border-borderColor">
        <p>{label}</p>
    </div>
}