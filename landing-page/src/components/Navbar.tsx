"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Bus } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Routes", href: "/#routes" },
  { label: "View Pass", href: "/view-pass" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass bg-nav-bg border-b border-nav-border shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" id="logo" className="group flex items-center gap-2.5 text-foreground hover:text-primary transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-110">
            <Bus className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight">MRDU BUS PASS</span>
            <span className="text-[10px] font-medium text-muted-foreground">Malla Reddy Deemed University</span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:scale-105 hover:border-primary/50 hover:shadow-md"
          >
            {theme === "dark" ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>

          <a href="/apply" id="nav-cta" className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 lg:inline-flex">
            Get Your Pass
          </a>

          <button id="mobile-menu-toggle" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle mobile menu" className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden transition-all duration-300 lg:hidden ${mobileOpen ? "max-h-96 border-t border-border" : "max-h-0"}`}>
        <div className="glass bg-nav-bg px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              {link.label}
            </a>
          ))}
          <a href="/apply" onClick={() => setMobileOpen(false)} className="mt-2 block rounded-xl bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
            Get Your Pass
          </a>
        </div>
      </div>
    </header>
  );
}
