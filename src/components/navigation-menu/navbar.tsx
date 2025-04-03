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
    <nav className="fixed top-6 left-6 z-50 w-[394px] h-[84px] p-5 bg-white rounded-lg shadow-md flex justify-between items-center">
      <span
        id="logo"
        className="font-semibold text-[18px] leading-7 tracking-normal"
      >
        Tilak Joshi
      </span>
      <div id="nav-items" className="hidden tablet:flex">
        {navItems.map((navItem, idx) => (
          <div key={idx}>
            <a href={navItem.link}>{navItem.text}</a>
          </div>
        ))}
      </div>
      <div id="nav-menu" className="flex gap-5 items-center">
        <Button className="bg-primary rounded-[6px] py-2.5 px-5 font-bold text-lg leading-6 gap-2.5 h-11">
          Let's connect
        </Button>
        <Menu className="block tablet:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
