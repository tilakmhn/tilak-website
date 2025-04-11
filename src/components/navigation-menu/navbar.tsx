"use client";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";
import { useState } from "react";
import { cn ,scrollToSection} from "@/lib/utils";

const navItems = [
  { text: "About", link: "#about" },
  { text: "Experience", link: "#experience" },
  { text: "Expertise", link: "#expertise" },
  { text: "Projects", link: "#projects" },
  { text: "Blog", link: "/blog" },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.link.slice(1)));

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <nav className="fixed top-0 inset-x-0 mx-auto w-[calc(100%-24px)] mobile:[calc(100%-48px)] tablet:max-w-[calc(var(--container-6xl)+40px)] h-[var(--nav-height)] px-5 bg-background z-50 rounded-lg shadow-md flex justify-between items-center">
        <Link
          href="/"
          className="font-semibold text-lg leading-7 tracking-normal cursor-pointer hover:text-primary"
        >
          Tilak Joshi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden tablet:flex gap-6 text-base">
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => scrollToSection(item.link)}
              className={cn(
                "hover:text-primary transition-colors",
                activeId === item.link && "text-primary"
              )}
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex gap-4 items-center">
          <Button className="bg-primary hidden mobile:inline-flex text-base font-bold leading-6" asChild>
            <Link href="/contact">Let&apos;s connect</Link>
          </Button>
          <button
            onClick={toggleMenu}
            className="tablet:hidden p-2 rounded-lg hover:bg-gray-300 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute tablet:hidden top-full left-0 right-0 bg-background mt-2 shadow-lg rounded-b-lg">
            <div className="flex flex-col p-4 gap-3 heading-6">
              {navItems.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={toggleMenu}
                  className={cn(
                    "py-2 px-4 rounded-lg hover:bg-gray-300",
                    activeId === item.link && "text-primary"
                  )}
                >
                  {item.text}
                </a>
              ))}
              <Button className="bg-primary mobile:hidden" asChild>
                <Link href="/contact">Let&apos;s connect</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
