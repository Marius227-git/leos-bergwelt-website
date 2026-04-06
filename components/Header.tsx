"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Startseite", href: "/" },
  {
    name: "Zimmer",
    href: "/zimmer",
    submenu: [
      { name: "Enzian", href: "/zimmer/enzian" },
      { name: "Steinbock", href: "/zimmer/steinbock" },
      { name: "Zitronenfalter", href: "/zimmer/zitronenfalter" },
    ],
  },
  { name: "Allgäu Erleben", href: "/allgaeu-erleben" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Buchung", href: "/#buchung" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F2F7E4]/98 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo - größer, ohne Text */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/leos_bergwelt_logo_freigestellt.png"
            alt="Leos Bergwelt Logo"
            width={80}
            height={80}
            className="h-16 w-16 md:h-20 md:w-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#2B7A9B] ${
                  scrolled ? "text-[#3D2817]" : "text-white"
                }`}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <ul className="absolute left-0 top-full hidden w-48 rounded-lg bg-white py-2 shadow-xl group-hover:block">
                  {item.submenu.map((subitem) => (
                    <li key={subitem.name}>
                      <Link
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-[#3D2817] transition-colors hover:bg-[#F2F7E4] hover:text-[#2B7A9B]"
                      >
                        {subitem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/#buchung"
          className={`hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all md:block ${
            scrolled
              ? "bg-[#2B7A9B] text-white hover:bg-[#236580]"
              : "bg-white text-[#3D2817] hover:bg-[#F2F7E4]"
          }`}
        >
          Jetzt buchen
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden"
          aria-label="Menu"
        >
          <svg
            className={`h-6 w-6 ${scrolled ? "text-[#3D2817]" : "text-white"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu - Berghotel Balderschwang Style */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-[#d8dcc4] lg:hidden animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
            aria-label="Menü schließen"
          >
            <svg className="h-8 w-8 text-[#3D2817]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <ul className="flex h-full flex-col items-center justify-center space-y-6 px-6">
            {navigation.map((item) => (
              <li key={item.name} className="text-center">
                <Link
                  href={item.href}
                  className="block font-serif text-3xl font-normal text-[#8B8B5C] transition-colors hover:text-[#3D2817] md:text-4xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className="mt-3 space-y-2">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.name}>
                        <Link
                          href={subitem.href}
                          className="block text-base text-[#8B8B5C]/70 transition-colors hover:text-[#3D2817]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
