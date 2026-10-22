"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Container from "../../ui/Container";
import { navigation } from "../../../data/navigation";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>("Products");
  const navRef = useRef<HTMLElement | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  // Close mobile drawer on Escape key and lock body scroll
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
    <header className="sticky top-0 z-50 transition-all duration-250 ease-out bg-white/95 backdrop-blur-md shadow-md border-b border-[#DCE6EE] py-2 sm:py-2.5">
      {/* Main bar */}
      <Container className="flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/images/logocatalyst.jpg"
            alt="Catalyst Biomedicals"
            width={340}
            height={95}
            className={`${
              scrolled
                ? "h-11 sm:h-13 md:h-16 lg:h-[68px]"
                : "h-12 sm:h-14 md:h-16 lg:h-[72px]"
            } w-auto object-contain transition-all duration-250`}
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
                      className={`group font-semibold py-2 transition-all flex items-center gap-1 cursor-pointer relative text-sm ${
                        parentActive
                          ? "text-[#00AEEF] font-bold"
                          : "text-[#00AEEF]/85 hover:text-[#00AEEF]"
                      }`}
                      aria-expanded={isDropdownVisible}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-150 ${
                          isDropdownVisible
                            ? "rotate-180 text-[#00AEEF]"
                            : "text-[#00AEEF]/70 group-hover:text-[#00AEEF]"
                        }`}
                      />
                      {/* Active indicator bar */}
                      {parentActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#00AEEF] animate-scale-in" />
                      )}
                    </button>

                    {/* Dropdown Menu with 150ms fade and 8px upward motion */}
                    {isDropdownVisible && (
                      <div
                        className={`absolute top-full left-0 z-50 pt-2 transition-all duration-150 transform translate-y-0 ${
                          item.label === "Products" ? "min-w-[340px]" : "min-w-[240px]"
                        }`}
                      >
                        <div className="overflow-hidden rounded-2xl border border-[#DCE6EE] bg-white p-3 shadow-2xl shadow-[#071B33]/15 backdrop-blur-md">
                          <div className="h-1 w-full rounded-t-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 mb-2" />
                          
                          {item.label === "Products" ? (
                            <div>
                              <div className="px-3 py-1.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 mb-1.5">
                                <span>Clinical Specialties</span>
                                <Link
                                  href="/products"
                                  onClick={() => setDesktopDropdownOpen(null)}
                                  className="text-[#00AEEF] hover:underline"
                                >
                                  View All
                                </Link>
                              </div>
                              <div className="grid grid-cols-2 gap-1">
                                {item.children!.map((child) => {
                                  const childActive = pathname === child.href;
                                  return (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setDesktopDropdownOpen(null)}
                                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                                        childActive
                                          ? "bg-[#EAF5F8] text-[#00AEEF] font-bold"
                                          : "text-[#071B33] hover:bg-slate-50 hover:text-[#00AEEF] hover:translate-x-0.5"
                                      }`}
                                    >
                                      <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
                                      <span className="truncate">{child.label}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            <ul className="space-y-1">
                              {item.children!.map((child) => {
                                const childActive = pathname === child.href;
                                return (
                                  <li key={child.href}>
                                    <Link
                                      href={child.href}
                                      onClick={() => setDesktopDropdownOpen(null)}
                                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                                        childActive
                                          ? "bg-[#EAF5F8] text-[#00AEEF] font-bold"
                                          : "text-[#00AEEF] hover:bg-[#EAF5F8] hover:translate-x-1"
                                      }`}
                                    >
                                      <span>{child.label}</span>
                                      {childActive && (
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
                                      )}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
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
                    className={`group font-semibold py-2 transition-all relative text-sm ${
                      isActive(item.href)
                        ? "text-[#00AEEF] font-bold"
                        : "text-[#00AEEF]/85 hover:text-[#00AEEF]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Active indicator bar */}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#00AEEF] animate-scale-in" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          {/* Mobile menu trigger */}
          <button
            type="button"
            className="rounded-xl p-2.5 lg:hidden transition-all duration-200 active:scale-90 text-[#00AEEF] hover:bg-[#EAF5F8]/50"
            aria-expanded={open}
            aria-controls="mobile-menu-drawer"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6 text-[#00AEEF]" /> : <Menu className="w-6 h-6 text-[#00AEEF]" />}
          </button>
        </div>
      </Container>

      {/* Full-Height Accessible Mobile Drawer */}
      {open && (
        <div
          id="mobile-menu-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="fixed inset-0 top-[72px] z-50 bg-[#071B33]/70 backdrop-blur-md lg:hidden flex flex-col justify-between animate-fade-in"
        >
          <div className="bg-white max-h-[85vh] overflow-y-auto p-5 rounded-b-3xl shadow-2xl border-b border-[#DCE6EE]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                Menu Navigation
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ul className="flex flex-col space-y-1">
              {navigation.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const parentActive = isParentActive(item);
                const isSubmenuOpen = mobileSubmenuOpen === item.label;

                if (hasChildren) {
                  return (
                    <li key={item.label} className="border-b border-slate-100 last:border-b-0 pb-1">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSubmenuOpen(isSubmenuOpen ? null : item.label)
                        }
                        className={`w-full flex items-center justify-between py-3 px-3 font-bold rounded-xl text-base transition-colors ${
                          parentActive
                            ? "text-[#00AEEF] bg-[#EAF5F8]"
                            : "text-[#00AEEF] hover:bg-[#EAF5F8]/50"
                        }`}
                        aria-expanded={isSubmenuOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isSubmenuOpen ? "rotate-180 text-[#00AEEF]" : "text-[#00AEEF]/70"
                          }`}
                        />
                      </button>

                      {isSubmenuOpen && (
                        <ul className="ml-3 pl-3 border-l-2 border-[#00AEEF]/40 space-y-1 py-1.5 animate-fade-in-down">
                          {item.children!.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className={`block py-2 px-3 rounded-lg text-sm font-semibold transition-all ${
                                    childActive
                                      ? "bg-[#EAF5F8] text-[#00AEEF] font-bold"
                                      : "text-[#00AEEF]/85 hover:text-[#00AEEF]"
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
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-3 font-bold rounded-xl text-base transition-colors ${
                        isActive(item.href)
                          ? "bg-[#EAF5F8] text-[#00AEEF]"
                          : "text-[#00AEEF] hover:bg-[#EAF5F8]/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="pt-4">
                <Link
                  href="/contact-us"
                  onClick={() => setOpen(false)}
                  className="btn-shimmer flex items-center justify-center gap-2 rounded-xl bg-[#00AEEF] py-3.5 text-sm font-bold text-[#071B33] shadow-md shadow-cyan-500/20"
                >
                  <PhoneCall className="w-4 h-4 text-[#071B33]" />
                  <span>Request an Enquiry</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Backdrop click to dismiss */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}
