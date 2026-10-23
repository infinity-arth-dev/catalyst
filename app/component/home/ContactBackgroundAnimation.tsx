"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ContactBackgroundAnimation() {
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

    // Mouse tracking for gentle interactive attraction
    let mouseX = -1000;
    let mouseY = -1000;
    const mouseRadius = 150;

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

    // Catalyst Biomedicals Telemetry Nodes:
    // Types: 0 = molecule node, 1 = medical cross, 2 = concentric pulse ring, 3 = diamond telemetry sensor
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

    const nodeCount = 34; // Balanced count for minimal yet distinctly biomedical feel
    const nodes: BiomedicalNode[] = [];

    const brandBlue = "#00AEEF";
    const brandOrange = "#E8502A";

    for (let i = 0; i < nodeCount; i++) {
      const isOrange = Math.random() < 0.25;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45, // Gentle, peaceful drift
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 1.2,
        color: isOrange ? brandOrange : brandBlue,
        glowColor: isOrange ? "rgba(232, 80, 42, 0.35)" : "rgba(0, 174, 239, 0.35)",
        type: Math.floor(Math.random() * 4),
        pulseAngle: Math.random() * Math.PI * 2,
        pulseSpeed: 0.018 + Math.random() * 0.02,
      });
    }

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Faint Medical Grid Dots
      const gridSize = 50;
      ctx.fillStyle = "rgba(0, 174, 239, 0.05)";
      for (let x = 25; x < width; x += gridSize) {
        for (let y = 25; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Delicate Connections Between Biomedical Nodes
      const maxConnectDist = 130;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.2;
            ctx.strokeStyle =
              nodes[i].color === brandOrange || nodes[j].color === brandOrange
                ? `rgba(232, 80, 42, ${alpha * 0.75})`
                : `rgba(0, 174, 239, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update biomedical nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Gentle interactive mouse attraction
        const mdx = mouseX - node.x;
        const mdy = mouseY - node.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouseRadius && mDist > 0) {
          const force = (1 - mDist / mouseRadius) * 1.3;
          node.x -= (mdx / mDist) * force;
          node.y -= (mdy / mDist) * force;

          ctx.strokeStyle =
            node.color === brandOrange
              ? `rgba(232, 80, 42, ${0.3 * (1 - mDist / mouseRadius)})`
              : `rgba(0, 174, 239, ${0.35 * (1 - mDist / mouseRadius)})`;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        node.pulseAngle += node.pulseSpeed;
        const currentRadius = node.radius + Math.sin(node.pulseAngle) * 0.55;

        ctx.save();
        ctx.shadowColor = node.glowColor;
        ctx.shadowBlur = 7;
        ctx.fillStyle = node.color;

        if (node.type === 1) {
          // Catalyst Medical Cross symbol (+)
          const s = currentRadius * 1.4;
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(node.x - s, node.y);
          ctx.lineTo(node.x + s, node.y);
          ctx.moveTo(node.x, node.y - s);
          ctx.lineTo(node.x, node.y + s);
          ctx.stroke();
        } else if (node.type === 2) {
          // Concentric pulse circle
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = node.color;
          ctx.lineWidth = 0.65;
          ctx.beginPath();
          ctx.arc(
            node.x,
            node.y,
            currentRadius + 3.8 + Math.sin(node.pulseAngle) * 2,
            0,
            Math.PI * 2
          );
          ctx.stroke();
        } else if (node.type === 3) {
          // Diamond telemetry sensor
          const s = currentRadius * 1.25;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y - s);
          ctx.lineTo(node.x + s, node.y);
          ctx.lineTo(node.x, node.y + s);
          ctx.lineTo(node.x - s, node.y);
          ctx.closePath();
          ctx.fill();
        } else {
          // Molecular node
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

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
      {/* ── 1. Minimal Interactive Biomedical Constellation Canvas ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ touchAction: "none" }}
      />

      {/* ── 2. Soft Ambient Brand Glow Halos (Cyan & Orange) ── */}
      <div className="absolute top-12 left-10 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#00AEEF]/14 via-[#29bbf4]/6 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/4 -right-12 w-[460px] h-[460px] rounded-full bg-gradient-to-bl from-[#E8502A]/10 via-[#EF6B44]/5 to-transparent blur-3xl animate-bio-breathing" />
      <div className="absolute -bottom-20 left-1/3 w-[420px] h-[420px] rounded-full bg-[#00AEEF]/8 blur-3xl" />

      {/* ── 3. High-Tech Nanotech Hexagonal Lattice Mesh Pattern (Faint & Minimal) ── */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="contact-med-hex-pattern"
              width="56"
              height="96.99"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M28 0 L56 16.16 L56 48.5 L28 64.66 L0 48.5 L0 16.16 Z M28 48.5 L56 64.66 L56 96.99 L28 113.15 L0 96.99 L0 64.66 Z"
                fill="none"
                stroke="rgba(0, 174, 239, 0.4)"
                strokeWidth="0.75"
              />
              <circle cx="28" cy="16.16" r="1.3" fill="#E8502A" opacity="0.55" />
              <circle cx="28" cy="64.66" r="1.3" fill="#00AEEF" opacity="0.55" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-med-hex-pattern)" />
        </svg>
      </div>

      {/* ── 4. Minimal Telemetry Reticle & Crosshair (Faint & Non-Intrusive) ── */}
      <div className="absolute top-16 left-6 sm:left-14 w-[380px] h-[380px] pointer-events-none flex items-center justify-center opacity-25">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[360px] h-[360px] rounded-full border border-[#00AEEF]/20 animate-bio-breathing" />
          <div className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-[#00AEEF]/25 animate-spin-slow" />
          <div className="absolute w-[160px] h-[160px] rounded-full border border-[#E8502A]/20" />
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#00AEEF]/40" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-[#00AEEF]/40" />
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0.5 h-3 bg-[#E8502A]/40" />
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0.5 h-3 bg-[#E8502A]/40" />
        </div>
      </div>

      {/* ── 5. Minimal Stylized Animated SVG DNA Double-Helix Ribbon (Flank) ── */}
      <div className="absolute -left-14 bottom-4 w-[34vw] max-w-[380px] h-[220px] hidden lg:block opacity-20 pointer-events-none">
        <svg
          viewBox="0 0 380 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="contactDnaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0077a3" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="contactDnaGradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8502A" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#FF7A59" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Strand 1 */}
          <path
            d="M 10 40 Q 100 110 190 40 T 370 40"
            stroke="url(#contactDnaGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="animate-pulse"
          />
          {/* Strand 2 */}
          <path
            d="M 10 130 Q 100 60 190 130 T 370 130"
            stroke="url(#contactDnaGradOrange)"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Minimal Hydrogen Rungs */}
          {[50, 100, 150, 200, 250, 300, 350].map((rx, idx) => (
            <g key={rx} className="animate-pulse" style={{ animationDelay: `${idx * 160}ms` }}>
              <line
                x1={rx}
                y1={40 + Math.sin(rx * 0.035) * 40}
                x2={rx}
                y2={130 - Math.sin(rx * 0.035) * 40}
                stroke={idx % 2 === 0 ? "rgba(0, 174, 239, 0.35)" : "rgba(232, 80, 42, 0.35)"}
                strokeWidth="1.2"
                strokeDasharray="2 2"
              />
              <circle
                cx={rx}
                cy={40 + Math.sin(rx * 0.035) * 40}
                r="2.2"
                fill="#00AEEF"
              />
              <circle
                cx={rx}
                cy={130 - Math.sin(rx * 0.035) * 40}
                r="2.2"
                fill="#E8502A"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ── 6. Continuous Clinical ECG Telemetry Heartbeat Wave (Bottom) ── */}
      <div className="absolute bottom-4 inset-x-0 h-14 pointer-events-none opacity-20 hidden sm:block">
        <svg className="w-full h-full" viewBox="0 0 1200 55" fill="none" preserveAspectRatio="none">
          <path
            d="M0 27 L380 27 L395 9 L405 48 L415 14 L425 38 L435 27 L820 27 L835 9 L845 48 L855 14 L865 38 L875 27 L1200 27"
            stroke="#00AEEF"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="animate-ecg-travel"
          />
        </svg>
      </div>

      {/* ── 7. Soft Clinical Wash to Blend Seamlessly with Page ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7FA]/75 via-transparent to-[#F4F7FA]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FA]/30 via-transparent to-[#F4F7FA]/30 pointer-events-none" />
    </div>
  );
}
