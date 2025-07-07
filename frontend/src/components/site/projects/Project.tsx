import { skillSrcMap } from "@/lib/data";

type ProjectProps = {
    title: string;
    href: string;
    description: string;
    skills: readonly (keyof typeof skillSrcMap)[];
};

export default function Project({ title, href, description, skills }: ProjectProps) {
    return (
        <a
            className="glass-0.5 shadowed-0.5 w-128 flex flex-col items-center p-4 rounded-lg border border-black gap-4 max-w-[90vw]"
            href={href}
            target="_blank"
            data-selectable
        >
            <h4 className="text-2xl underline">{title}</h4>
            <div className="flex flex-row gap-4">
                <img
                    src={`/assets/images/projects/${title.toLowerCase().replaceAll(" ", "-")}.png`}
                    alt={title}
                    className="w-32 aspect-square max-lg:hidden inside-shadow-[0.25]"
                />
                {description && <p className="max-h-32 overflow-scroll">{description}</p>}
            </div>
            {skills && (
                <>
                    <hr className="border-black border-1 border-dashed w-full" />
                    <div className="flex flex-row flex-wrap gap-4 justify-center">
                        {skills.map((skill, index) => {
                            return (
                                <div
                                    className="glass-0.5 rounded-lg p-1 border-black border-1"
                                    key={index}
                                    title={skill}
                                >
                                    <img src={skillSrcMap[skill]} alt={skill} className="aspect-square h-8" />
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </a>
    );
}
