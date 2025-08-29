import { Button } from "@/components/ui/button";

type IntroductionButtonProps = {
    href: string;
    children?: React.ReactNode;
};

export default function IntroductionButton({ href, children }: IntroductionButtonProps) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : "_self"}
            className="inline-flex justify-between items-center gap-2 grow w-32 border-transparent border-2 hover:border-[var(--color-background)] hover:border-highlighted border-unhighlighted rounded-md overflow-hidden duration-250 ease-linear"
        >
            <Button className="cursor-pointer w-full grow hover:bg-foreground rounded-none">{children}</Button>
        </a>
    );
}
