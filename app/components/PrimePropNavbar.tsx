"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navItems = [
  { label: "Dashboard", href: "/" },
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
            width={24}
            height={24}
            priority
          />
        </button>

        <Image
          src="/user.svg"
          alt="User"
          width={50}
          height={50}
          className="ppd-user-avatar"
          priority
        />
      </div>
    </header>
  );
}