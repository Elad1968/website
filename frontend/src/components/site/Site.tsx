import { Fragment } from "react/jsx-runtime";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

export default function Site() {
    const mainElements = [<About />, <Skills />, <Projects />, <Contact />] as const;
    const degrees = ["rotate-[var(--section-separator-angle)]", "-rotate-[var(--section-separator-angle)]"] as const;
    return (
        <div
            className="flex flex-col p-0 m-0 w-screen min-h-screen bg-orange-800 max-[256px]:hidden"
            onDragStart={(event) => {
                event.preventDefault();
            }}
        >
            <Header />
            <main className="flex flex-col grow">
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
            <Footer />
        </div>
    );
}
