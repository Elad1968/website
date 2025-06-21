import { z } from "zod/v4";

export const characterLimit: number = 1024;

export const messageSchema = z.object({
    name: z
        .string()
        .nonempty("Your name can't be empty.")
        .max(characterLimit, `Your name can't be over ${characterLimit} characters.`),
    email: z
        .email("Invalid email address.")
        .max(characterLimit, `Your email address can't be over ${characterLimit} characters.`),
    message: z
        .string()
        .nonempty("Your message can't be empty.")
        .max(characterLimit, `Your message can't be over ${characterLimit} characters.`),
});

export type Message = z.infer<typeof messageSchema>;
