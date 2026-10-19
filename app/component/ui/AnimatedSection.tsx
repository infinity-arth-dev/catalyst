"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "fade-in";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 650,
  threshold = 0.05,
  once = true,
  style,
  ...rest
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if element is already within the viewport on mount
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100 && rect.bottom > -50) {
      setIsVisible(true);
      if (once) return;
    }

    // Fallback if IntersectionObserver is not available
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px 50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Initial and active animation transform styles
  const getTransformStyle = () => {
    switch (animation) {
      case "fade-up":
        return isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, 28px, 0)";
      case "fade-down":
        return isVisible ? "translate3d(0, 0, 0)" : "translate3d(0, -24px, 0)";
      case "fade-left":
        return isVisible ? "translate3d(0, 0, 0)" : "translate3d(-28px, 0, 0)";
      case "fade-right":
        return isVisible ? "translate3d(0, 0, 0)" : "translate3d(28px, 0, 0)";
      case "scale-in":
        return isVisible ? "scale(1)" : "scale(0.94)";
      case "fade-in":
      default:
        return "none";
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
