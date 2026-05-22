"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Code2, Link2, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-6"
      style={{ borderColor: "rgba(59,130,246,0.08)", background: "rgba(3,7,18,0.8)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(37,99,235,0.2)", border: "1px solid rgba(59,130,246,0.3)" }}>
              <Code2 size={14} style={{ color: "#60a5fa" }} />
            </div>
            <span className="text-sm font-mono" style={{ color: "rgba(255,255,255,0.35)" }}>
              anand alagappan · senior mobile systems engineer
            </span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: SOCIAL_LINKS.github, icon: Code2, label: "GitHub" },
              { href: SOCIAL_LINKS.linkedin, icon: Link2, label: "LinkedIn" },
              { href: SOCIAL_LINKS.twitter, icon: AtSign, label: "Twitter" },
              { href: "mailto:anandsubbu007@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#60a5fa";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} · Next.js + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
