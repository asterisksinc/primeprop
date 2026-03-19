"use client";

import { useEffect, useState, useRef } from "react";
import PrimeSettingsSidebar from "../components/PrimeSettingsSidebar";
import PrimeSettingsContent from "../components/PrimeSettingsContent";
import "../settings-dashboard.css";
import "../primeprop-dashboard.css";

export default function PrimeSettingsPage() {
  const [activeSection, setActiveSection] = useState("account");

  const accountRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const payoutsRef = useRef<HTMLDivElement>(null);
  const taxRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const preferencesRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    account: accountRef,
    security: securityRef,
    payouts: payoutsRef,
    tax: taxRef,
    notifications: notificationsRef,
    preferences: preferencesRef,
    support: supportRef,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.2,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pps-page-container">
      <PrimeSettingsSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sectionRefs={sectionRefs}
      />
      <PrimeSettingsContent sectionRefs={sectionRefs} />
    </div>
  );
}