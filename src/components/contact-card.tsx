import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const ContactCard = () => {
  return (
    <Card className="contact-card-gradient py-20 px-10 gap-5 border-1 border-slate-200">
      <div className="heading-2 font-semibold text-center">
        An AI architect with proven enterprise experience
      </div>

      <div className="heading-3 text-center">
        Available for consulting and architecture advisory roles
      </div>
      <div className="flex justify-center">
        <Button className="bg-primary text-primary-foreground py-2.5 px-5 font-bold text-base leading-6 rounded-[6px]" >
          <Link href="/contact"> Schedule a Consultation </Link>
        </Button>
      </div>
    </Card>
  );
};

export default ContactCard;