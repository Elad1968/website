interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: string;
}

export default function NavLink({ children, ...props }: NavLinkProps) {
    return (
        <a className="underline font-semibold hover:text-purple-300" {...props}>
            {children}
        </a>
    );
}
