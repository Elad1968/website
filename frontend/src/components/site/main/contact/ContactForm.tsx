import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Message, messageSchema, characterLimit } from "^/message";
import { Answer, answerSchema } from "^/answer";
import CharacterCounter from "./CharacterCounter";
import { useState } from "react";
import { z } from "zod/v4-mini";

interface ContactFormProps extends React.HTMLAttributes<HTMLFormElement> {
    url: string;
}

export default function ContactForm({ url }: ContactFormProps) {
    const options = {
        resolver: zodResolver(messageSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    };
    const form = useForm(options);
    const [response, setResponse] = useState<Answer>({ message: "", error: false });
    const urlResult = z.url().safeParse(url);
    return (
        (urlResult.success && (
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(async (message: Message) => {
                        const options = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(message),
                        };
                        try {
                            const response = await fetch(url, options);
                            const answer = answerSchema.parse(await response.json());
                            setResponse(answer);
                        } catch {
                            setResponse({ message: "Failed to send the message.", error: true });
                        }
                    })}
                    className="flex flex-col gap-4 max-w-lg w-full aspect-2/3 p-4 border rounded-sm border-black glass-0.5 shadowed-0.5 flex-1"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <Input {...field} placeholder="Enter your name" className="bg-white" />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <Input {...field} placeholder="Enter your email" className="bg-white" />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="flex-1 flex flex-col">
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                    {...field}
                                    placeholder="Enter your message"
                                    className="grow resize-none bg-white"
                                />
                                <div className="flex flex-row justify-between items-center gap-2 text-sm">
                                    <FormMessage />
                                    <CharacterCounter
                                        characters={form.watch("message").length}
                                        characterLimit={characterLimit}
                                        className="ml-auto"
                                    />
                                </div>
                            </FormItem>
                        )}
                    />
                    {response.message && (
                        <span
                            id="form-response flex-grow"
                            className={response.error ? "text-destructive" : "text-(--success)"}
                        >
                            {response.message}
                        </span>
                    )}
                    <Button type="submit" className="w-full cursor-pointer" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Please wait..." : "Send"}
                    </Button>
                </form>
            </Form>
        )) || (
            <span className="text-destructive">
                ERROR: The variable "VITE_CONTACT_URL" that is set to "{import.meta.env.VITE_CONTACT_URLL}" is not a
                proper URL.
            </span>
        )
    );
}
