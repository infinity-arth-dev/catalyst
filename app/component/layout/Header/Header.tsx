"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Container from "../../ui/Container";
import { navigation } from "../../../data/navigation";
import { Menu, X, ChevronDown, ArrowRight, PhoneCall } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>("About Us");
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2 sm:py-2.5"
          : "bg-white border-b border-slate-200 py-3 sm:py-4"
      }`}
    >
      {/* Main bar */}
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
          <Image
            src="/images/logocatalyst.jpg"
            alt="Catalyst Biomedicals"
            width={360}
            height={110}
            className={`${
              scrolled
                ? "h-14 sm:h-16 md:h-20 lg:h-[84px]"
                : "h-16 sm:h-20 md:h-[88px] lg:h-[96px]"
            } w-auto object-contain transition-all duration-300`}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} aria-label="Main" className="hidden md:flex items-center gap-7 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
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
                      className={`group font-semibold py-2 transition-all flex items-center gap-1.5 cursor-pointer relative ${
                        parentActive
                          ? "text-brand-600"
                          : "text-slate-700 hover:text-brand-600"
                      }`}
                      aria-expanded={isDropdownVisible}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isDropdownVisible ? "rotate-180 text-brand-600" : "text-slate-400 group-hover:text-brand-600"
                        }`}
                      />
                      {/* Active indicator bar */}
                      {parentActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 animate-scale-in" />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownVisible && (
                      <div className="absolute top-full left-0 z-50 pt-2 min-w-[230px] animate-fade-in-down">
                        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/98 p-2 shadow-xl shadow-brand-950/10 backdrop-blur-md">
                          <div className="h-1 w-full rounded-t-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 mb-1" />
                          <ul className="space-y-1">
                            {item.children!.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setDesktopDropdownOpen(null)}
                                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                      childActive
                                        ? "bg-brand-50 text-brand-600 font-bold translate-x-1"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-600 hover:translate-x-1"
                                    }`}
                                  >
                                    <span>{child.label}</span>
                                    {childActive && (
                                      <span className="h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse" />
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
                    className={`group font-semibold py-2 transition-all relative ${
                      isActive(item.href)
                        ? "text-brand-600"
                        : "text-slate-700 hover:text-brand-600"
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Active indicator bar */}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 animate-scale-in" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="rounded-xl p-2.5 text-slate-700 hover:bg-slate-100 md:hidden transition-all duration-200 active:scale-90"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6 text-brand-600" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-slate-200 bg-white/98 backdrop-blur-md md:hidden animate-fade-in-down"
        >
          <ul className="flex flex-col py-4 px-4 space-y-1.5">
            {navigation.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const parentActive = isParentActive(item);
              const isSubmenuOpen = mobileSubmenuOpen === item.label;

              if (hasChildren) {
                return (
                  <li
                    key={item.label}
                    className="border-b border-slate-100 last:border-b-0 pb-1"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSubmenuOpen(isSubmenuOpen ? null : item.label)
                      }
                      className={`w-full flex items-center justify-between py-3 px-3 font-semibold rounded-xl text-base transition-all duration-200 ${
                        parentActive
                          ? "text-brand-600 bg-brand-50/70"
                          : "text-slate-800 hover:bg-slate-50"
                      }`}
                      aria-expanded={isSubmenuOpen}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isSubmenuOpen ? "rotate-180 text-brand-600" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {/* Submenu links */}
                    {isSubmenuOpen && (
                      <ul className="ml-4 pl-3 border-l-2 border-brand-200 space-y-1 py-1.5 animate-fade-in-down">
                        {item.children!.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={`block py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                  childActive
                                    ? "bg-brand-50 text-brand-600 font-bold"
                                    : "text-slate-600 hover:text-brand-600 hover:translate-x-1"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li
                  key={item.href}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-3 font-semibold rounded-xl text-base transition-all duration-200 ${
                      isActive(item.href)
                        ? "bg-brand-50 text-brand-600"
                        : "text-slate-800 hover:bg-slate-50 hover:translate-x-1"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li className="pt-2">
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="btn-shimmer flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-brand-600/25"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact Our Specialists</span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
