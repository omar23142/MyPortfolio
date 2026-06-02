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
  { href: "/Experience", label: "Experience" },
  { href: "/Contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);   // header blue
  const overlayRef = useRef<HTMLDivElement>(null);  // black
  const navRef = useRef<HTMLDivElement>(null);   

  useEffect(() => {
    const header = headerRef.current;      
    const overlay = overlayRef.current;    // this mean  select all 
    const navItems = navRef.current?.querySelectorAll("svg, a");   // this mean select just the svg and link

    if (!header || !overlay || !navItems) return;

    const ctx = gsap.context(() => {
      gsap.set(header, { autoAlpha: 1, yPercent: 0 });   //autoAlpha:1 this mean the element will disaple screen (0 mean display),yPercent: 0 don't change the y cordinate 
      gsap.set(header, { backgroundColor: "#ffffff" });  // set the background header to be the same of main background for not display the header
      gsap.set(overlay, {
        autoAlpha: 1,
        backgroundColor: "#ffffff",  
        yPercent: 0,  
      });
      gsap.set(overlay, { yPercent: -100 });  // yPercent: -100: تعني "حرك العنصر للأعلى بمسافة تساوي 100% من ارتفاعه".
      gsap.set(navItems, { autoAlpha: 0, y: -18 }); // autoAlpha: 0: يجعل العناصر مخفية تماماً.  // y: -18: يحرك العناصر للأعلى بمقدار 18 بيكسل.

      const timeline = gsap.timeline({
        delay: 5,  //delay: 5: كلمة "تأخير". يعني أن الأنيميشن بالكامل لن يبدأ إلا بعد مرور 5 ثوانٍ من تحميل الصفحة.
        defaults: { duration: 1.1, ease: "power1.inOut" },  //ease: "power1.inOut": نوع "التسارع والتباطؤ". هذا يجعل الحركة تبدأ ببطء، تسرع في المنتصف، وتبطئ في النهاية (حركة طبيعية وسلسة).
      });

      timeline
        .set(overlay, { backgroundColor: "#000000" }) //يغير لون الطبقة (Overlay) التي جهزناها سابقاً إلى اللون الأسود فوراً (بدون حركة)
        .to(overlay, { yPercent: 0, duration: 1.05 }) //yPercent: 0: يحرك الـ Overlay من مكانه في الأعلى (-100) إلى الموضع الطبيعي (0).
        .set(header, { backgroundColor: "#eff6ff" }) 
        .to(overlay, { yPercent: 100, duration: 1.15 })  //yPercent: 100: يحرك الـ Overlay للأسفل بمقدار 100% من ارتفاعه.
        .to(
          navItems,
          {
            autoAlpha: 1,
            y: 0,  // this will move the link to the original postion on y ( befor was y: -18 'in top )
            duration: 0.85,
            stagger: 0.13, //stagger: 0.13: (مهم جداً) هذا يعني "التتابع". بدلاً من ظهور كل الروابط مرة واحدة، سيظهر الرابط الأول، وبعد 0.13 ثانية يظهر الثاني، وهكذا. هذا يعطي تأثيراً جميلاً متتابعاً.
            ease: "power1.out",
          },
          "-=0.35",  //-=0.35، تعني "ابدأ هذه الحركة قبل انتهاء الحركة السابقة بـ 0.35 ثانية".
        );
    }, header);

    return () => ctx.revert(); // دالة التنظيف
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative overflow-hidden bg-blue-50 text-xs text-black"
    >
      <div ref={overlayRef} className="absolute inset-0 z-30 bg-white" />

      <nav className="relative z-20 flex justify-center">
        <div ref={navRef} className="flex items-center justify-between py-3">
          <MdDeveloperMode className="h-8 w-8 cursor-pointer text-blue-600 hover:text-black" />

          {links.map((link) => (
            <Link
              key={link.label}
              className="ml-10 hover:text-blue-600"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
