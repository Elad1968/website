interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: string;
}

export default function NavLink({ href, children, ...props }: NavLinkProps) {
    return (
        <a
            className="text-primary-foreground underline cursor-pointer font-semibold hover:text-purple-300"
            {...props}
            onClick={() => {
                const element = document.querySelector(href);
                if (!element) return;
                const y = window.scrollY;
                const top = element.getBoundingClientRect().top;
                const offset = Number(
                    document.documentElement.style.getPropertyValue("--header-height").replace("px", "")
                );
                window.scrollTo({
                    top: y + top - offset,
                    behavior: "smooth",
                });
            }}
        >
            {children}
        </a>
    );
}
