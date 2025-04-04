/**
 * A custom React hook that tracks the active section based on scroll position.
 *
 * This hook monitors the scroll position of the window and determines which section
 * from the provided section IDs is currently in view. It returns the active section's
 * ID prefixed with a hashtag (#).
 *
 * @param sectionIds - An array of string IDs corresponding to the sections to track
 * @returns A string representing the active section's ID prefixed with '#'
 *
 * @example
 * ```tsx
 * const sectionIds = ['home', 'about', 'contact'];
 * const activeSection = useActiveSection(sectionIds);
 * // Returns '#home' when home section is in view
 * ```
 *
 * @remarks
 * - The hook adds a 150px offset to account for fixed navigation bars
 * - Special handling is included for the top section (when scroll position < 100px)
 * - The hook automatically cleans up scroll event listeners on unmount
 *
 * @throws Will not throw, but may fail silently if section IDs don't exist in DOM
 */
import { useEffect, useState } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeId, setActiveId] = useState("");
  useEffect(() => {
    const sections = sectionIds.map((item) => document.getElementById(item));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Adjusted for navbar

      for (const section of sections) {
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveId(section.id);
          break;
        }
      }

      // Explicit top section handling
      if (scrollPosition < 100) setActiveId(sectionIds[0]);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return "#" + activeId;
};
