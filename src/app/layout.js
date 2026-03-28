import { Inter } from "next/font/google";
import "./globals.css";
import ContactBubble from "@/components/ContactBubble";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Özalp Alpay Aldoğan | Translator & Linguist",
  description: "Personal portfolio of Özalp Alpay Aldoğan, Translation Student focusing on localization, technical translation, and oral interpretation.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-accent-glow),_transparent_40%)] pointer-events-none" />
        {children}
        <ContactBubble />
      </body>
    </html>
  );
}
