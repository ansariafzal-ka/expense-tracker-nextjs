import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section className="p-6 md:max-w-[600px]" id="contact">
      <h1 className="text-xl font-bold mb-5">Contact Us</h1>
      <form className="flex flex-col justify-center items-start gap-3">
        <Label>Your Name</Label>
        <Input type="text" required />
        <Label>Email</Label>
        <Input type="email" required />
        <Label>Your Query</Label>
        <Textarea required />
        <Button type="submit" className="mt-2">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Contact;
