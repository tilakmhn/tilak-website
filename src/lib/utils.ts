import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to generate a random color for a tag
export const getTagColor = (lastColor?: string) => {
  const colors = [
    "bg-green-600", // Green
    "bg-purple-600", // Purple
    "bg-pink-600", // Pink
    "bg-orange-400", // Orange
    "bg-blue-600", // Blue
    "bg-red-600", // Red
    "bg-yellow-500", // Yellow
    "bg-teal-600", // Teal
    "bg-indigo-600", // Indigo
    "bg-rose-600", // Rose
    "bg-cyan-600", // Cyan
    "bg-amber-500", // Amber
  ];

  // Filter out the last used color
  const availableColors = lastColor
    ? colors.filter((color) => color !== lastColor)
    : colors;

  // Generate a random index from available colors
  const randomIndex = Math.floor(Math.random() * availableColors.length);
  return availableColors[randomIndex];
};
