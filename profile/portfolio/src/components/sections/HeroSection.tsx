"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Code2,
  ChevronDown,
  AtSign,
  Globe,
  Link2,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { PROFILE, SOCIAL_LINKS } from "@/lib/constants";

const TYPING_STRINGS = [
  "Flutter Engineer",
  "Android Architect",
  "SDK Developer",
  "Fintech Engineer",
  "Platform Builder",
  "Security Engineer",
];

function TypingEffect() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const phrase = TYPING_STRINGS[phraseIndex];
    if (!deleting && charIndex < phrase.length) {
      timeoutRef.current = setTimeout(() => {
        setText(phrase.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 65);
    } else if (deleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setText(phrase.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 32);
    } else if (!deleting && charIndex === phrase.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((p) => (p + 1) % TYPING_STRINGS.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span className="font-mono" style={{ color: "#60a5fa" }}>
      {text}
      <span style={{ animation: "blink 1s step-end infinite", opacity: 1 }}>|</span>
    </span>
  );
}

/* Floating orb component */
function FloatingOrb({ style, delay = 0 }: { style: React.CSSProperties; delay?: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* 3D Avatar with floating animation */
function AvatarSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center lg:justify-end"
    >
      {/* Outer spinning ring */}
      <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
        {/* Glow base */}
        <div
          className="absolute inset-0 rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }}
        />

        {/* Spinning ring 1 */}
        <motion.div
          className="absolute inset-4 rounded-full border border-blue-500/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ borderStyle: "dashed" }}
        />

        {/* Spinning ring 2 (counter) */}
        <motion.div
          className="absolute inset-8 rounded-full border border-cyan-500/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Orbit dot 1 */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-lg"
          style={{ top: "5%", left: "50%", transformOrigin: "0 160px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping" style={{ animationDuration: "2s" }} />
        </motion.div>

        {/* Orbit dot 2 */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{ top: "50%", right: "5%", transformOrigin: "-120px 0" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Avatar container */}
        <motion.div
          className="relative w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(135deg, rgba(37,99,235,0.3), rgba(6,182,212,0.2))",
            boxShadow: "0 0 60px rgba(37,99,235,0.4), 0 0 120px rgba(37,99,235,0.15), inset 0 0 40px rgba(0,0,0,0.3)",
            border: "2px solid rgba(96,165,250,0.3)",
          }}
        >
          <Image
            src="/avatar.png"
            alt="Anand Alagappan — Senior Mobile Engineer"
            fill
            className="object-cover object-top scale-110"
            priority
          />
          {/* Glossy overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }}
          />
        </motion.div>

        {/* Floating badges */}
        <motion.div
          className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold"
          style={{
            background: "rgba(8,20,50,0.9)",
            border: "1px solid rgba(59,130,246,0.4)",
            backdropFilter: "blur(12px)",
            color: "#60a5fa",
            boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          📱 Flutter + Android
        </motion.div>

        <motion.div
          className="absolute -top-2 -right-4 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold"
          style={{
            background: "rgba(8,20,50,0.9)",
            border: "1px solid rgba(34,211,238,0.3)",
            backdropFilter: "blur(12px)",
            color: "#22d3ee",
            boxShadow: "0 4px 20px rgba(6,182,212,0.2)",
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          🔒 Fintech Security
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold"
          style={{
            background: "rgba(8,20,50,0.9)",
            border: "1px solid rgba(167,139,250,0.3)",
            backdropFilter: "blur(12px)",
            color: "#a78bfa",
            boxShadow: "0 4px 20px rgba(139,92,246,0.2)",
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          ⚡ 6+ Years
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-grid"
      style={{ paddingTop: "80px" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingOrb
          style={{ width: 600, height: 600, top: "-10%", left: "-15%", background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
          delay={0}
        />
        <FloatingOrb
          style={{ width: 500, height: 500, bottom: "-5%", right: "-10%", background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)", filter: "blur(80px)" }}
          delay={2}
        />
        <FloatingOrb
          style={{ width: 300, height: 300, top: "40%", left: "40%", background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
          delay={1}
        />

        {/* Grid fade overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 100%, var(--bg-base) 30%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, transparent 50%, var(--bg-base) 100%)" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container section flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
        {/* Left — Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <span className="relative flex w-2.5 h-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-emerald-400 text-xs font-mono font-semibold tracking-wider">
              Available for senior roles &amp; consulting
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-black tracking-tight mb-2"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", lineHeight: 1.05 }}
          >
            <span className="text-white">Anand</span>{" "}
            <span className="gradient-text-glow">Alagappan</span>
          </motion.h1>

          {/* Role with typing */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-2xl md:text-3xl font-light mb-2 h-10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <TypingEffect />
          </motion.div>

          {/* Subtitle pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2 mb-5"
          >
            {["Flutter", "Android", "Fintech", "Platform Eng", "Security"].map((s) => (
              <span key={s} className="tag text-xs">{s}</span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {PROFILE.description}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
          >
            <a href="#projects" className="hero-cta-primary inline-flex items-center gap-2">
              <Zap size={17} />
              View Projects
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(10,102,194,0.25), rgba(10,60,140,0.15))",
                border: "1.5px solid rgba(10,102,194,0.5)",
                color: "#60a5fa",
                boxShadow: "0 0 20px rgba(10,102,194,0.2)",
              }}
            >
              <Link2 size={16} />
              LinkedIn
            </a>
            <a href="#contact" className="hero-cta-secondary inline-flex items-center gap-2">
              Contact Me
              <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" target="_blank" className="hero-cta-secondary inline-flex items-center gap-2">
              <Download size={15} />
              Resume
            </a>
          </motion.div>

          {/* Social links row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap justify-center lg:justify-start gap-2"
          >
            {[
              { href: SOCIAL_LINKS.github, label: "GitHub", icon: Code2 },
              { href: SOCIAL_LINKS.stackoverflow, label: "StackOverflow", icon: Globe },
              { href: SOCIAL_LINKS.medium, label: "Medium", icon: ExternalLink },
              { href: SOCIAL_LINKS.leetcode, label: "LeetCode", icon: Code2 },
              { href: SOCIAL_LINKS.kaggle, label: "Kaggle", icon: Globe },
              { href: SOCIAL_LINKS.twitter, label: "Twitter/X", icon: AtSign },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.35)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(59,130,246,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(59,130,246,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#93c5fd";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                }}
              >
                <Icon size={12} />
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — 3D Avatar */}
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
          <AvatarSection />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
