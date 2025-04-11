import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navigation-menu/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Tilak Joshi",
  description: "A simple portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body className={`${inter.className}`}>
        <div className="flex flex-col gap-8" id="container">
          <Navbar />
          <main className="mx-auto content-width flex flex-col gap-6 tablet:gap-8">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
