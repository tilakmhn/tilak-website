import { Linkedin, Mail } from "lucide-react";
import React from "react";

const footerLinks = [
  {
    text: "About",
    link: "#",
  },
  {
    text: "Experience",
    link: "#",
  },
  {
    text: "Expertise",
    link: "#",
  },
  {
    text: "Testimonials",
    link: "#",
  },
  {
    text: "Projects",
    link: "#",
  },
  {
    text: "Blog",
    link: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-10 bg-[#06062C] text-primary-foreground flex flex-col gap-2">
      <div className="flex flex-col gap-5">
        <h3 className="heading-3 font-semibold">Tilak Joshi</h3>
      </div>
      <ul className="flex flex-col gap-5 text-lg font-normal leading-7">
        {footerLinks.map((item, idx) => (
          <li key={idx}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-10">
        <div id="contact-buttons" className="flex items-center gap-10">
          <button className="py-2.5 px-5 rounded-[6px] text-primary bg-background font-bold text-base leading-7">
            Schedule a consultation
          </button>
          <div className="flex gap-2.5">
            <Mail />
            <Linkedin />
          </div>
        </div>
        <div id="copyright-info">
          &copy; Copyright {currentYear} . Tilak Joshi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
