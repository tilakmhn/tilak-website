"use client";

import ContactForm from "@/components/contact/contact-form";
import MeetingDetails from "@/components/contact/meeting-details";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

const ContactPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <section
      id="contact"
      className="px-4 py-5 flex flex-col tablet:flex-row gap-6 tablet:gap-8"
    >
      <div className="flex flex-col mobile:flex-row justify-between items-center mobile:items-start">
        <MeetingDetails />
        <div className="flex flex-col gap-4">
          <h4 className="heading-4 font-semibold">Select a Date and Time</h4>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border max-w-fit max-h-fit"
            initialFocus
          />
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
