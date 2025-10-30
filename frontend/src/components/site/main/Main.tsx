import Introduction from "@/components/site/introduction/Introduction";
import { Fragment } from "react/jsx-runtime";
import About from "@/components/site/about/About";
import Projects from "@/components/site/projects/Projects";
import Skills from "@/components/site/skills/Skills";
import Contact from "@/components/site/contact/Contact";

const mainElements = [<About />, <Skills />, <Projects />, <Contact />] as const;
const degrees = ["rotate-[var(--section-separator-angle)]", "-rotate-[var(--section-separator-angle)]"] as const;

export default function Main() {
    return (
        <main className="snap-y snap-mandatory">
            <Introduction />
            {mainElements.map((element, index) => {
                return (
                    <Fragment key={index}>
                        <hr
                            className={`my-[calc((50vw)*tan(var(--section-separator-angle)))] shrink relative border-foreground border-y-2 border-dashed ${
                                degrees[index % 2]
                            }`}
                        />
                        {element}
                    </Fragment>
                );
            })}
        </main>
    );
}
