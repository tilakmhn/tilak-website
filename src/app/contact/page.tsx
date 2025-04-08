import React from "react";
import ContactForm from "@/components/contact/contact-form";
import MeetingDetails from "@/components/contact/meeting-details";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tilak Joshi",
  description:
    "Get in touch with Tilak Joshi. Schedule a consultation, ask questions, or discuss collaboration opportunities. Reach out through the contact form or schedule a meeting.",
};

const ContactPage = () => {
  return (
    <section
      id="contact"
      className="px-4 py-5 flex flex-col gap-6 tablet:gap-8"
    >
      <MeetingDetails />

      <ContactForm />
    </section>
  );
};

export default ContactPage;
