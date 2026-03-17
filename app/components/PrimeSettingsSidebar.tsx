"use client";
import Image from "next/image";

type SidebarProps = {
  activeSection: string;
  setActiveSection: (value: string) => void;
};

const menuItems = [
  { id: "account", label: "Account", icon: "/security.svg" },
  { id: "security", label: "Security", icon: "/security.svg" },
  { id: "payouts", label: "Payouts", icon: "/payout.svg" },
  { id: "tax", label: "Tax Information", icon: "/tax.svg" },
  { id: "notifications", label: "Notifications", icon: "/not.svg" },
  { id: "preferences", label: "Preferences", icon: "/pre.svg" },
  { id: "support", label: "Support", icon: "/su.svg" },
];

export default function PrimeSettingsSidebar({
  activeSection,
  setActiveSection,
}: SidebarProps) {
  return (
    <aside className="pps-sidebar-shell">
      <div className="pps-sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`pps-sidebar-item ${
              activeSection === item.id ? "pps-sidebar-item-active" : ""
            }`}
            onClick={() => setActiveSection(item.id)}
          >
<img
  src={item.icon}
  alt={item.label}
  className={`pps-sidebar-icon ${
    activeSection === item.id ? "active" : ""
  }`}
/>            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}