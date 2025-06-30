import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Introduction from "./introduction/Introduction";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

export default function Site() {
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
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
