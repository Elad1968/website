import z from "zod";

export const answerSchema = z.object({
    message: z.string(),
    error: z.boolean(),
});

export type Answer = z.infer<typeof answerSchema>;
