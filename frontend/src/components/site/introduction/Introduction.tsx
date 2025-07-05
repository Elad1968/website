import IntroductionButton from "./IntroductionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronDown } from "lucide-react";
import { general, introduction } from "@/lib/data";

export default function Introduction() {
    return (
        <section id="introduction" className="flex flex-col items-center justify-between screen p-4">
            <div className="flex grow items-center justify-evenly p-4 flex-1 w-full gap-4">
                <div className="flex flex-col gap-4 max-lg:self-start flex-1 max-w-128 fade-to-view duration-500">
                    <span className="text-5xl">Hello!</span>
                    <div className="text-5xl">
                        <span>I'm </span>
                        <span className="font-bold name">{general.name}</span>
                    </div>
                    <span className="text-3xl">{introduction.about}</span>
                    <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
                        {Object.entries(introduction.buttons).map(([buttonName, button], index) => {
                            return (
                                <IntroductionButton href={button.link} key={index}>
                                    <FontAwesomeIcon icon={button.icon} />
                                    {buttonName}
                                </IntroductionButton>
                            );
                        })}
                    </div>
                </div>
                <img
                    src="/assets/images/profile.jpg"
                    alt="Profile picture"
                    className="shadowed-0.5 max-w-96 border-4 border-black rounded-xl w-full max-lg:hidden fade-to-view delay-500"
                />
            </div>
            <a
                className="flex flex-col items-center gap-2 stretch-down fade-to-view delay-1000 no-underline text-inherit"
                href="#about"
            >
                <p className="text-sm">Scroll down to discover more about me!</p>
                <div className="bounced duration-750 ease-in-out repeat-infinite">
                    <ChevronDown className="w-8 h-8" />
                </div>
            </a>
        </section>
    );
}
