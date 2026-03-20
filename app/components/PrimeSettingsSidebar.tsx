"use client";

import Image from "next/image";

type SidebarProps = {
  activeSection: string;
  setActiveSection: (value: string) => void;
  sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>>;
};

const menuItems = [
  { id: "account", label: "Account", icon: "/use.svg", activeIcon: "/ause.svg" },
  { id: "security", label: "Security", icon: "/security.svg", activeIcon: "/asecurity.svg" },
  { id: "payouts", label: "Payouts", icon: "/payout.svg", activeIcon: "/apayout.svg" },
  { id: "tax", label: "Tax Information", icon: "/tax.svg", activeIcon: "/atax.svg" },
  { id: "notifications", label: "Notifications", icon: "/not.svg", activeIcon: "/anot.svg" },
  { id: "preferences", label: "Preferences", icon: "/pre.svg", activeIcon: "/apre.svg" },
  { id: "support", label: "Support", icon: "/su.svg", activeIcon: "/asu.svg" },
];

export default function PrimeSettingsSidebar({
  activeSection,
  setActiveSection,
  sectionRefs,
}: SidebarProps) {
  const handleClick = (id: string) => {
    setActiveSection(id);

    sectionRefs[id]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="pps-sidebar-shell">
      <div className="pps-sidebar-menu">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              className={`pps-sidebar-item ${isActive ? "pps-sidebar-item-active" : ""}`}
              onClick={() => handleClick(item.id)}
            >
              <Image
                src={isActive ? item.activeIcon : item.icon}
                alt={item.label}
                width={16}
                height={17}
                className="pps-sidebar-icon"
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}