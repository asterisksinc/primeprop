"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  "Dashboard",
  "Properties",
  "Portfolio",
  "Distributions",
  "Documents",
  "Settings",
];

export default function PrimePropNavbar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <header className="ppd-navbar-shell">
      <div className="ppd-navbar-left">
        {navItems.map((item) => (
          <button
            key={item}
            className={`ppd-nav-item ${activeItem === item ? "ppd-nav-item-active" : ""}`}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </button>
        ))}
           <div className="ppd-search-box">
 <Image
            src="/search.svg"
            alt="User"
            className="mr-2"
            width={16}
            height={16}
            style={{}}
            priority
          />          <input className="search" type="text" placeholder="Search here" />
        </div>
      </div>

      <div className="ppd-navbar-right">
     

        <button className="ppd-bell-btn">   <Image
            src="/bell.svg"
            alt="User"
            width={24}
            height={24}
            className=""
            style={{}}
            priority
          /></button>

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