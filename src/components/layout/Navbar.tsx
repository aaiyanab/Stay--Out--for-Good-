"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] h-[72px] transition-all duration-300 border-b border-gold/20 ${
          scrolled ? "bg-navy/98 backdrop-blur-md shadow-lg" : "bg-navy/95 backdrop-blur-sm"
        }`}
      >
        <Link
          href="/"
          className="font-serif text-xl font-bold text-white no-underline tracking-wide"
          onClick={() => setOpen(false)}
        >
          Stay Out <span className="text-gold-light">For Good</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-white/75 text-sm hover:text-gold-light transition-colors duration-200 no-underline"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/donate"
              className="inline-flex items-center bg-gold text-white px-5 py-2 rounded font-semibold text-sm hover:bg-gold-light hover:text-navy transition-all duration-200 no-underline"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="text-white text-2xl font-serif font-bold no-underline hover:text-gold-light transition-colors"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/donate"
          className="btn-primary text-lg mt-4"
          onClick={() => setOpen(false)}
        >
          Donate
        </Link>
      </div>
    </>
  );
}
