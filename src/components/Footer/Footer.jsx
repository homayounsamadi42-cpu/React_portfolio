
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { a } from "framer-motion/client";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/homayounsamadi42-cpu",
    icon: ArrowUpRight,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: ArrowUpRight,
  },
  {
    label: "Email",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 px-6 text-white sm:px-8 lg:px-12">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-blue-600/[0.08] blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        {/* Main footer */}
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <motion.a
            href="#home"
            whileHover={{ x: 3 }}
            className="group flex w-fit items-center gap-3"
          >
            <span className="text-4xl font-semibold tracking-[-0.09em] text-blue-500 transition group-hover:text-blue-400">
              H.
            </span>
            <span>
              <span className="block text-sm font-medium">
                Homayoun
              </span>
              <span className="mt-1 block text-xs text-white/35">
                Full-Stack Web Developer
              </span>
            </span>
          </motion.a>
          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3"
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] uppercase tracking-[0.16em] text-white/40 transition hover:text-blue-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              const external = social.label !== "Email";

              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/55 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-4 border-t border-white/[0.07] py-6 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Homayoun. All rights reserved.
          </p>

          <a
            href="#home"
            className="group flex w-fit items-center gap-2 uppercase tracking-[0.15em] transition hover:text-white/60"
          >
            Back to top
            <ArrowUpRight
              size={13}
              className="text-blue-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <p className="font-mono uppercase tracking-[0.13em]">
            Better code <span className="px-1 text-blue-400">/</span>
            Better experiences
          </p>
        </div>
      </div>
    </footer>
  );
}