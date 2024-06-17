"use client";
import React from "react";
import ContainerSection from "./partials/ContainerSection";
import { Form, FormField, FormLabel } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { formSchema } from "../../schemas/formSchema";
import { Textarea } from "./ui/textarea";

export interface FormDataInterface {
    name?: string;
    company?: string;
    email?: string;
    subject?: string;
    message?: string;
  }

const ContactUs = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = (data: FormDataInterface) => {
    alert(`Dear ${data.name}, form submitted successfully!`);
    form.reset();
  };

  return (
    <ContainerSection className="bg-form-wave bg-no-repeat flex flex-col items-center justify-start gap-16 py-20">
      <div className="text-white text-2xl md:text-5xl text-center space-y-4 font-bold">
        <h2>Feel free to contact us.</h2>
        <h2>We&apos;ll glad to hear from you.</h2>
      </div>
      <Form {...form}>
        <form
          className="bg-white rounded-md shadow-2xl flex flex-col items-start justify-center gap-4 w-full md:w-[60%] p-8 font-semibold mb-32"
          onSubmit={form.handleSubmit(handleFormSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <>
                <FormLabel className="font-bold text-lg md:text-lg text-primary-font">Your name</FormLabel>
                <Input {...field} className="w-full" />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <>
                <FormLabel className="font-bold text-lg md:text-xl text-primary-font">Your company name</FormLabel>
                <Input {...field} className="w-full" />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <>
                <FormLabel className="font-bold text-lg md:text-xl text-primary-font">Your email</FormLabel>
                <Input {...field} className="w-full" />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <>
                <FormLabel className="font-bold text-lg md:text-xl text-primary-font">Subject</FormLabel>
                <Input {...field} className="w-full" />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <>
                <FormLabel className="font-bold text-lg md:text-xl text-primary-font">Message</FormLabel>
                <Textarea {...field} className="w-full" />
              </>
            )}
          />
          <Button type="submit" variant="outline" className="p-6 bg-blue-primary text-white hover:bg-slate-100 w-full text-lg md:text-xl rounded-xl">Send</Button>
        </form>
      </Form>
    </ContainerSection>
  );
};

export default ContactUs;
