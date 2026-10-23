"use client";

import React, { useEffect, useRef, useState } from "react";

export default function ProductsBackgroundAnimation() {
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

    // Interactive mouse tracking
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

    // Biomedical Node Definition
    // Types: 0 = molecule dot, 1 = medical cross, 2 = concentric pulse ring, 3 = diamond bio-sensor
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

    const nodeCount = 36;
    const nodes: BiomedicalNode[] = [];

    const brandBlue = "#00AEEF";
    const brandOrange = "#E8502A";

    for (let i = 0; i < nodeCount; i++) {
      const isOrange = Math.random() < 0.25;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1.2,
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

      // Faint medical grid dots
      const gridSize = 48;
      ctx.fillStyle = "rgba(0, 174, 239, 0.065)";
      for (let x = 24; x < width; x += gridSize) {
        for (let y = 24; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw interactive connections between nodes
      const maxConnectDist = 135;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.24;
            const strokeColor =
              nodes[i].color === brandOrange || nodes[j].color === brandOrange
                ? `rgba(232, 80, 42, ${alpha * 0.75})`
                : `rgba(0, 174, 239, ${alpha})`;

            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 0.95;
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

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce from boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction (cursor attraction & connecting ray)
        const mdx = mouseX - node.x;
        const mdy = mouseY - node.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouseRadius && mDist > 0) {
          const force = (1 - mDist / mouseRadius) * 1.8;
          node.x -= (mdx / mDist) * force;
          node.y -= (mdy / mDist) * force;

          ctx.strokeStyle =
            node.color === brandOrange
              ? `rgba(232, 80, 42, ${0.4 * (1 - mDist / mouseRadius)})`
              : `rgba(0, 174, 239, ${0.45 * (1 - mDist / mouseRadius)})`;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Pulse breathing
        node.pulseAngle += node.pulseSpeed;
        const currentRadius = node.radius + Math.sin(node.pulseAngle) * 0.75;

        ctx.save();
        ctx.shadowColor = node.glowColor;
        ctx.shadowBlur = 9;
        ctx.fillStyle = node.color;

        if (node.type === 1) {
          // Medical cross symbol
          const s = currentRadius * 1.5;
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 1.4;
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
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.arc(
            node.x,
            node.y,
            currentRadius + 4.5 + Math.sin(node.pulseAngle) * 2.5,
            0,
            Math.PI * 2
          );
          ctx.stroke();
        } else if (node.type === 3) {
          // Diamond bio-sensor
          const s = currentRadius * 1.3;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y - s);
          ctx.lineTo(node.x + s, node.y);
          ctx.lineTo(node.x, node.y + s);
          ctx.lineTo(node.x - s, node.y);
          ctx.closePath();
          ctx.fill();
        } else {
          // Molecule dot
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Pause animation when section is offscreen
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
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ touchAction: "none" }}
      />

      {/* ── 2. Vivid Glowing Ambient Gradient Spheres (Logo Theme: Cyan & Orange) ── */}
      {/* Centered Ambient Halo directly behind "Comprehensive Medical Portfolio" & Title */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[620px] h-[340px] rounded-full bg-gradient-to-r from-[#00AEEF]/20 via-[#E8502A]/12 to-[#00AEEF]/18 blur-3xl animate-pulse-glow" />

      {/* Flanking Side Glow Orbs */}
      <div className="absolute top-1/4 -left-28 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#00AEEF]/16 via-[#29bbf4]/10 to-transparent blur-3xl animate-bio-breathing" />
      <div className="absolute top-1/2 -right-28 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#E8502A]/15 via-[#EF6B44]/10 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute -bottom-24 left-1/3 w-[480px] h-[480px] rounded-full bg-[#00AEEF]/12 blur-3xl" />

      {/* ── 3. High-Tech Nanotech Hexagonal Molecular Lattice Mesh ── */}
      <div className="absolute inset-0 opacity-[0.13] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="products-hex-pattern"
              width="56"
              height="96.99"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M28 0 L56 16.16 L56 48.5 L28 64.66 L0 48.5 L0 16.16 Z M28 48.5 L56 64.66 L56 96.99 L28 113.15 L0 96.99 L0 64.66 Z"
                fill="none"
                stroke="rgba(0, 174, 239, 0.42)"
                strokeWidth="0.8"
              />
              <circle cx="28" cy="16.16" r="1.5" fill="#E8502A" opacity="0.65" />
              <circle cx="28" cy="64.66" r="1.5" fill="#00AEEF" opacity="0.65" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#products-hex-pattern)" />
        </svg>
      </div>

      {/* ── 4. Dedicated Telemetry Bio-Radar & Targeting Reticle Behind Title ── */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[540px] h-[320px] pointer-events-none flex items-center justify-center opacity-28">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Concentric telemetry rings */}
          <div className="absolute w-[460px] h-[260px] rounded-full border border-[#00AEEF]/20 animate-bio-breathing" />
          <div className="absolute w-[360px] h-[200px] rounded-full border border-dashed border-[#00AEEF]/30 animate-spin-slow" />
          <div className="absolute w-[240px] h-[140px] rounded-full border border-[#E8502A]/25" />
          <div className="absolute w-[120px] h-[80px] rounded-full border border-[#00AEEF]/40" />

          {/* 360° Circular Radar Sweep Line */}
          <div className="absolute w-[340px] h-[340px] rounded-full animate-radar-spin origin-center">
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#00AEEF]/6 to-[#00AEEF]/14 [clip-path:polygon(100%_50%,0_0,0_50%)]" />
          </div>

          {/* Precision quadrant crosshair markers */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00AEEF]/50" />
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#00AEEF]/50" />
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-0.5 h-4 bg-[#E8502A]/50" />
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-0.5 h-4 bg-[#E8502A]/50" />
        </div>
      </div>

      {/* ── 5. Stylized Animated SVG DNA Double-Helix Waves (Left & Right Flanks) ── */}
      {/* Left Flank DNA */}
      <div className="absolute -left-16 top-1/3 w-[36vw] max-w-[420px] h-[340px] hidden lg:block opacity-22 pointer-events-none">
        <svg
          viewBox="0 0 420 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="prodDnaBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0077a3" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="prodDnaOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8502A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FF7A59" stopOpacity="0.8" />
            </linearGradient>
            <filter id="prodDnaGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Strand 1 */}
          <path
            d="M 10 60 Q 110 140 210 60 T 410 60"
            stroke="url(#prodDnaBlue)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#prodDnaGlow)"
            className="animate-pulse"
          />
          {/* Strand 2 */}
          <path
            d="M 10 160 Q 110 80 210 160 T 410 160"
            stroke="url(#prodDnaOrange)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#prodDnaGlow)"
            className="animate-pulse"
            style={{ animationDelay: "1.2s" }}
          />

          {/* Hydrogen Rungs */}
          {[50, 100, 150, 200, 250, 300, 350].map((rx, idx) => (
            <g key={rx} className="animate-pulse" style={{ animationDelay: `${idx * 160}ms` }}>
              <line
                x1={rx}
                y1={60 + Math.sin(rx * 0.035) * 45}
                x2={rx}
                y2={160 - Math.sin(rx * 0.035) * 45}
                stroke={idx % 2 === 0 ? "rgba(0, 174, 239, 0.45)" : "rgba(232, 80, 42, 0.45)"}
                strokeWidth="1.8"
                strokeDasharray="2.5 2.5"
              />
              <circle
                cx={rx}
                cy={60 + Math.sin(rx * 0.035) * 45}
                r="3"
                fill="#00AEEF"
                filter="url(#prodDnaGlow)"
              />
              <circle
                cx={rx}
                cy={160 - Math.sin(rx * 0.035) * 45}
                r="3"
                fill="#E8502A"
                filter="url(#prodDnaGlow)"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Right Flank DNA */}
      <div className="absolute -right-16 top-1/2 w-[36vw] max-w-[420px] h-[340px] hidden lg:block opacity-22 pointer-events-none">
        <svg
          viewBox="0 0 420 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Strand 1 */}
          <path
            d="M 10 70 Q 110 150 210 70 T 410 70"
            stroke="url(#prodDnaOrange)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#prodDnaGlow)"
            className="animate-pulse"
          />
          {/* Strand 2 */}
          <path
            d="M 10 170 Q 110 90 210 170 T 410 170"
            stroke="url(#prodDnaBlue)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#prodDnaGlow)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Hydrogen Rungs */}
          {[60, 110, 160, 210, 260, 310, 360].map((rx, idx) => (
            <g key={rx} className="animate-pulse" style={{ animationDelay: `${idx * 160}ms` }}>
              <line
                x1={rx}
                y1={70 + Math.sin(rx * 0.035) * 45}
                x2={rx}
                y2={170 - Math.sin(rx * 0.035) * 45}
                stroke={idx % 2 === 0 ? "rgba(232, 80, 42, 0.45)" : "rgba(0, 174, 239, 0.45)"}
                strokeWidth="1.8"
                strokeDasharray="2.5 2.5"
              />
              <circle
                cx={rx}
                cy={70 + Math.sin(rx * 0.035) * 45}
                r="3"
                fill="#E8502A"
                filter="url(#prodDnaGlow)"
              />
              <circle
                cx={rx}
                cy={170 - Math.sin(rx * 0.035) * 45}
                r="3"
                fill="#00AEEF"
                filter="url(#prodDnaGlow)"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* ── 6. Continuous Clinical ECG Telemetry Heartbeat Wave (Upper & Lower) ── */}
      {/* Upper ECG right behind the header / subtitle area */}
      <div className="absolute top-36 inset-x-0 h-14 pointer-events-none opacity-25 hidden sm:block">
        <svg className="w-full h-full" viewBox="0 0 1200 55" fill="none" preserveAspectRatio="none">
          <path
            d="M0 27 L250 27 L265 8 L275 46 L285 14 L295 38 L305 27 L720 27 L735 8 L745 46 L755 14 L765 38 L775 27 L1200 27"
            stroke="url(#prodDnaBlue)"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="animate-ecg-travel"
          />
        </svg>
      </div>

      {/* Lower ECG above catalogue button */}
      <div className="absolute bottom-16 inset-x-0 h-14 pointer-events-none opacity-25 hidden sm:block">
        <svg className="w-full h-full" viewBox="0 0 1200 55" fill="none" preserveAspectRatio="none">
          <path
            d="M0 27 L420 27 L435 8 L445 46 L455 14 L465 38 L475 27 L920 27 L935 8 L945 46 L955 14 L965 38 L975 27 L1200 27"
            stroke="url(#prodDnaOrange)"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="animate-ecg-travel"
            style={{ animationDelay: "2s" }}
          />
        </svg>
      </div>

      {/* ── 7. Soft Clinical Wash to Blend Seamlessly with Page ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7FA]/75 via-transparent to-[#F4F7FA]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FA]/40 via-transparent to-[#F4F7FA]/40 pointer-events-none" />
    </div>
  );
}
