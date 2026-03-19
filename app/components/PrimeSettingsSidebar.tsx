"use client";

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
  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    sectionRefs[sectionId]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="pps-sidebar-shell">
      <div className="pps-sidebar-menu">
     <div className="pps-sidebar-menu">
  {menuItems.map((item) => {
    const isActive = activeSection === item.id;

    return (
      <div key={item.id}>
        
        {/* Divider before Support */}
        {item.id === "support" && <div className="pps-divider-line" />}

        <button
          className={`pps-sidebar-item ${
            isActive ? "pps-sidebar-item-active" : ""
          }`}
          onClick={() => handleScrollToSection(item.id)}
        >
          <img
            src={isActive ? item.activeIcon : item.icon}
            alt={item.label}
            className="pps-sidebar-icon"
          />
          <span>{item.label}</span>
        </button>
      </div>
    );
  })}
</div>
      </div>
    </aside>
  );
}