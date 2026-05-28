import KateKors from '@/assets/projects/kate-kors.png'
import AgileResolve from "@/assets/projects/agile-resolve-ongoing.png"
export interface ProjectListProps {
    type:"web" | "mobile";
    image: any;
    title:string;
    description : string;
    status : string;
    stacks : Array<string>;
    links : Array<{ label:string; path:string; }>
}
export const ProjectArray : ProjectListProps[] = [
    {
        type:"web",
        image : KateKors,
        title:"Kate Kors",
        description : "Landing Page for Kate Kors - Luxury Bags",
        status : "Completed",
        stacks : ['React','Tailwind'],
        links : [
            { 
                label:'Live Demo',
                path:'https://kate-kors.vercel.app/',
            },
            {
                label:'GitHub',
                path:'https://github.com/Developer-Jayvee/Kate-Kors'
            }
        ]
    },
    {
        type:"web",
        image : AgileResolve,
        title:"AgileResolve - Jira-like Task Management",
        description : "Task management that handle task through tickets, communicating or collaborating with clients or developers",
        status : "On-going",
        stacks : ['React','Tailwind','Laravel','PHP'],
        links : [
            {
                label:'GitHub',
                path:'https://github.com/Developer-Jayvee/AgileResolve'
            }
        ]
    },
]