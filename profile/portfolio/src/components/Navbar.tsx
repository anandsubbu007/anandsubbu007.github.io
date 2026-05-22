"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Link2 } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-40% 0px -40% 0px" }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "backdrop-blur-2xl border-b"
            : "bg-transparent"
        )}
        style={scrolled ? {
          background: "rgba(3,7,18,0.85)",
          borderColor: "rgba(59,130,246,0.1)",
          boxShadow: "0 1px 0 rgba(59,130,246,0.06), 0 4px 24px rgba(0,0,0,0.4)",
        } : {}}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.3), rgba(6,182,212,0.2))",
                border: "1px solid rgba(59,130,246,0.4)",
                boxShadow: "0 0 12px rgba(37,99,235,0.2)",
              }}
            >
              <Code2 size={15} style={{ color: "#60a5fa" }} />
            </div>
            <span className="text-sm font-bold font-mono" style={{ color: "rgba(255,255,255,0.85)" }}>
              anandsubbu<span style={{ color: "#60a5fa" }}>.</span>dev
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? "white" : "rgba(255,255,255,0.45)",
                    background: isActive ? "rgba(59,130,246,0.12)" : "transparent",
                    borderBottom: isActive ? "1px solid rgba(59,130,246,0.4)" : "1px solid transparent",
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            {/* LinkedIn highlighted in nav */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all duration-300"
              style={{
                background: "rgba(10,102,194,0.15)",
                border: "1px solid rgba(10,102,194,0.4)",
                color: "#60a5fa",
              }}
            >
              <Link2 size={13} />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hero-cta-primary"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.05)" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(3,7,18,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(59,130,246,0.1)",
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 pt-3 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
                  style={{
                    background: "rgba(10,102,194,0.15)",
                    border: "1px solid rgba(10,102,194,0.4)",
                    color: "#60a5fa",
                  }}
                >
                  <Link2 size={15} />
                  Connect on LinkedIn
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="hero-cta-primary flex items-center justify-center py-3 rounded-xl text-sm font-semibold"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
