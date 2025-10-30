import { skills } from "@/lib/data";
import SectionHeader from "@/components/site/common/SectionHeader";
import Skillset from "./Skillset";

export default function Skills() {
    return (
        <section id="skills" className="flex flex-col justify-evenly items-center gap-4 screen">
            <SectionHeader>Skills</SectionHeader>
            {Object.entries(skills).map(([category, skills], index) => {
                return <Skillset title={category} skills={skills} key={index} />;
            })}
        </section>
    );
}
