import { projects } from "@/lib/data";
import SectionHeader from "../common/SectionHeader";
import Project from "./Project";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center gap-4 screen">
            <SectionHeader>Projects</SectionHeader>
            <span className="text-center">Click on any of the projects to go to the repository.</span>
            <div className="flex flex-wrap justify-center items-center gap-8 ">
                {Object.entries(projects).map(([projectName, project], index) => {
                    return (
                        <Project
                            title={projectName}
                            href={project.link}
                            description={project.details}
                            skills={project.skills}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
}
