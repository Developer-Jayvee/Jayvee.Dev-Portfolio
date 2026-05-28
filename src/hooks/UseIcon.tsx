import IconUtil, { type IconsAvailable } from "@/utilities/icon.util";

interface UseIconHookProps {
    icon : IconsAvailable | null;
    props : any;
}
export default function UseIcon({
    props = {} , icon
} : UseIconHookProps){
    
    const {Icon, IconType } = IconUtil({
        icon
    });

    if(!Icon) return null;

    return <Icon {...props}/>

}