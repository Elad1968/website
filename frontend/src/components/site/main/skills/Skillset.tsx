import { skillSrcMap } from "@/lib/data";
import Skill from "./Skill";

interface SkillsetProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    skills?: readonly (keyof typeof skillSrcMap)[];
}

export default function Skillset({ title, skills, ...props }: SkillsetProps) {
    return (
        <div className="flex flex-col justify-evenly items-center gap-1 max-w-screen" {...props}>
            <h4 className="text-2xl text-center">{title}</h4>
            {skills && (
                <div className="flex gap-6 px-4 flex-wrap items-center justify-center content-center">
                    {skills.map((skill, index) => {
                        return <Skill title={skill} key={index} />;
                    })}
                </div>
            )}
        </div>
    );
}
