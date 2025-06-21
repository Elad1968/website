export default function SectionHeader(props: React.HTMLAttributes<HTMLElement>) {
    return (
        <h1 className="underlined text-8xl font-bold max-lg:text-5xl text-center" {...props}>
            {props.children}
        </h1>
    );
}
