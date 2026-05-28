import { useParams } from "react-router-dom"
import ProjectCard from "../card/ProjectCard"
import { ProjectArray, type ProjectListProps } from "@/constants/projects"
import { useEffect, useState } from "react";

export default function ProjectList(){
    const { type } = useParams();
    const [projects,setProjects] = useState<ProjectListProps[]>([]);
    useEffect(() => {
        const getProjects = () => {
            setProjects(
                ProjectArray.filter( (item) =>  (item.type === type || type === "all"))
            ) 
        }
        getProjects()
    },[type])
    return (
        <div className="p-4">
            <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4">
                {
                    projects && projects.map( (item,index) => (
                        <ProjectCard
                        key={index}
                        image={item.image}
                        info={{
                            title:item.title,
                            description:item.description,
                            status:item.status
                        }}
                        stacks={item.stacks}
                        links={item.links}
                        />

                    ))
                }
            </div>
        </div>
    )
}