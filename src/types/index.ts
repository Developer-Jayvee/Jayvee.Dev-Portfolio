import type { iconMap } from "@/utilities/icon.util";


export interface NavLinkProps {
    path:string;
    label: string;
}

export interface ProglanguageProps {
    rate:number;
    icon:keyof typeof iconMap;
    label:string;
}