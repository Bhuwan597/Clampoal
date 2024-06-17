import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(3, {message: "Your name must be 3 characters long"}).max(30, {message: "Your name cannot exceed 30 characters."}),
    company: z.string().min(3, {message: "Your company name must be 3 characters long"}).max(30, {message: "Your company name cannot exceed 30 characters."}),
    email: z.string().email({message: "Valid email address is required."}),
    subject: z.string().min(3, {message: "Subject must be 3 characters long"}).max(30, {message: "Subject cannot exceed 30 characters."}),
    message: z.string().min(20, {message: "Message must be 20 characters long"}).max(300, {message: "Message cannot exceed 30 characters."}),
});