import { useEffect, useRef, RefObject } from "react";
import NavLink from "./NavLink";
import { general } from "@/lib/data";

function setHeaderHeight(header: RefObject<HTMLHeadElement | null>) {
    return () => {
        document.documentElement.style.setProperty("--header-height", `${header.current?.offsetHeight ?? 0}px`);
    };
}

export default function Header() {
    const header = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const heightSetter = setHeaderHeight(header);
        heightSetter();
        header.current?.addEventListener("resize", heightSetter);
    });
    return (
        <header
            className="text-primary-foreground sticky top-0 flex flex-row justify-around items-center p-4 dim z-10"
            ref={header}
        >
            <h1
                className="m-0 text-4xl cursor-pointer hover:text-green-500"
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            >
                {general.name}
            </h1>
            <nav className="flex flex-row justify-around gap-4 max-lg:hidden">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </nav>
        </header>
    );
}
