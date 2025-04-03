import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const navItems = [
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
    text: "Projects",
    link: "#",
  },
  {
    text: "Blog",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 inset-x-0 mx-auto w-[calc(100%-48px)] tablet:max-w-[1024px] mt-6 h-21 px-5 bg-background z-50 rounded-lg shadow-md flex justify-between items-center">
        <span className="font-semibold text-lg">Tilak Joshi</span>

        <div className="hidden tablet:flex gap-6">
          {navItems.map((item, idx) => (
            <a key={idx} href={item.link} className="hover:text-primary">
              {item.text}
            </a>
          ))}
        </div>

        <div className="flex gap-5 items-center">
          <Button className="bg-primary hidden mobile:inline-flex">
            Let's connect
          </Button>
          <Menu className="block tablet:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
