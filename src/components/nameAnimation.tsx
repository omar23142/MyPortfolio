"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";
import Slider from "./slider/page";

const name = "OMAR ALMUGAWISH";

const particlePositions = Array.from({ length: 20 }, () => ({
  x: (Math.random() - 0.5) * 400,
  y: (Math.random() - 0.5) * 300,
  size: 3 + Math.random() * 4,
}));

export default function OmarAnimation() {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const rollingORef = useRef<HTMLSpanElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const rollingO = rollingORef.current;

    if (!container || !rollingO) return;

    const ctx = gsap.context(() => {
      const letters = Array.from(
        container.querySelectorAll<HTMLSpanElement>("[data-letter]"),
      );
      const firstLetter = letters[0];
      const lastLetter = letters[letters.length - 1];
      const revealLetters = letters.slice(1).reverse();

      const containerBox = container.getBoundingClientRect();
      const firstBox = firstLetter.getBoundingClientRect();
      const lastBox = lastLetter.getBoundingClientRect();
      const rollingOBox = rollingO.getBoundingClientRect();

      const baselineY = firstBox.top - containerBox.top + firstBox.height / 2;
      const startX = lastBox.left - containerBox.left + lastBox.width / 2;
      const homeX = firstBox.left - containerBox.left + firstBox.width / 2;
      const leftScreenX = -containerBox.left + rollingOBox.width / 2 + 18;

      gsap.set(letters, {
        autoAlpha: 0,
        y: 28,
      });

      gsap.set(rollingO, {
        autoAlpha: 1,
        x: startX,
        y: baselineY,
        xPercent: -50,
        yPercent: -50,
        rotate: 0,
        scale: 2,
      });

      const timeline = gsap.timeline({
        delay: 0.5,
        defaults: {
          ease: "power1.out",
        },
      });

      timeline.set(container, { autoAlpha: 1 });
      timeline.to(rollingO, {
        keyframes: [
          { x: homeX, rotate: -1080, duration: 2 },
          { x: leftScreenX, rotate: -1500, duration: 0.9 },
        ],
        ease: "none",
      });

      timeline.to(
        revealLetters,
        {
          autoAlpha: 1,
          keyframes: [
            { y: -10, duration: 0.34, ease: "sine.out" },
            { y: 0, duration: 0.26, ease: "back.out(1.4)" },
          ],
          stagger: 0.13,
        },
        0.18,
      );

      timeline.to(rollingO, {
        x: homeX,
        rotate: -720,
        duration: 1.15,
        ease: "power1.inOut",
      });

      const particles = particlesRef.current?.querySelectorAll("[data-particle]");
      if (particles?.length) {
        gsap.set(particles, { autoAlpha: 0, scale: 0 });
      }

      const firstOEl = firstLetter.querySelector<HTMLElement>("span");
      timeline
        .to(rollingO, {
          autoAlpha: 0,
          scale: 0.65,
          duration: 0.18,
          ease: "power1.out",
        })
        .to(
          firstLetter,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.18,
            ease: "power1.out",
          },
          "<",
        );

      if (firstOEl) {
        timeline.to(firstOEl, {
          color: "#3b82f6",
          duration: 0.4,
          ease: "power1.out",
        });
      }

      if (particles?.length) {
        timeline.to(particles, {
          autoAlpha: 0.45,
          scale: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: "back.out(1.7)",
        });

        gsap.to(particles, {
          y: () => -(15 + Math.random() * 20),
          x: () => (Math.random() - 0.5) * 40,
          duration: () => 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.08,
          delay: timeline.totalDuration() + 0.3,
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main style={styles.body} className="bg-white">
      <h1 ref={containerRef} style={styles.name} aria-label={name}>
        <span ref={rollingORef} aria-hidden="true" style={styles.rollingO}>
          <span style={styles.rollingSmile}>
            <span style={styles.eyeLeft} />
            <span style={styles.eyeRight} />
            <span style={styles.mouth} />
          </span>
        </span>

        {name.split("").map((letter, index) => (
          <span
            aria-hidden="true"
            data-letter
            key={`${letter}-${index}`}
            style={letter === " " ? styles.space : styles.letter}
          >
            {index === 0 ? (
              <span style={styles.firstO}>
                O
              </span>
            ) : letter === " " ? (
              "\u00a0"
            ) : (
              letter
            )}
          </span>
        ))}

        <div ref={particlesRef} style={styles.particlesWrapper}>
          {particlePositions.map((p, i) => (
            <span
              key={i}
              data-particle
              style={{
                position: "absolute",
                left: `calc(50% + ${p.x}px)`,
                top: `calc(50% + ${p.y}px)`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                borderRadius: "50%",
                backgroundColor: "rgba(59,130,246,0.5)",
                pointerEvents: "none",
              }}
            />
          ))}
        </div>
      </h1>
      <Typewriter />
      <Slider />
    </main>
  );
}

function Typewriter() {
  const [text, setText] = useState("");
  const [stepIdx, setStepIdx] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  type Step = { action: "type" | "delete" | "pause"; target?: string; duration?: number };
  const steps: Step[] = [
    { action: "pause", duration: 6000 },
    { action: "type", target: "problem solver" },
    { action: "pause", duration: 2000 },
    { action: "delete", target: "" },
    { action: "type", target: "backend developer" },
    { action: "pause", duration: 2000 },
    { action: "delete", target: "" },
    { action: "type", target: "frontend developer" },
    { action: "pause", duration: 2000 },
    { action: "delete", target: "" },
    { action: "type", target: "fullstack developer" },
    { action: "pause", duration: 2500 },
    { action: "delete", target: "" },
  ];

  useEffect(() => {
    const step = steps[stepIdx % steps.length];

    if (step.action === "pause") {
      const timer = setTimeout(() => setStepIdx((s) => s + 1), step.duration);
      return () => clearTimeout(timer);
    }

    const speed = step.action === "delete" ? 30 : 70;
    const target = step.target!;
    const timer = setTimeout(() => {
      if (step.action === "type") {
        if (text.length < target.length) {
          setText(target.slice(0, text.length + 1));
        } else {
          setStepIdx((s) => s + 1);
        }
      } else {
        if (text.length > target.length) {
          setText(text.slice(0, -1));
        } else {
          setStepIdx((s) => s + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, stepIdx]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.typewriter}>
      <span>{text}</span>
      <span style={{ ...styles.cursor, opacity: cursorVisible ? 1 : 0 }} />
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  body: {
    minHeight: "100vh",
    margin: 0,
    overflowX: "hidden",
    overflowY: "visible",
    backgroundColor: "#ffffff",
    color: "#0f0f0f",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  name: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: 0,
    fontSize: "3rem",
    fontWeight: 800,
    lineHeight: 0.95,
    letterSpacing: "2px",
    opacity: 0,
  },
  letter: {
    position: "relative",
    display: "inline-block",
    willChange: "transform, opacity",
  },
  space: {
    display: "inline-block",
    width: "0.35em",
  },
  rollingO: {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 2,
    display: "inline-block",
    willChange: "transform, opacity",
  },
  firstO: {
    position: "relative",
    display: "inline-block",
    color: "#0f0f0f",
  },
  rollingSmile: {
    display: "inline-block",
    position: "relative",
    width: "0.72em",
    height: "0.72em",
    color: "#3b82f6",
    border: "0.08em solid currentColor",
    borderRadius: "50%",
    verticalAlign: "middle",
  },
  eyeLeft: {
    position: "absolute",
    left: "30%",
    top: "32%",
    width: "0.08em",
    height: "0.08em",
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  eyeRight: {
    position: "absolute",
    right: "30%",
    top: "32%",
    width: "0.08em",
    height: "0.08em",
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  mouth: {
    position: "absolute",
    left: "27%",
    bottom: "26%",
    width: "46%",
    height: "24%",
    borderBottom: "0.07em solid currentColor",
    borderRadius: "0 0 999px 999px",
  },
  typewriter: {
    marginTop: "1.8rem",
    height: "2rem",
    fontSize: "1.25rem",
    fontFamily: "'Fira Code', 'Courier New', monospace",
    color: "#3b82f6",
    letterSpacing: "1px",
    fontWeight: 500,
  },
  cursor: {
    display: "inline-block",
    width: "2px",
    height: "1.3em",
    backgroundColor: "#3b82f6",
    marginLeft: "3px",
    verticalAlign: "text-bottom",
    borderRadius: "1px",
  },
  particlesWrapper: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    overflow: "hidden",
  },
};
