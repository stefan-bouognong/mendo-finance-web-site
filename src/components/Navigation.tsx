
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Accueil", href: "#home" },
  { name: "Mendo COTI", href: "#mendo-coti" },
  { name: "À propos", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "glass-morphism py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline font-bold text-xl md:text-2xl tracking-tight text-primary">
            Mendo <span className="text-secondary">Finances</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-primary/80 hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button className="rounded-full bg-primary hover:bg-primary/90">
            Ouvrir un compte
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium py-2 px-4 hover:bg-accent/10 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full rounded-full" onClick={() => setIsOpen(false)}>
            Ouvrir un compte
          </Button>
        </div>
      )}
    </nav>
  );
}
