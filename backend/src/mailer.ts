import { Transporter, createTransport } from "nodemailer";
import { Message } from "./message.js";
import he from "he";
const { encode } = he;
import { mailerConfig } from "./data.js";
import format from "string-format";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

function encodeMessage(message: Message) {
    for (const key in message) {
        const typedKey = key as keyof Message;
        message[typedKey] = encode(message[typedKey]);
    }
}

async function getHtmlTemplate(message: Message): Promise<string> {
    let html: string;
    if (process.env.NODE_ENV === "production") {
        html = require("./html/contact.html");
    } else {
        const file = fileURLToPath(import.meta.url);
        const directory = dirname(file);
        html = await readFile(join(directory, "html/contact.html"), "utf-8");
    }
    return format(html, message);
}

function getTextTemplate(message: Message): string {
    return `They want you to reply to ${message.email}. This is their message: ${message.message}`;
}

export async function send(message: Message): Promise<void> {
    const mailer: Transporter = createTransport(mailerConfig.config);
    encodeMessage(message);
    const mail = {
        from: `"Contact form" <${mailerConfig.sender}>`,
        to: mailerConfig.receiver,
        subject: `${message.name} tried to contact you!`,
        text: getTextTemplate(message),
        html: await getHtmlTemplate(message),
    };
    await mailer.sendMail(mail);
}
