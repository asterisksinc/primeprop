"use client";
import Link from "next/link";
import { useState } from "react";

interface NavbarProps {
    activeLink?: string;
    isFixed?: boolean;
}

export default function Navbar({ activeLink = "Home", isFixed = true }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Properties", href: "/our-properties" },
        { name: "ROI Calculator", href: "/roi-calculator" },
        { name: "Contact", href: "/contact" },
        { name: "Key Risks", href: "/key-risks" },
    ];

    const navPositionClass = isFixed
        ? "fixed top-0 left-0 right-0 z-30"
        : "relative z-30";

    return (
        <nav className={`${navPositionClass} px-5 pt-[2em]`}>
            <div className="max-w-sm sm:max-w-6xl mx-auto ">
                {/* Logo */}
                <div className="bg-white flex items-center justify-between border p-2 sm:p-4 pl-7 sm:px-10 rounded-full shadow-lg">
                    <div className="flex items-center ">
                        <span className="text-[#277079] text-[30px]  sm:text-[30px] font-bold">
                            FEU
                        </span>
                        <span className="text-[#FE5919] text-[30px]  sm:text-[30px] font-bold">
                            X
                        </span>
                    </div>

                    {/* Menu -- desktop only */}
                    <div className="hidden  md:flex items-center gap-7 pl-12">
                        {navLinks.map((link, index) => (
                            <Link key={index} href={link.href}>
                                <div
                                    className={`flex items-center font-normal transition-colors ${link.name === activeLink ? "text-[#FE5919] font-semibold underline" : "text-[#111111] font-medium hover:text-[#FE5919]"}`}
                                >
                                    {link.name}
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Menu Button - Mobile only */}
                    <div className="block md:hidden">
                        <button
                            type="button"
                            aria-label="Open menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((prev) => !prev)}
                            className="h-[58px] px-4 rounded-full bg-accent text-white flex items-center gap-[12px] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
                        >
                            <svg
                                width="33"
                                height="33"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                            >
                                <path d="M4 7h16" />
                                <path d="M4 12h16" />
                                <path d="M4 17h16" />
                            </svg>
                        </button>
                    </div>

                    {/* -- Menu Bar Only Mobile -- */}
                    <div
                        className={`absolute right-7 top-[7em] w-[220px] rounded-[18px] border border-[#ECECEC] bg-white p-[8px] shadow-[0_20px_45px_rgba(0,0,0,0.14)] transition-all duration-300 ease-in-out ${menuOpen
                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                : "opacity-0 translate-y-[-8px] pointer-events-none"
                            }`}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className={`flex h-[42px] items-center rounded-[12px] px-[14px] text-[15px] transition-colors ${link.name === activeLink
                                        ? "bg-[#FFF5EE] text-[#FE5919] font-semibold"
                                        : "text-[#111111] font-medium hover:bg-[#F7F7F7]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Get Started */}
                    <div className=" hidden md:flex items-center h-[48px] gap-6">
                        <button className="bg-[#FF6500] text-white h-[48px] px-[16px] rounded-[69px] text-[16px] leading-[20px] font-semibold flex items-center gap-[8px] hover:bg-[#e65b00] transition-colors">
                            Get Started
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </button>
                        <button className="bg-[#22C3D8] text-white w-[48px] h-[48px] rounded-[69px] flex items-center justify-center hover:bg-[#1eb3c7] transition-colors ml-[-4px]">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                            >
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
