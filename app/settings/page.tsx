"use client";

import { useState } from "react";
import PrimeSettingsSidebar from "../components/PrimeSettingsSidebar";
import PrimeSettingsContent from "../components/PrimeSettingsContent";
import "../settings-dashboard.css";
import "../primeprop-dashboard.css";

export default function Page() {
  const [activeSection, setActiveSection] = useState("account");

  return (
    <main className="pps-page-shell">
      <div className="pps-page-container">
        <PrimeSettingsSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <PrimeSettingsContent activeSection={activeSection} />
      </div>
    </main>
  );
}