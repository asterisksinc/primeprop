"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../settings-dashboard.css";
import "../primeprop-dashboard.css";
import "../prime-support-section.css";
import "../prime-raise-issue-flow.css";
const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Properties", href: "/properties" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Distributions", href: "/distributions" },
  { label: "Documents", href: "/documents" },
  { label: "Settings", href: "/settings" },
];

export default function PrimePropNavbar() {
  const pathname = usePathname();

  return (
    <header className="ppd-navbar-shell">
      <div className="ppd-navbar-left">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`ppd-nav-item ${isActive ? "ppd-nav-item-active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="ppd-search-box">
          <Image
            src="/search.svg"
            alt="Search"
            className="mr-2"
            width={16}
            height={16}
            priority
          />
          <input className="search" type="text" placeholder="Search here" />
        </div>
      </div>

      <div className="ppd-navbar-right">
        <button className="ppd-bell-btn">
          <Image
            src="/bell.svg"
            alt="Bell"
            width={20}
            height={20}
            priority
          />
        </button>

        <Image
          src="/user.svg"
          alt="User"
          width={42}
          height={42}
          className="ppd-user-avatar"
          priority
        />
      </div>
    </header>
  );
}