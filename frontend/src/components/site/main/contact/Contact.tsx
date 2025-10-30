import { contact } from "@/lib/data";
import SectionHeader from "@/components/site/common/SectionHeader";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="flex flex-col items-center gap-4 screen">
            <SectionHeader>Contact me</SectionHeader>
            <span className="text-center max-w-lg">
                If you like what you saw, feel free to contact me. The form below sends me an email and lets me know you
                have reached out.
            </span>
            <ContactForm url={contact.url} />
        </section>
    );
}
