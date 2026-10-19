"use client";

import React, { useEffect, useRef } from "react";

interface NetworkBackgroundCanvasProps {
  className?: string;
  nodeCount?: number;
  maxDistance?: number;
  interactive?: boolean;
}

export default function NetworkBackgroundCanvas({
  className = "",
  nodeCount = 55,
  maxDistance = 150,
  interactive = true,
}: NetworkBackgroundCanvasProps) {
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

    // Mouse coordinates
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

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Nodes
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      color: string;
      isHub: boolean;
      pingRadius: number;
      pingAlpha: number;
    }

    const colors = ["#00AEEF", "#0089B0", "#E8502A", "#FFFFFF"];
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const isHub = i % 8 === 0;
      const baseRadius = isHub ? Math.random() * 2 + 4.5 : Math.random() * 2 + 1.8;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: baseRadius,
        baseRadius,
        color: isHub ? "#E8502A" : colors[Math.floor(Math.random() * colors.length)],
        isHub,
        pingRadius: 0,
        pingAlpha: 0,
      });
    }

    // Traveling Data Packets
    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }

    const packets: Packet[] = [];
    const maxPackets = 18;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // ── 1. Update & Move Nodes ──
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce gently off borders
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        if (interactive && mouseX > 0 && mouseY > 0) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseRadius && dist > 0) {
            // Gentle attraction and pulse
            const force = (mouseRadius - dist) / mouseRadius;
            node.x += (dx / dist) * force * 0.6;
            node.y += (dy / dist) * force * 0.6;
            node.radius = node.baseRadius + force * 2.5;
          } else {
            node.radius += (node.baseRadius - node.radius) * 0.1;
          }
        }
      }

      // ── 2. Draw Connections Between Nodes ──
      const connections: { i: number; j: number }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            connections.push({ i, j });
            const alpha = (1 - dist / maxDistance) * 0.55;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].isHub || nodes[j].isHub ? "rgba(0, 174, 239, 0.65)" : "rgba(255, 255, 255, 0.35)";
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Draw line to cursor if close
        if (interactive && mouseX > 0 && mouseY > 0) {
          const dx = mouseX - nodes[i].x;
          const dy = mouseY - nodes[i].y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = "#00AEEF";
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // ── 3. Spawn & Animate Data Signal Packets ──
      if (connections.length > 0 && packets.length < maxPackets && Math.random() < 0.3) {
        const conn = connections[Math.floor(Math.random() * connections.length)];
        packets.push({
          fromIndex: conn.i,
          toIndex: conn.j,
          progress: 0,
          speed: Math.random() * 0.015 + 0.012,
          color: Math.random() > 0.4 ? "#00AEEF" : "#E8502A",
        });
      }

      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const fromNode = nodes[pkt.fromIndex];
        const toNode = nodes[pkt.toIndex];
        if (!fromNode || !toNode) {
          packets.splice(p, 1);
          continue;
        }

        const curX = fromNode.x + (toNode.x - fromNode.x) * pkt.progress;
        const curY = fromNode.y + (toNode.y - fromNode.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.globalAlpha = 0.9;
        ctx.shadowBlur = 10;
        ctx.shadowColor = pkt.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ── 4. Draw Nodes and Hub Pulse Rings ──
      for (const node of nodes) {
        // Hub radar ping animation
        if (node.isHub) {
          node.pingRadius += 0.6;
          node.pingAlpha = Math.max(0, 1 - node.pingRadius / 45);

          if (node.pingRadius > 45) {
            node.pingRadius = 0;
            node.pingAlpha = 0.7;
          }

          if (node.pingAlpha > 0) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius + node.pingRadius, 0, Math.PI * 2);
            ctx.strokeStyle = node.color;
            ctx.globalAlpha = node.pingAlpha * 0.5;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.25;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.85;
        ctx.shadowBlur = 8;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Specular dot
        ctx.beginPath();
        ctx.arc(node.x - node.radius * 0.25, node.y - node.radius * 0.25, node.radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = 0.8;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [nodeCount, maxDistance, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ display: "block" }}
    />
  );
}
