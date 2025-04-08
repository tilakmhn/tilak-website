import { Mail } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    text: "About",
    link: "#about",
  },
  {
    text: "Experience",
    link: "#experience",
  },
  {
    text: "Expertise",
    link: "#expertise",
  },

  {
    text: "Projects",
    link: "#projects",
  },
  {
    text: "Blog",
    link: "/blog",
  },
];

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={cn(className)}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const emailAddress = "demo@example.com";
  const linkedinUrl = "https://www.linkedin.com/in/connectilak/";

  return (
    <footer className="p-5 bg-footer text-primary-foreground flex flex-col tablet:flex-row tablet:justify-between gap-8">
      <div className="flex flex-col tablet:items-start gap-5">
        <h3 className="heading-3 font-semibold">Tilak Joshi</h3>

        <ul className="heading-5 font-semibold grid grid-cols-2 mobile:grid-cols-3 gap-5 heading-4 tablet:flex tablet:justify-between">
          {footerLinks.map((item) => (
            <li key={item.text}>
              <a
                href={item.link}
                className="hover:text-primary transition-colors"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col mobile:flex-row mobile:justify-between items-start mobile:items-center gap-5">
        <div className="inline-flex gap-4 p-2">
          <a
            href={`mailto:${emailAddress}`}
            target="_blank"
            className="bg-background p-1.5 rounded-sm"
          >
            <Mail className="h-6 w-6 text-footer" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            className="bg-background p-1.5 rounded-sm"
          >
            <LinkedInIcon className="h-6 w-6 text-footer" />
          </a>
        </div>
        <div className="text-muted-foreground mobile:text-right">
          &copy; Copyright {currentYear} . Tilak Joshi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
