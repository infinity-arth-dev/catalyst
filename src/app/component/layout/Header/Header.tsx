"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/component/ui/Container";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>("About Us");

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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">

      {/* Main bar */}
      <Container className="flex items-center justify-between py-2.5 sm:py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logocatalyst.jpg"
            alt={site.name}
            width={240}
            height={75}
            className="h-14 sm:h-16 md:h-[68px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-8">
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
                    <div className="flex items-center gap-1 cursor-pointer">
                      <Link
                        href={item.href}
                        className={`font-semibold py-2 transition-colors flex items-center gap-1 ${
                          parentActive
                            ? "text-brand-600"
                            : "text-slate-700 hover:text-brand-600"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isDropdownVisible ? "rotate-180 text-brand-600" : "text-slate-400"
                          }`}
                        />
                      </Link>
                    </div>

                    {/* Dropdown Menu */}
                    {isDropdownVisible && (
                      <div className="absolute top-full left-0 z-50 pt-2 min-w-[220px] animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 shadow-xl shadow-brand-950/10 backdrop-blur-md">
                          <div className="h-1 w-full rounded-t-full bg-gradient-to-r from-brand-600 via-accent-600 to-brand-600 mb-1" />
                          <ul className="space-y-1">
                            {item.children!.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setDesktopDropdownOpen(null)}
                                    className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                                      childActive
                                        ? "bg-brand-50 text-brand-600 font-bold"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                                    }`}
                                  >
                                    <span>{child.label}</span>
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
                    className={`font-semibold py-2 transition-colors ${
                      isActive(item.href)
                        ? "text-brand-600"
                        : "text-slate-700 hover:text-brand-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden transition-colors"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-slate-200 bg-white md:hidden animate-in fade-in duration-200"
        >
          <ul className="flex flex-col py-3 px-4 space-y-1">
            {navigation.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const parentActive = isParentActive(item);
              const isSubmenuOpen = mobileSubmenuOpen === item.label;

              if (hasChildren) {
                return (
                  <li key={item.label} className="border-b border-slate-100 last:border-b-0 pb-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex-1 py-3 px-3 font-semibold rounded-xl text-base ${
                          parentActive
                            ? "text-brand-600 bg-brand-50/50"
                            : "text-slate-800"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label} sub-menu`}
                        onClick={() =>
                          setMobileSubmenuOpen(isSubmenuOpen ? null : item.label)
                        }
                        className="p-3 text-slate-500 hover:text-brand-600"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            isSubmenuOpen ? "rotate-180 text-brand-600" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Submenu links */}
                    {isSubmenuOpen && (
                      <ul className="ml-4 pl-3 border-l-2 border-brand-100 space-y-1 py-1">
                        {item.children!.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                                  childActive
                                    ? "bg-brand-50 text-brand-600 font-bold"
                                    : "text-slate-600 hover:text-brand-600"
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
                    className={`block px-3 py-3 font-semibold rounded-xl text-base transition-colors ${
                      isActive(item.href)
                        ? "bg-brand-50 text-brand-600"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
