"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bike, Activity } from "lucide-react";
import { motion, AnimatePresence } from "@/lib/motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Strona główna" },
    { href: "/o-mnie", label: "O mnie" },
    { href: "/treningi", label: "Treningi" },
    { href: "/fizjoterapia", label: "Fizjoterapia" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const mobileMenuId = "mobile-navigation-menu";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#00f0ff]/10" role="navigation" aria-label="Główna nawigacja">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-1">
              <Bike className="w-8 h-8 text-[#00f0ff] group-hover:scale-110 transition-transform" />
              <Activity className="w-8 h-8 text-[#ff00ff]" />
            </div>
            <span className="text-xl font-bold gradient-text">
              WielkiKrzych
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-white/70 hover:text-[#00f0ff] font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={mobileMenuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-[#00f0ff]/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-3 text-white/70 hover:text-[#00f0ff] font-medium transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
