'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  activeLink?: string;
}

export default function Header({ activeLink = 'Home' }: HeaderProps) {
  const [showFullNavbar, setShowFullNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '/our-properties' },
    { name: 'ROI Calculator', href: '/roi-calculator' },
    { name: 'Contact', href: '/contact' },
    { name: 'Key Risks', href: '/key-risks' }
  ];

  useEffect(() => {
    const onScroll = () => {
      setShowFullNavbar(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (showFullNavbar) {
      setMenuOpen(false);
    }
  }, [showFullNavbar]);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-5 pt-[24px]">
      <div className=" mx-auto max-w-[1200px] h-[68px] relative">
        <div
          className={` absolute inset-0 flex items-center justify-between transition-all duration-500 ease-in-out ${showFullNavbar
            ? 'opacity-0 scale-[0.98] translate-y-[-8px] pointer-events-none'
            : 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            }`}
        >
          <button
            type="button"
            aria-label="Select language"
            className="h-[44px] w-[44px] rounded-full border border-[#E4E4E4] bg-white text-[#111111] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-in-out hover:scale-[1.03]"
          >
            <span className="flex items-center justify-center gap-[4px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a15 15 0 0 1 0 18" />
                <path d="M12 3a15 15 0 0 0 0 18" />
              </svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>


          <div className="relative">
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="h-[58px] px-[22px] rounded-[999px] bg-[#0B0B10] text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)] flex items-center gap-[12px] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
            >

              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>

            <div
              className={`absolute right-0 top-[68px] w-[220px] rounded-[18px] border border-[#ECECEC] bg-white p-[8px] shadow-[0_20px_45px_rgba(0,0,0,0.14)] transition-all duration-300 ease-in-out ${menuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-[-8px] pointer-events-none'
                }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex h-[42px] items-center rounded-[12px] px-[14px] text-[15px] transition-colors ${link.name === activeLink
                    ? 'bg-[#FFF5EE] text-[#FE5919] font-semibold'
                    : 'text-[#111111] font-medium hover:bg-[#F7F7F7]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>


        {/* Desktop Navigation */}
        <div
          className='hidden sm:block absolute inset-0 '
        >
          <div className="flex items-center justify-between bg-white rounded-[78px] py-[10px] pr-[10px] pl-[40px] h-[68px] w-full border border-white/70 backdrop-blur-md shadow-[0_14px_38px_rgba(0,0,0,0.12)]">
            <Link href="/" className="flex items-center">
              <span className="text-[#277079] text-[24px] font-bold">FEU</span>
              <span className="text-[#FE5919] text-[24px] font-bold">X</span>
            </Link>

            <nav className="flex items-center gap-[24px] pl-20">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[16px] leading-[20px] transition-colors ${link.name === activeLink
                    ? 'text-[#FE5919] font-semibold underline'
                    : 'text-[#111111] font-medium hover:text-[#FE5919]'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center h-[48px] gap-6">
              <button className="bg-[#FF6500] text-white h-[48px] px-[16px] rounded-[69px] text-[16px] leading-[20px] font-semibold flex items-center gap-[8px] hover:bg-[#e65b00] transition-colors">
                Get Started
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </button>
              <button className="bg-[#22C3D8] text-white w-[48px] h-[48px] rounded-[69px] flex items-center justify-center hover:bg-[#1eb3c7] transition-colors ml-[-4px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
