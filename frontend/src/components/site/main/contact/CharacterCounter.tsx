interface CharacterCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
    characters: number;
    characterLimit: number;
}

export default function CharacterCounter({ characters, characterLimit, ...props }: CharacterCounterProps) {
    return (
        <>
            <span {...props}>
                <span className={characters <= 0 || characters > characterLimit ? "text-destructive" : ""}>
                    {characters}
                </span>
                /{characterLimit}
            </span>
        </>
    );
}
