import { AiOutlineApi, AiOutlineConsoleSql } from "react-icons/ai";
import { BsJavascript, BsLightbulb, BsTypescript } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";
import { CiServer, CiSettings } from "react-icons/ci";
import { DiGithub } from "react-icons/di";
import { FaCode, FaDocker, FaGit, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaReact, FaStar } from "react-icons/fa";
import { FaComputer, FaCss, FaVuejs } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";
import { RiBox1Line, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql, SiPostgresql, SiVercel } from "react-icons/si";
import { TbSchema } from "react-icons/tb";



export const iconMap = {
    react: FaReact,
    vue : FaVuejs,
    tailwind: RiTailwindCssFill,
    typescript: BsTypescript,
    js: BsJavascript,
    php:FaPhp,
    laravel:FaLaravel,
    nodejs:FaNodeJs,
    expressjs:SiExpress,
    mysql:SiMysql,
    postgres:SiPostgresql,
    github:DiGithub,
    docker:FaDocker,
    git:FaGit,
    vercel : SiVercel,
    browser: CgBrowser,
    server: CiServer,
    settings: CiSettings,
    html:FaHtml5,
    css:FaCss,
    sql: AiOutlineConsoleSql,
    code:FaCode,
    star: FaStar,
    api:AiOutlineApi,

    schema:TbSchema,
    responsive:FaComputer,
    lightbulb:BsLightbulb,
    box:RiBox1Line,
    performance:GrDocumentPerformance,
    secure:MdOutlineSecurity,

}

interface IconUtilProps {
    icon: keyof typeof iconMap | null;
    customClass ?: string;
}

export default function IconUtil({
    icon = null, customClass =''
}: IconUtilProps) {

    const Icon = icon ? iconMap[icon] : null

    if (!Icon) return null

    return <Icon className={`${customClass}`}/>
}