import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

export default function Site() {
    const mainElements = [<About />, <Skills />, <Projects />, <Contact />] as const;
    const colors = [
        "bg-[var(--rainbow-orange)]",
        "bg-[var(--rainbow-yellow)]",
        "bg-[var(--rainbow-green)]",
        "bg-[var(--rainbow-blue)]",
        "bg-[var(--rainbow-indigo)]",
    ] as const;
    const degrees = ["rotate-[2.5deg]", "-rotate-[2.5deg]"] as const;
    return (
        <div
            className="flex flex-col p-0 m-0 w-screen min-h-screen bg-orange-800 max-[256px]:hidden"
            onDragStart={(event) => {
                event.preventDefault();
            }}
        >
            <Header />
            <main className="flex flex-col grow-1">
                <Introduction />
                {mainElements.map((element, index) => {
                    return (
                        <div key={index} className={`${colors[index]}`}>
                            <hr
                                className={`my-[calc((50vw)*tan(2.5deg))] flex-shrink-1 relative border-black border-y-2 border-dashed ${
                                    degrees[index % 2]
                                }`}
                            />
                            {element}
                        </div>
                    );
                })}
            </main>
            <Footer />
        </div>
    );
}
