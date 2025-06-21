import { config } from "dotenv";
import SMTPTransport from "nodemailer/lib/smtp-transport/index.js";
import { z } from "zod";

type MailerConfig = {
    config: SMTPTransport.Options;
    sender: string;
    receiver: string;
};

export let mailerConfig: MailerConfig;

function main() {
    const envSchema = z.object({
        CONTACT_USER: z.string().email(),
        CONTACT_PASS: z.string().nonempty(),
        CONTACT_HOST: z.string().nonempty(),
        CONTACT_PORT: z.string().nonempty(),
        CONTACT_SENDER: z.string().email(),
        CONTACT_RECEIVER: z.string().email(),
    });
    config();
    const env = envSchema.parse(process.env);
    mailerConfig = {
        config: {
            host: env.CONTACT_HOST,
            port: Number(env.CONTACT_PORT),
            secure: true,
            auth: {
                user: env.CONTACT_USER,
                pass: env.CONTACT_PASS,
            },
        },
        sender: env.CONTACT_SENDER,
        receiver: env.CONTACT_RECEIVER,
    };
}

main();
