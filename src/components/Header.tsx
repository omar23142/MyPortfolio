"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdDeveloperMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Projects", label: "Projects" },
  { href: "/TimeLine", label: "TimeLine" },
  { href: "/Contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    const overlay = overlayRef.current;
    const navItems = navRef.current?.querySelectorAll("svg, a");
    const mobileItems = mobileRef.current?.querySelectorAll("svg, button");

    if (!header || !overlay || !navItems || !mobileItems) return;

    const ctx = gsap.context(() => {
      gsap.set(header, { autoAlpha: 1, backgroundColor: "#ffffff" });

      gsap.set(overlay, { autoAlpha: 1, backgroundColor: "#ffffff", yPercent: -100 });

      gsap.set([navItems, mobileItems], { autoAlpha: 0, y: -18 });

      const tl = gsap.timeline({ delay: 5, defaults: { duration: 1.1, ease: "power1.inOut" } });

      tl
        .set(overlay, { backgroundColor: "#000000" })
        .to(overlay, { yPercent: 0, duration: 1.05 })
        .set(header, { backgroundColor: "#eff6ff" })
        .to(overlay, { yPercent: 100, duration: 1.15 })
        .to([navItems, mobileItems], { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.13, ease: "power1.out" }, "-=0.35");
    }, header);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="relative overflow-hidden bg-blue-50 text-xs text-black">
      <div ref={overlayRef} className="absolute inset-0 z-30 bg-white" />

      <nav className="relative z-20 hidden md:flex justify-center">
        <div ref={navRef} className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 py-3 px-4">
          <MdDeveloperMode className="h-8 w-8 text-blue-600 hover:text-black shrink-0" />

          {links.map((link) => (
            <Link key={link.label} className="hover:text-blue-600" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <div ref={mobileRef} className="relative z-20 flex md:hidden items-center justify-between py-3 px-4">
        <button onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <HiMenu className="h-7 w-7 text-black" />
        </button>
        <MdDeveloperMode className="h-8 w-8 text-blue-600 hover:text-black shrink-0" />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl p-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="flex items-center justify-between mb-8"
              >
                <MdDeveloperMode className="h-8 w-8 text-blue-600" />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <HiX className="h-7 w-7 text-black" />
                </button>
              </motion.div>
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                }}
                className="flex flex-col gap-6"
              >
                {links.map((link) => (
                  <motion.div
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium text-black hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
