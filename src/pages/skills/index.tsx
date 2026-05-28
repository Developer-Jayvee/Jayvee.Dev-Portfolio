import "./css/index.css"
import { BackendLang, FrontendLang, otherSkills, ProgLangues, TechTools } from "@/constants"
import SkillCard from "./components/SkillCard"
import type { ProglanguageProps } from "@/types"
import IconUtil from "@/utilities/icon.util"
import OtherSkillCard from "./components/OtherSkillCard"

export default function SkillIndex() {

    return <div className=" text-white pb-10">
        <div className="flex flex-col items-center">
            <div className="text-center  ">
                <p className="text-primary! text-md font-medium mb-1">MY EXPERTISE</p>
                <h1 className="skill-title text-4xl font-bold mb-2">Skills <span className="text-primary">&</span> Technologies</h1>
                <p className="font-light text-sm w-100 text-gray-400">Technologies I work with to build modern, scalable and high-performance applications.</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
                <SkillCard<ProglanguageProps>
                    labels={{
                        title: "Frontend Development",
                        description: "Building responsive and interactive user interfaces with modern frameworks"
                    }}
                    list={FrontendLang}
                    icon="browser"
                />
                <SkillCard<ProglanguageProps>
                    labels={{
                        title: "Backend Development",
                        description: "Developing robust APIs and server-side applications with modern technologies"
                    }}
                    list={BackendLang}
                    icon="server"
                />
                <SkillCard<ProglanguageProps>
                    labels={{
                        title: "Tools & DevOps",
                        description: "Using modern tools and DevOps practices to streamline development and deployment"
                    }}
                    list={TechTools}
                    icon="settings"
                />
                <div className="h-full">
                    <SkillCard<ProglanguageProps>
                        labels={{
                            title: "Langueges",
                            description: "Programming languages I use to bring ideas to life"
                        }}
                        list={ProgLangues}
                        icon="code"
                    />
                </div>
                <div className="col-span-2 h-full">
                    <div className="skill-card h-full flex flex-col gap-7 shadow-secondary bg-[linear-gradient(40deg,rgb(5,8,22)_70%,#0F172A_100%,#8B5CF6_100%)] border-secondary p-4 rounded-lg">
                        <div className="flex  items-center gap-4">
                            <div>
                                <div className="bg-secondary rounded-full w-10 h-10 flex justify-center items-center text-2xl">
                                    <IconUtil icon="star" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Other Skils</h3>
                            </div>
                        </div>
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                           {
                                otherSkills.map( (data) => (
                                    <OtherSkillCard
                                        icon={data.icon}
                                        label={data.label}
                                    />
                                ))
                           }

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
}