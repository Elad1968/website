import NavLink from "./NavLink";
import { general } from "@/lib/data";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Header() {
    return (
        <header className="sticky top-0 flex flex-row justify-around items-center p-4 dim z-10">
            <h1 className="m-0 text-4xl hover:text-green-500">
                <a href="#">{general.name}</a>
            </h1>
            <ThemeSwitcher className="text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 border border-foreground cursor-pointer" />
            <nav className="flex flex-row justify-around gap-4 max-lg:hidden">
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </nav>
        </header>
    );
}
