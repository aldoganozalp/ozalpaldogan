"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          Özalp<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
          <Link href="#about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#experience" className="hover:text-accent transition-colors">
            Experience & Education
          </Link>
          <Link href="#skills" className="hover:text-accent transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </nav>

        {/* Future Multi-language Toggle Placeholder */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors hover:cursor-pointer" aria-label="Toggle language">
            EN
          </button>
        </div>
      </div>
    </motion.header>
  );
}
