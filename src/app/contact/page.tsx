import React from "react";
import { Metadata } from "next";
import { ContactForm, MeetingDetails } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Tilak Joshi",
  description:
    "Get in touch with Tilak Joshi. Schedule a consultation, ask questions, or discuss collaboration opportunities. Reach out through the contact form or schedule a meeting.",
};

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="mt-[var(--margin-blog)] mobile:px-4 py-5 flex flex-col gap-6 tablet:gap-8"
    >
      <h1 className="heading-1 font-semibold text-center">Build Your Next AI Strategy</h1>
      <MeetingDetails />
      <ContactForm />
    </section>
  );
};

export default ContactPage;
