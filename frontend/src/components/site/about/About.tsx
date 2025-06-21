import { about } from "@/lib/data.ts";
import SectionHeader from "../common/SectionHeader.tsx";

export default function About() {
    return (
        <section id="about" className="flex flex-col items-center screen gap-4">
            <SectionHeader>About me</SectionHeader>
            <div className="flex flex-col items-center justify-evenly gap-4">
                {about.text.map((text, index) => {
                    return (
                        <p className="text-2xl max-w-192 w-full flex-grow" key={index}>
                            {text}
                        </p>
                    );
                })}
            </div>
        </section>
    );
}
