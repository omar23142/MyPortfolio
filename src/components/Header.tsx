"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { MdDeveloperMode } from "react-icons/md";
import gsap from "gsap";

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

  useEffect(() => {
    const header = headerRef.current;
    const overlay = overlayRef.current;
    const navItems = navRef.current?.querySelectorAll("svg, a");

    if (!header || !overlay || !navItems) return;

    const ctx = gsap.context(() => {
      gsap.set(header, { autoAlpha: 1, backgroundColor: "#ffffff" });

      gsap.set(overlay, { autoAlpha: 1, backgroundColor: "#ffffff", yPercent: -100 });

      gsap.set(navItems, { autoAlpha: 0, y: -18 });

      const tl = gsap.timeline({ delay: 5, defaults: { duration: 1.1, ease: "power1.inOut" } });

      tl
        .set(overlay, { backgroundColor: "#000000" })
        .to(overlay, { yPercent: 0, duration: 1.05 })
        .set(header, { backgroundColor: "#eff6ff" })
        .to(overlay, { yPercent: 100, duration: 1.15 })
        .to(navItems, { autoAlpha: 1, y: 0, duration: 0.85, stagger: 0.13, ease: "power1.out" }, "-=0.35");
    }, header);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="relative overflow-hidden bg-blue-50 text-xs text-black">
      <div ref={overlayRef} className="absolute inset-0 z-30 bg-white" />

      <nav className="relative z-20 flex justify-center">
        <div ref={navRef} className="flex items-center justify-between py-3">
          <MdDeveloperMode className="h-8 w-8 text-blue-600 hover:text-black" />

          {links.map((link) => (
            <Link key={link.label} className="ml-10 hover:text-blue-600" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
