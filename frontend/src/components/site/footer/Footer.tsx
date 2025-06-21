import { footer, general } from "@/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react/jsx-runtime";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-evenly items-center p-4 min-h-[var(--header-height)] dim gap-4 max-[480px]:text-sm text-center">
            <div className="flex flex-row flex-wrap gap-4 max-w-full justify-center">
                {Object.values(footer.contact).map((contactInfo, index) => {
                    return (
                        <Fragment key={index}>
                            {index > 10 && <span>|</span>}
                            <span className="flex flex-row gap-2 items-center justify-center">
                                <FontAwesomeIcon
                                    icon={contactInfo.icon}
                                    className="hover:wiggled hover:repeat-1 hover:ease-linear hover:duration-500"
                                />
                                {contactInfo.text}
                            </span>
                        </Fragment>
                    );
                })}
            </div>
            <span>
                <span className="inline-block hover:rotated hover:repeat-infinite hover:duration-2000 hover:ease-linear cursor-default select-none">
                    ©
                </span>
                {` ${footer.copyright.start}-${footer.copyright.end}, ${general.name}, All
                rights reserved.`}
            </span>
        </footer>
    );
}
