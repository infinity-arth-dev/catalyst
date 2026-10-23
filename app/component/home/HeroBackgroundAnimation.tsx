"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroBackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse tracking for interactive magnetic effect
    let mouseX = -1000;
    let mouseY = -1000;
    const mouseRadius = 180;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Biomedical Node Types: 0 = blue dot, 1 = orange dot, 2 = medical cross, 3 = ring pulse
    interface BiomedicalNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glowColor: string;
      type: number;
      pulseAngle: number;
      pulseSpeed: number;
    }

    const nodeCount = 50;
    const nodes: BiomedicalNode[] = [];

    const brandBlue = "#00AEEF";
    const brandOrange = "#E8502A";

    for (let i = 0; i < nodeCount; i++) {
      const isOrange = Math.random() < 0.28;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 1.5,
        color: isOrange ? brandOrange : brandBlue,
        glowColor: isOrange ? "rgba(232, 80, 42, 0.45)" : "rgba(0, 174, 239, 0.45)",
        type: Math.floor(Math.random() * 4),
        pulseAngle: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Draw faint medical tech grid dots
      const gridSize = 45;
      ctx.fillStyle = "rgba(0, 174, 239, 0.07)";
      for (let x = 20; x < width; x += gridSize) {
        for (let y = 20; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw interactive connections between nodes
      const maxConnectDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.28;
            const strokeColor =
              nodes[i].color === brandOrange || nodes[j].color === brandOrange
                ? `rgba(232, 80, 42, ${alpha * 0.8})`
                : `rgba(0, 174, 239, ${alpha})`;

            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw each biomedical node
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce walls
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        const mdx = mouseX - node.x;
        const mdy = mouseY - node.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouseRadius && mDist > 0) {
          const force = (1 - mDist / mouseRadius) * 2;
          node.x -= (mdx / mDist) * force;
          node.y -= (mdy / mDist) * force;

          // Connect to mouse cursor with bright ray
          ctx.strokeStyle =
            node.color === brandOrange
              ? `rgba(232, 80, 42, ${0.4 * (1 - mDist / mouseRadius)})`
              : `rgba(0, 174, 239, ${0.5 * (1 - mDist / mouseRadius)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Pulse breathing
        node.pulseAngle += node.pulseSpeed;
        const currentRadius = node.radius + Math.sin(node.pulseAngle) * 0.8;

        // Draw node with glow
        ctx.save();
        ctx.shadowColor = node.glowColor;
        ctx.shadowBlur = 10;
        ctx.fillStyle = node.color;

        if (node.type === 2) {
          // Medical cross symbol
          const s = currentRadius * 1.6;
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(node.x - s, node.y);
          ctx.lineTo(node.x + s, node.y);
          ctx.moveTo(node.x, node.y - s);
          ctx.lineTo(node.x, node.y + s);
          ctx.stroke();
        } else if (node.type === 3) {
          // Concentric pulse circle
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = node.color;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius + 5 + Math.sin(node.pulseAngle) * 3, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Classic circular molecule node
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            animId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* ── 1. Interactive Biomedical Constellation Canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ touchAction: "none" }}
      />

      {/* ── 2. Vivid Glowing Ambient Gradient Spheres (Logo Theme: Cyan & Orange) ── */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00AEEF]/20 via-[#29bbf4]/14 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-28 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#E8502A]/18 via-[#EF6B44]/12 to-transparent blur-3xl animate-bio-breathing" />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-[#00AEEF]/14 blur-3xl" />

      {/* ── 3. High-Tech Nanotech Hexagonal Molecular Lattice Mesh ── */}
      <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-hex-pattern"
              width="56"
              height="96.99"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M28 0 L56 16.16 L56 48.5 L28 64.66 L0 48.5 L0 16.16 Z M28 48.5 L56 64.66 L56 96.99 L28 113.15 L0 96.99 L0 64.66 Z"
                fill="none"
                stroke="rgba(0, 174, 239, 0.45)"
                strokeWidth="0.8"
              />
              <circle cx="28" cy="16.16" r="1.6" fill="#E8502A" opacity="0.7" />
              <circle cx="28" cy="64.66" r="1.6" fill="#00AEEF" opacity="0.7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-hex-pattern)" />
        </svg>
      </div>

      {/* ── 4. 360° Circular Radial Bio-Sonar Telemetry Radar Sweep ── */}
      <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] pointer-events-none hidden md:block opacity-40">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Concentric stationary pulse rings */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-[#00AEEF]/20 animate-bio-breathing" />
          <div className="absolute w-[290px] h-[290px] rounded-full border border-[#E8502A]/20" />
          <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-[#00AEEF]/30 animate-spin-slow" />
          <div className="absolute w-[80px] h-[80px] rounded-full border border-[#E8502A]/40" />
          {/* 360° smooth circular radar sweep */}
          <div className="absolute inset-0 animate-radar-spin origin-center">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#00AEEF]/10 to-[#00AEEF]/20 [clip-path:polygon(100%_50%,0_0,0_50%)]" />
          </div>
        </div>
      </div>

      {/* ── 5. Stylized Animated SVG DNA Double-Helix Waves ── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45vw] h-[75%] hidden md:block opacity-35">
        <svg
          viewBox="0 0 500 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="dnaBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#29bbf4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0077a3" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="dnaOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8502A" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#EF6B44" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FF7A59" stopOpacity="0.85" />
            </linearGradient>
            <filter id="dnaGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* DNA Strand 1 — Primary Cyan Blue */}
          <path
            d="M 20 80 Q 140 180 260 80 T 500 80"
            stroke="url(#dnaBlueGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#dnaGlow)"
            className="animate-pulse"
          />

          {/* DNA Strand 2 — Counter-Oscillating Orange Accent */}
          <path
            d="M 20 200 Q 140 100 260 200 T 500 200"
            stroke="url(#dnaOrangeGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#dnaGlow)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Connecting Hydrogen Rungs between strands */}
          {[60, 110, 160, 210, 260, 310, 360, 410, 460].map((rx, idx) => (
            <g key={rx} className="animate-pulse" style={{ animationDelay: `${idx * 180}ms` }}>
              <line
                x1={rx}
                y1={80 + Math.sin(rx * 0.03) * 50}
                x2={rx}
                y2={200 - Math.sin(rx * 0.03) * 50}
                stroke={idx % 2 === 0 ? "rgba(0, 174, 239, 0.45)" : "rgba(232, 80, 42, 0.45)"}
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <circle
                cx={rx}
                cy={80 + Math.sin(rx * 0.03) * 50}
                r="3.5"
                fill="#00AEEF"
                filter="url(#dnaGlow)"
              />
              <circle
                cx={rx}
                cy={200 - Math.sin(rx * 0.03) * 50}
                r="3.5"
                fill="#E8502A"
                filter="url(#dnaGlow)"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ── 6. Continuous Horizontal Clinical ECG Telemetry Wave ── */}
      <div className="absolute bottom-6 inset-x-0 h-16 pointer-events-none opacity-30 hidden sm:block">
        <svg className="w-full h-full" viewBox="0 0 1200 60" fill="none" preserveAspectRatio="none">
          <path
            d="M0 30 L380 30 L395 10 L405 50 L415 15 L425 40 L435 30 L800 30 L815 10 L825 50 L835 15 L845 40 L855 30 L1200 30"
            stroke="url(#dnaBlueGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="animate-ecg-travel"
          />
        </svg>
      </div>

      {/* ── 7. Soft Clinical Wash to Blend Seamlessly with Page ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-transparent to-white/90 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent pointer-events-none" />
    </div>
  );
}
