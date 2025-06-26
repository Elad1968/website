interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: string;
}

export default function NavLink({ children, ...props }: NavLinkProps) {
    return (
        <a className="text-primary-foreground underline cursor-pointer font-semibold hover:text-purple-300" {...props}>
            {children}
        </a>
    );
}
