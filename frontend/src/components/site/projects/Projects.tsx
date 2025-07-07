import { projects, skillList, skillSrcMap } from "@/lib/data";
import SectionHeader from "../common/SectionHeader";
import Project from "./Project";
import { useReducer, useState } from "react";
import type { Projects, Skills } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";

type Skill = Skills[keyof Skills][number];

function reduceProjectList(state: Skill[], skill: Skill) {
    return state.includes(skill) ? state.filter((x) => x !== skill) : [...state, skill];
}

export default function Projects() {
    const [state, dispatch] = useReducer(reduceProjectList, []);
    const [enabled, setEnabled] = useState(false);
    return (
        <section id="projects" className="flex flex-col items-center gap-4 screen">
            <SectionHeader>Projects</SectionHeader>
            <span className="text-center">
                Use the skill buttons belowe to filter the projects. Click on any of the projects to go to the
                repository.
            </span>
            <div className="flex flex-col justify-center items-center gap-8">
                <div className="flex flex-row flex-wrap gap-4 max-w-[48rem] justify-center">
                    {skillList.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                title={skill}
                                data-selectable
                                data-selected={state.includes(skill) ? true : undefined}
                                className={"glass-0.25 p-2 rounded-lg border-black border cursor-pointer shadowed-0.25"}
                                onClick={() => {
                                    dispatch(skill);
                                }}
                            >
                                <img
                                    src={skillSrcMap[skill]}
                                    className="w-8 aspect-square select-none inside-shadow-[0.125]"
                                ></img>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-row justify-center items-center gap-2 text-center">
                    <span className="text-sm">Showcases all the selected skills</span>
                    <Switch checked={enabled} onCheckedChange={setEnabled} />
                    <span className="text-sm">Showcases any of the selected skills</span>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 ">
                    <AnimatePresence>
                        {Object.entries(projects)
                            .filter(([_, project]) => {
                                if (state.length === 0) return true;
                                if (enabled) {
                                    return state.some((skill) => project.skills.includes(skill));
                                } else {
                                    return state.every((skill) => project.skills.includes(skill));
                                }
                            })
                            .map(([projectName, project]) => {
                                return (
                                    <motion.div
                                        key={projectName}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Project
                                            title={projectName}
                                            href={project.link}
                                            description={project.details}
                                            skills={project.skills}
                                        />
                                    </motion.div>
                                );
                            })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
