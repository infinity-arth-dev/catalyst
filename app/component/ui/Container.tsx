import React from "react";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const hasMaxWidth = className.includes("max-w-");
  return (
    <div
      className={`mx-auto ${
        hasMaxWidth ? "" : "max-w-7xl 2xl:max-w-screen-2xl"
      } px-4 sm:px-6 lg:px-8 xl:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
