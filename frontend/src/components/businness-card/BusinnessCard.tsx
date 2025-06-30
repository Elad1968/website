import { card, general } from "@/lib/data";

export default function BusinessCard() {
    return (
        <div className="business-card min-[256]:hidden">
            <h1>{general.name}</h1>
            <span className="font-semibold">{card.title}</span>
            <a href={`mailto:${general.mail}`}>{general.mail}</a>
            <a href={`tel:${general.phone}`}>{general.phone}</a>
        </div>
    );
}
