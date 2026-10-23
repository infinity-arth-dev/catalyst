"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Container from "../../ui/Container";
import { navigation } from "../../../data/navigation";
import { Menu, X, ChevronDown, ChevronRight, PhoneCall } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    setDesktopDropdownOpen(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  const isParentActive = (item: NavItem) => {
    if (isActive(item.href)) return true;
    if (item.children) {
      return item.children.some((child) => isActive(child.href));
    }
    return false;
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 transition-all duration-200 bg-white/98 backdrop-blur-md shadow-sm border-b border-[#DCE6EE]"
    >
      {/* ── Main Navigation Bar ── */}
      <Container className="flex items-center justify-between gap-4 py-2.5 sm:py-3">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform duration-200 hover:scale-[1.01]"
        >
          <Image
            src="/images/logocatalyst.jpg"
            alt="Catalyst Biomedicals"
            width={340}
            height={95}
            className={`${
              scrolled
                ? "h-10 sm:h-12 md:h-14 lg:h-[62px]"
                : "h-11 sm:h-13 md:h-15 lg:h-[68px]"
            } w-auto object-contain transition-all duration-200`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} aria-label="Main" className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex items-center gap-5 xl:gap-7">
            {navigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const parentActive = isParentActive(item);
              const isDropdownVisible = desktopDropdownOpen === item.label;

              if (hasChildren) {
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDesktopDropdownOpen(item.label)}
                    onMouseLeave={() => setDesktopDropdownOpen(null)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setDesktopDropdownOpen((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                      className={`group font-bold py-2 transition-all flex items-center gap-1.5 cursor-pointer relative text-sm ${
                        parentActive
                          ? "text-[#00AEEF]"
                          : "text-slate-700 hover:text-[#00AEEF]"
                      }`}
                      aria-expanded={isDropdownVisible}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownVisible
                            ? "rotate-180 text-[#00AEEF]"
                            : "text-slate-400 group-hover:text-[#00AEEF]"
                        }`}
                      />
                      {/* Active indicator bar */}
                      {parentActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#00AEEF]" />
                      )}
                    </button>

                    {/* Desktop Dropdown Card */}
                    {isDropdownVisible && (
                      <div className="absolute top-full left-0 z-50 pt-2 transition-all duration-150 min-w-[240px]">
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-xl backdrop-blur-md">
                          <div className="h-1 w-full rounded-t-full bg-gradient-to-r from-[#00AEEF] via-[#29bbf4] to-[#E8502A] mb-2.5" />
                          <ul className="space-y-1">
                            {item.children!.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setDesktopDropdownOpen(null)}
                                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all duration-150 ${
                                      childActive
                                        ? "bg-[#EAF5F8] text-[#00AEEF]"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-[#00AEEF] hover:translate-x-1"
                                    }`}
                                  >
                                    <span>{child.label}</span>
                                    {childActive && (
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group font-bold py-2 transition-all relative text-sm ${
                      isActive(item.href)
                        ? "text-[#00AEEF]"
                        : "text-slate-700 hover:text-[#00AEEF]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#00AEEF]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Mobile Menu Trigger Button ── */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact-us"
            className="hidden sm:inline-flex lg:hidden items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EAF5F8] text-[#00AEEF] text-xs font-bold border border-[#00AEEF]/30"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact</span>
          </Link>

          <button
            type="button"
            className="rounded-xl p-2.5 lg:hidden transition-colors active:scale-95 text-slate-800 hover:bg-slate-100 hover:text-[#00AEEF] border border-slate-200"
            aria-expanded={open}
            aria-controls="mobile-navigation-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="w-6 h-6 text-[#E8502A]" /> : <Menu className="w-6 h-6 text-slate-800" />}
          </button>
        </div>
      </Container>

      {/* ── Mobile Responsive Dropdown & Navigation Drawer ── */}
      {open && (
        <div
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-full z-50 bg-slate-900/50 backdrop-blur-sm lg:hidden h-[calc(100dvh-100%)] flex flex-col justify-start"
        >
          {/* Main Drawer Sheet */}
          <div className="bg-white border-b border-slate-200/80 shadow-xl max-h-[calc(100dvh-75px)] overflow-y-auto px-4 py-3">
            <ul className="flex flex-col divide-y divide-slate-100">
              {navigation.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const parentActive = isParentActive(item);
                const isSubmenuOpen = mobileSubmenuOpen === item.label;

                if (hasChildren) {
                  return (
                    <li key={item.label} className="py-0.5">
                      <div className="flex items-center justify-between">
                        {/* Parent Page Direct Link */}
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`flex-1 py-2.5 px-2 text-[15px] transition-colors ${
                            parentActive
                              ? "text-[#00AEEF] font-semibold"
                              : "text-slate-800 hover:text-[#00AEEF] font-medium"
                          }`}
                        >
                          {item.label}
                        </Link>

                        {/* Minimal Toggle Button */}
                        <button
                          type="button"
                          onClick={() =>
                            setMobileSubmenuOpen((prev) =>
                              prev === item.label ? null : item.label
                            )
                          }
                          className="p-2.5 text-slate-400 hover:text-[#00AEEF] transition-colors rounded-lg active:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                          aria-expanded={isSubmenuOpen}
                          aria-label={`Toggle ${item.label} submenu`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSubmenuOpen
                                ? "rotate-180 text-[#00AEEF]"
                                : "text-slate-400"
                            }`}
                          />
                        </button>
                      </div>

                      {/* Minimal Indented Submenu */}
                      {isSubmenuOpen && (
                        <div className="ml-3 pl-3 border-l border-slate-200/90 my-1 space-y-0.5">
                          {item.children!.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={`block px-2.5 py-2 rounded-lg text-sm transition-colors ${
                                  childActive
                                    ? "text-[#00AEEF] font-semibold bg-[#EAF5F8]/70"
                                    : "text-slate-600 hover:text-[#00AEEF] hover:bg-slate-50 font-normal"
                                }`}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="py-0.5">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block py-2.5 px-2 text-[15px] rounded-lg transition-colors ${
                        isActive(item.href)
                          ? "text-[#00AEEF] font-semibold bg-[#EAF5F8]/50"
                          : "text-slate-800 hover:text-[#00AEEF] font-medium"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Dimmed backdrop area (tap outside to close) */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
