"use client";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";

const navItems = [
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

const Navbar = () => {
  const activeId = useActiveSection(navItems.map((item) => item.link.slice(1)));

  return (
    <header>
      <nav className="fixed top-0 inset-x-0 mx-auto w-[calc(100%-48px)] tablet:max-w-[1024px] mt-6 h-[var(--nav-height)] px-5 bg-background z-50 rounded-lg shadow-md flex justify-between items-center">
        <Link
          href="/"
          className="font-semibold text-lg cursor-pointer hover:text-primary"
        >
          Tilak Joshi
        </Link>

        <div className="hidden tablet:flex gap-6 heading-6 font-semibold">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className={
                activeId == item.link ? "text-primary" : "text-foreground"
              }
            >
              {item.text}
            </a>
          ))}
        </div>

        <div className="flex gap-5 items-center">
          <Button className="bg-primary hidden mobile:inline-flex">
            Let&apos;s connect
          </Button>
          <Menu className="block tablet:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
