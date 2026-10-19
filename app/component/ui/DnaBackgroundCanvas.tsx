"use client";

import React, { useEffect, useRef } from "react";

interface DnaBackgroundCanvasProps {
  className?: string;
  strandColorA?: string;
  strandColorB?: string;
  particleCount?: number;
}

export default function DnaBackgroundCanvas({
  className = "",
  strandColorA = "#00AEEF", // Brand cyan
  strandColorB = "#E8502A", // Brand accent coral
  particleCount = 45,
}: DnaBackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse coordinates for gentle parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Intersection Observer to pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Ambient floating particles (molecular dust/micro-cells)
    interface AmbientParticle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
    }

    const ambientParticles: AmbientParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      ambientParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.6 - 0.2, // drifting upwards
        alpha: Math.random() * 0.6 + 0.2,
        color: Math.random() > 0.4 ? strandColorA : strandColorB,
      });
    }

    let rotation = 0;
    const helixPoints = 34; // Number of rungs in the visible helix

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // ── 1. Draw and update ambient floating particles ──
      for (const p of ambientParticles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.75;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ── 2. Draw 3D Rotating DNA Double Helix ──
      rotation += 0.016;

      // Center helix diagonal across canvas for dynamic presence
      const startX = width * 0.08;
      const endX = width * 0.92;
      const startY = height * 0.05;
      const endY = height * 0.95;

      // Parallax shift from mouse
      const pOffsetX = (mouseX - width / 2) * 0.04;
      const pOffsetY = (mouseY - height / 2) * 0.04;

      const rungRadius = Math.min(width * 0.18, 160); // Wider, grander Helix

      interface HelixNode {
        x: number;
        y: number;
        z: number;
        color: string;
        isStrandA: boolean;
      }

      const pairs: [HelixNode, HelixNode][] = [];

      for (let i = 0; i < helixPoints; i++) {
        const progress = i / (helixPoints - 1);
        const baseY = startY + (endY - startY) * progress + pOffsetY;
        const baseX = startX + (endX - startX) * progress + pOffsetX;

        // Angle along helix
        const angle = progress * Math.PI * 4.2 + rotation;

        // 3D coordinate projection
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);

        // Tilt angle perpendicular to diagonal
        const tiltAngle = Math.atan2(endY - startY, endX - startX) + Math.PI / 2;
        const perpX = Math.cos(tiltAngle);
        const perpY = Math.sin(tiltAngle);

        const nodeAX = baseX + perpX * cosA * rungRadius;
        const nodeAY = baseY + perpY * cosA * rungRadius;
        const nodeAZ = sinA * rungRadius;

        const nodeBX = baseX - perpX * cosA * rungRadius;
        const nodeBY = baseY - perpY * cosA * rungRadius;
        const nodeBZ = -sinA * rungRadius;

        pairs.push([
          { x: nodeAX, y: nodeAY, z: nodeAZ, color: strandColorA, isStrandA: true },
          { x: nodeBX, y: nodeBY, z: nodeBZ, color: strandColorB, isStrandA: false },
        ]);
      }

      // Sort base-pair rungs by depth so back rungs are drawn first
      const sortedRungs = pairs.map(([a, b], idx) => ({
        a,
        b,
        avgZ: (a.z + b.z) / 2,
        idx,
      }));
      sortedRungs.sort((r1, r2) => r1.avgZ - r2.avgZ);

      // Draw connecting rungs (hydrogen bonds)
      for (const rung of sortedRungs) {
        const { a, b, avgZ } = rung;
        const depthNorm = (avgZ + rungRadius) / (rungRadius * 2); // 0 (back) to 1 (front)
        const alpha = 0.25 + depthNorm * 0.65;

        // Rung line with linear gradient between strand colors
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, strandColorA);
        grad.addColorStop(0.5, "rgba(255, 255, 255, 0.95)");
        grad.addColorStop(1, strandColorB);

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8 + depthNorm * 2.2;
        ctx.globalAlpha = alpha * 0.85;
        ctx.stroke();

        // Midpoint hydrogen bond molecule
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;
        ctx.beginPath();
        ctx.arc(midX, midY, 2.5 + depthNorm * 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = alpha * 0.9;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#00AEEF";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw helix backbone ribbon/curves
      const drawBackbone = (isA: boolean) => {
        ctx.beginPath();
        for (let i = 0; i < pairs.length; i++) {
          const node = isA ? pairs[i][0] : pairs[i][1];
          if (i === 0) {
            ctx.moveTo(node.x, node.y);
          } else {
            const prev = isA ? pairs[i - 1][0] : pairs[i - 1][1];
            const cx = (prev.x + node.x) / 2;
            const cy = (prev.y + node.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
          }
        }
        ctx.strokeStyle = isA ? strandColorA : strandColorB;
        ctx.lineWidth = 2.2;
        ctx.globalAlpha = 0.5;
        ctx.stroke();
      };

      drawBackbone(true);
      drawBackbone(false);

      // Draw all nodes on top sorted by depth
      const allNodes: HelixNode[] = [];
      for (const [a, b] of pairs) {
        allNodes.push(a, b);
      }
      allNodes.sort((n1, n2) => n1.z - n2.z);

      for (const node of allNodes) {
        const depthNorm = (node.z + rungRadius) / (rungRadius * 2);
        const radius = 3.5 + depthNorm * 4.5;
        const alpha = 0.3 + depthNorm * 0.7;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 1.8, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = alpha * 0.35;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 12 * depthNorm;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Inner white specular highlight for 3D sphere look
        if (depthNorm > 0.4) {
          ctx.beginPath();
          ctx.arc(node.x - radius * 0.3, node.y - radius * 0.3, radius * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.globalAlpha = alpha;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [strandColorA, strandColorB, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ display: "block" }}
    />
  );
}
