import KateKors from '@/assets/projects/kate-kors.png'

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
        stacks : ['React','TailwindCSS'],
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
    }
]