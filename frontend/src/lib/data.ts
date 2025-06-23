import { faGithub, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile, faPhone } from "@fortawesome/free-solid-svg-icons";

export const skillSrcMap = {
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    Express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    SQLite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    MSSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    CMake: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cmake/cmake-original.svg",
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    Gradle: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
    Bash: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
    PowerShell: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    Windows: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
    Android: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
    Qt: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qt/qt-original.svg",
    WPF: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg",
} as const;

type General = {
    name: string;
    mail: string;
    phone: string;
};

type Introduction = {
    about: string;
    buttons: {
        [key: string]: {
            icon: IconDefinition;
            link: string;
        };
    };
};

type About = {
    text: string[];
};

type Skills = { [key: string]: (keyof typeof skillSrcMap)[] };

type Projects = {
    [key: string]: {
        details: string;
        link: string;
        skills: (keyof typeof skillSrcMap)[];
    };
};

type Contact = {
    url: string;
};

type Footer = {
    contact: {
        [key: string]: {
            icon: IconDefinition;
            text: string;
        };
    };
    copyright: {
        start: number;
        end: number;
    };
};

type Card = {
    title: string;
};

export const general: General = {
    name: "Elad Huttner",
    mail: "mail@eladhuttner.net",
    phone: "+972-55-668-4427",
} as const;

export const introduction: Introduction = {
    about: "A B.Sc. computer sceince student and a passionate software developer.",
    buttons: {
        GitHub: {
            icon: faGithub,
            link: "https://github.com/Elad1968",
        },
        LinkedIn: {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/elad-huttner-949741291/",
        },
        Resume: {
            icon: faFile,
            link: "/assets/documents/elad_huttner_resume.pdf",
        },
        Mail: {
            icon: faEnvelope,
            link: `mailto:${general.mail}`,
        },
        Phone: {
            icon: faPhone,
            link: `tel:${general.phone}`,
        },
    },
} as const;

export const about: About = {
    text: [
        "I'm a computer science student who really enjoys building software, whether it's something behind the scenes like system tools or something more interactive like web or mobile apps. I like figuring out how things work, writing clean, readable code, and solving problems in a way that actually makes sense.",
        "Over the past few years, I've worked on a bunch of projects that gave me the chance to explore different areas of software development, from backend logic to user interfaces. I enjoy experimenting with new technologies and picking up new skills along the way. Each project has helped me understand not just how to code, but how to think like a developer and make thoughtful design decisions.",
        "I've also taken part in some training programs focused on real world development practices, and even assisted in a Linux course, which was a great way to learn by teaching. These experiences taught me a lot about working with others, explaining technical ideas clearly, and staying curious even when things get challenging.",
        "Right now, I'm focused on growing as a developer and learning as much as I can. I'm especially interested in topics like algorithms, software architecture, and building tools or products that are both useful and enjoyable to use. Whether it's through coursework, side projects, or just messing around with code, I'm always looking for ways to improve and push myself forward.",
    ],
} as const;

export const skills: Skills = {
    "Programming Languages": ["C", "C++", "Python", "JavaScript", "TypeScript", "C#", "Java"],
    "Web Technologies": ["HTML", "CSS", "Node.js", "React", "Tailwind", "Bootstrap", "Express", "Flask"],
    Databases: ["MySQL", "SQLite", "MSSQL", "PostgreSQL", "MongoDB"],
    "Build Systems": ["CMake", "Vite", "Gradle"],
    DevOps: ["Bash", "PowerShell", "Git", "Linux", "Windows"],
    "UI development": ["Android", "Qt", "WPF"],
} as const;

export const projects: Projects = {
    "Presentation AI Explainer": {
        details:
            "A web server and client that enables the user to upload presentations to be summarized by an AI explainer, with file management, asynchronous API requests, and continuous processing.",
        link: "https://github.com/Elad1968/web-gpt-explainer",
        skills: ["Python", "Flask"],
    },
    "Star Wars game": {
        details:
            "A terminal, turn based Star Wars game featuring different types of controllable spaceships with the goal of collecting gems. Uses the model view controller, abstract factory and singleton design patterns.",
        link: "https://github.com/Elad1968/star-wars-game",
        skills: ["C++"],
    },
    "Bug Tracker": {
        details:
            "A Windows GUI bug tracking system for projects, using various storage formats, such as memory, JSON files and MSSQL databases. Uses the abstract factory, composite and repository design patterns.",
        link: "https://github.com/Elad1968/bug-tracker",
        skills: ["C#", "WPF", "MSSQL"],
    },
    "Polynomials App": {
        details:
            "A Polynomials calculator Android app that can store, manipulate and show polynomials and their graphs.",
        link: "https://github.com/Elad1968/polynomials-android-app",
        skills: ["Java", "Android", "SQLite", "Gradle"],
    },
    "Linux Shell": {
        details:
            "A shell that can perform various tasks, such as running commands (foreground and background jobs), using environment variables, piping data and more.",
        link: "https://github.com/Elad1968/shell",
        skills: ["C++", "Linux", "CMake"],
    },
    MYFS: {
        details:
            "A file system emulator that can manipulate and store files and directories inside a file. Implements the three layers of a file system driver: The virtual layer, The file system layer and the block layer.",
        link: "https://github.com/Elad1968/file-system",
        skills: ["C++", "Linux", "CMake"],
    },
    Tasks: {
        details:
            "A tasks web app for managing daily to-dos. Has account management, cloud saving and note editing features.",
        link: "https://github.com/Elad1968/tasks",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express", "MongoDB"],
    },
    Website: {
        details:
            "A personal portfolio website to showcase my skills, experience, and projects. The frontend has a fast and responsive user interface and the backend handles a contact form securely and efficiently.",
        link: "https://github.com/Elad1968/website",
        skills: ["TypeScript", "React", "Tailwind", "Vite", "Node.js", "Express"],
    },
} as const;

export const contact: Contact = {
    url: import.meta.env.VITE_CONTACT_URL,
} as const;

export const footer: Footer = {
    contact: {
        mail: {
            icon: faEnvelope,
            text: general.mail,
        },
        phone: {
            icon: faPhone,
            text: general.phone,
        },
    },
    copyright: {
        start: 2021,
        end: new Date().getFullYear(),
    },
} as const;

export const card: Card = {
    title: "Software Developer",
} as const;
