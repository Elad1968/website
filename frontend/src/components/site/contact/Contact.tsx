import { contact } from "@/lib/data";
import SectionHeader from "../common/SectionHeader";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center gap-4 screen">
            <SectionHeader>Contact me</SectionHeader>
            <ContactForm url={contact.url} />
        </section>
    );
}
