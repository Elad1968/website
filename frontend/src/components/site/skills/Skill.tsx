import { skillSrcMap } from "@/lib/data";

type SkillProps = {
    title: keyof typeof skillSrcMap;
};

export default function Skill({ title }: SkillProps) {
    return (
        <div
            className="glass-0.5 shadowed-0.5 flex flex-col gap-2 p-4 rounded-sm text-center border-1 border-solid border-black shrink-0 min-w-32"
            data-selectable
        >
            <img src={skillSrcMap[title]} alt={title} className="aspect-square h-16 min-w-12 inside-shadow-[0.25]" />
            <hr className="border-black" />
            <span>{title}</span>
        </div>
    );
}
