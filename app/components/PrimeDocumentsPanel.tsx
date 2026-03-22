"use client";

import { useMemo, useState } from "react";

type PrimeDocItem = {
  id: number;
  name: string;
  category:
    | "Investment Agreements"
    | "Share Certificates"
    | "Distribution Receipts"
    | "Tax Documents"
    | "Compliance Reports"
    | "Statements";
  property: string;
  fileType: "PDF" | "CSV" | "ZIP" | "XLSX";
  generatedDate: string;
  status: "Signed" | "Pending Signature" | "Generated" | "Available" | "Archived";
  size: string;
};

const primeDocumentsData: PrimeDocItem[] = [
  {
    id: 1,
    name: "SPV Agreement",
    category: "Investment Agreements",
    property: "JVC Tower SPV",
    fileType: "PDF",
    generatedDate: "Mar 02, 2026",
    status: "Signed",
    size: "2.1 MB",
  },
  {
    id: 2,
    name: "Share Certificate",
    category: "Share Certificates",
    property: "JVC Tower SPV",
    fileType: "PDF",
    generatedDate: "Mar 03, 2026",
    status: "Generated",
    size: "1.4 MB",
  },
  {
    id: 3,
    name: "Q1 Distribution Receipt",
    category: "Distribution Receipts",
    property: "JVC Tower SPV",
    fileType: "PDF",
    generatedDate: "Mar 02, 2026",
    status: "Available",
    size: "0.8 MB",
  },
  {
    id: 4,
    name: "Q1 Distribution Receipt - Backup",
    category: "Distribution Receipts",
    property: "JVC Tower SPV",
    fileType: "PDF",
    generatedDate: "Mar 02, 2026",
    status: "Available",
    size: "0.8 MB",
  },
  {
    id: 5,
    name: "Q2 Distribution Receipt",
    category: "Distribution Receipts",
    property: "JVC Tower SPV",
    fileType: "PDF",
    generatedDate: "Jun 28, 2026",
    status: "Available",
    size: "0.9 MB",
  },
  {
    id: 6,
    name: "Q3 Distribution Receipt",
    category: "Distribution Receipts",
    property: "Marina Heights SPV",
    fileType: "PDF",
    generatedDate: "Sep 30, 2026",
    status: "Available",
    size: "0.8 MB",
  },
  {
    id: 7,
    name: "Annual Tax Certificate FY 2025-26",
    category: "Tax Documents",
    property: "JVC Tower SPV",
    fileType: "PDF",
    generatedDate: "Apr 12, 2026",
    status: "Available",
    size: "1.2 MB",
  },
  {
    id: 8,
    name: "Capital Gains Summary",
    category: "Tax Documents",
    property: "All Properties",
    fileType: "PDF",
    generatedDate: "Apr 14, 2026",
    status: "Available",
    size: "0.7 MB",
  },
  {
    id: 9,
    name: "Compliance Declaration",
    category: "Compliance Reports",
    property: "JVC Tower SPV",
    fileType: "PDF",
    generatedDate: "Apr 16, 2026",
    status: "Pending Signature",
    size: "0.6 MB",
  },
  {
    id: 10,
    name: "KYC Update Record",
    category: "Compliance Reports",
    property: "Marina Heights SPV",
    fileType: "PDF",
    generatedDate: "Apr 18, 2026",
    status: "Generated",
    size: "0.5 MB",
  },
  {
    id: 11,
    name: "Portfolio Statement Q1 2026",
    category: "Statements",
    property: "Portfolio Wide",
    fileType: "PDF",
    generatedDate: "Apr 18, 2026",
    status: "Generated",
    size: "1.1 MB",
  },
  {
    id: 12,
    name: "Quarterly NAV Export",
    category: "Statements",
    property: "Portfolio Wide",
    fileType: "CSV",
    generatedDate: "Apr 19, 2026",
    status: "Available",
    size: "0.3 MB",
  },
  {
    id: 13,
    name: "Investor Cap Table",
    category: "Statements",
    property: "All Properties",
    fileType: "XLSX",
    generatedDate: "Apr 20, 2026",
    status: "Archived",
    size: "0.9 MB",
  },
  {
    id: 14,
    name: "All Receipts FY 2025-26",
    category: "Distribution Receipts",
    property: "All Properties",
    fileType: "ZIP",
    generatedDate: "Apr 21, 2026",
    status: "Available",
    size: "3.8 MB",
  },
  {
    id: 15,
    name: "Q3 Distribution Receipt - Backup",
    category: "Distribution Receipts",
    property: "Marina Heights SPV",
    fileType: "PDF",
    generatedDate: "Oct 02, 2026",
    status: "Available",
    size: "0.8 MB",
  },
  {
    id: 16,
    name: "Semi-Annual Reporting Packet",
    category: "Statements",
    property: "Portfolio Wide",
    fileType: "PDF",
    generatedDate: "Oct 05, 2026",
    status: "Available",
    size: "2.3 MB",
  },
  {
    id: 17,
    name: "Partner Cap Table Update",
    category: "Statements",
    property: "All Properties",
    fileType: "XLSX",
    generatedDate: "Oct 08, 2026",
    status: "Generated",
    size: "1.2 MB",
  },
  {
    id: 18,
    name: "Q4 Tax Documents Bundle",
    category: "Tax Documents",
    property: "JVC Tower SPV",
    fileType: "ZIP",
    generatedDate: "Oct 10, 2026",
    status: "Available",
    size: "4.5 MB",
  },
  {
    id: 19,
    name: "Compliance Audit Report",
    category: "Compliance Reports",
    property: "Marina Heights SPV",
    fileType: "PDF",
    generatedDate: "Oct 12, 2026",
    status: "Available",
    size: "1.8 MB",
  },
  {
    id: 20,
    name: "Q4 Distribution Receipt",
    category: "Distribution Receipts",
    property: "JVC Tower SPV",
    fileType: "PDF",
    generatedDate: "Oct 15, 2026",
    status: "Available",
    size: "0.9 MB",
  },
  {
    id: 21,
    name: "Annual Statement FY 2025-26",
    category: "Statements",
    property: "Portfolio Wide",
    fileType: "PDF",
    generatedDate: "Oct 18, 2026",
    status: "Generated",
    size: "2.7 MB",
  },
  {
    id: 22,
    name: "Investor Correspondence Log",
    category: "Compliance Reports",
    property: "All Properties",
    fileType: "PDF",
    generatedDate: "Oct 20, 2026",
    status: "Available",
    size: "0.95 MB",
  },
  {
    id: 23,
    name: "Year-End Tax Certificate",
    category: "Tax Documents",
    property: "All Properties",
    fileType: "PDF",
    generatedDate: "Oct 22, 2026",
    status: "Pending Signature",
    size: "1.6 MB",
  },
  {
    id: 24,
    name: "Investment Summary 2026",
    category: "Statements",
    property: "Portfolio Wide",
    fileType: "PDF",
    generatedDate: "Oct 25, 2026",
    status: "Generated",
    size: "3.2 MB",
  },
  
];

const recentActivity = [
  {
    title: "Portfolio Statement Q1 2026 generated",
    tag: "Portfolio Wide",
    date: "Apr 18, 2026",
    icon: "/fil.svg",
  },
  {
    title: "Annual Tax Certificate FY 2025-26 added",
    tag: "JVC Tower SPV",
    date: "Apr 12, 2026",
        icon: "/tik.svg",

  },
  {
    title: "Q1 Distribution Receipt uploaded",
    tag: "JVC Tower SPV",
    date: "Apr 10, 2026",
        icon: "/bu.svg",

  },
  {
    title: "Share Certificate issued",
    tag: "JVC Tower SPV",
    date: "Apr 02, 2026",
        icon: "/atax.svg",

  },
];

const allCategories = [
  "All Documents",
  "Investment Agreements",
  "Share Certificates",
  "Distribution Receipts",
  "Tax Documents",
  "Compliance Reports",
  "Statements",
] as const;

type AllCategoryType = (typeof allCategories)[number];

export default function PrimeDocumentsPanel() {
  const [selectedCategory, setSelectedCategory] =
    useState<AllCategoryType>("All Documents");
  const [selectedFileTypes, setSelectedFileTypes] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedProperty, setSelectedProperty] = useState("All Properties");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("Newest First");
  const [dismissBanner, setDismissBanner] = useState(false);

  const properties = useMemo(() => {
    return ["All Properties", ...Array.from(new Set(primeDocumentsData.map((d) => d.property)))];
  }, []);

  const years = useMemo(() => {
    const extractedYears = primeDocumentsData.map((d) => d.generatedDate.split(", ")[1]);
    return Array.from(new Set(extractedYears)).sort((a, b) => Number(b) - Number(a));
  }, []);

  const categoryCounts = useMemo(() => {
    return {
      "All Documents": primeDocumentsData.length,
      "Investment Agreements": primeDocumentsData.filter(
        (d) => d.category === "Investment Agreements"
      ).length,
      "Share Certificates": primeDocumentsData.filter(
        (d) => d.category === "Share Certificates"
      ).length,
      "Distribution Receipts": primeDocumentsData.filter(
        (d) => d.category === "Distribution Receipts"
      ).length,
      "Tax Documents": primeDocumentsData.filter((d) => d.category === "Tax Documents")
        .length,
      "Compliance Reports": primeDocumentsData.filter(
        (d) => d.category === "Compliance Reports"
      ).length,
      Statements: primeDocumentsData.filter((d) => d.category === "Statements").length,
    };
  }, []);

  const filteredDocuments = useMemo(() => {
    let result = [...primeDocumentsData];

    if (selectedCategory !== "All Documents") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (selectedFileTypes.length > 0) {
      result = result.filter((item) => selectedFileTypes.includes(item.fileType));
    }

    if (selectedStatuses.length > 0) {
      result = result.filter((item) => selectedStatuses.includes(item.status));
    }

    if (selectedProperty !== "All Properties") {
      result = result.filter((item) => item.property === selectedProperty);
    }

    if (selectedYear !== "All") {
      result = result.filter((item) => item.generatedDate.endsWith(selectedYear));
    }

    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.property.toLowerCase().includes(q) ||
          item.fileType.toLowerCase().includes(q) ||
          item.status.toLowerCase().includes(q) ||
          item.generatedDate.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      const aDate = new Date(a.generatedDate).getTime();
      const bDate = new Date(b.generatedDate).getTime();

      if (sortOption === "Newest First") return bDate - aDate;
      if (sortOption === "Oldest First") return aDate - bDate;
      if (sortOption === "Name A-Z") return a.name.localeCompare(b.name);
      if (sortOption === "Name Z-A") return b.name.localeCompare(a.name);
      return 0;
    });

    return result;
  }, [
    selectedCategory,
    selectedFileTypes,
    selectedStatuses,
    selectedProperty,
    selectedYear,
    searchText,
    sortOption,
  ]);

  const toggleMultiSelect = (
    value: string,
    selectedValues: string[],
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory("All Documents");
    setSelectedFileTypes([]);
    setSelectedStatuses([]);
    setSelectedProperty("All Properties");
    setSelectedYear("2026");
    setSearchText("");
    setSortOption("Newest First");
  };

  return (
    <section className="ppdocs-shell">
      <div className="ppdocs-topstats">
        <div className="ppdocs-topstat-card">
          <div className="ppdocs-topstat-head">
            <span>Files in Your Document Library</span>
            <span className="ppdocs-badge ppdocs-badge-green">+3 This Mon</span>
          </div>
          <strong>24</strong>
          <p>Across 6 categories</p>
        </div>

        <div className="ppdocs-topstat-card">
          <div className="ppdocs-topstat-head">
            <span>Completed and Signed Records</span>
            <span className="ppdocs-badge ppdocs-badge-green">Up to Date</span>
          </div>
          <strong>8</strong>
          <p>Subscription forms, agreements</p>
        </div>

        <div className="ppdocs-topstat-card">
          <div className="ppdocs-topstat-head">
            <span>Tax-ready Files Available</span>
            <span className="ppdocs-badge ppdocs-badge-green">+0.8% vs avg</span>
          </div>
          <strong>6</strong>
          <p>FY 2025-26 records included</p>
        </div>

        <div className="ppdocs-topstat-card">
          <div className="ppdocs-topstat-head">
            <span>Documents Awaiting Review or Signature</span>
          </div>
          <strong className="ppdocs-highlight-orange">2</strong>
          <p>Action recommended</p>
        </div>
      </div>

      {!dismissBanner && (
        <div className="ppdocs-alertbar">
          <div className="ppdocs-alertbar-left">
            <div className="ppdocs-alert-icon"><img src="/war.svg" alt="" /></div>
            <div>
              <strong>2 Documents Awaiting Your Signature</strong>
              <p>2 documents are waiting for your signature to complete investment processing.</p>
            </div>
          </div>

          <div className="ppdocs-alert-actions">
            <button className="ppdocs-btn ppdocs-btn-lighto" onClick={() => setDismissBanner(true)}>
              Dismiss
            </button>
            <button className="ppdocs-btn ppdocs-btn-primaryo">Review Now</button>
          </div>
        </div>
      )}

      <div className="ppdocs-main-grid">
        <aside className="ppdocs-sidebar">
          <div className="ppdocs-sidebar-block">
            <div className="ppdocs-sidebar-title">Document Categories</div>

            <div className="ppdocs-category-list">
              {allCategories.map((category) => (
                <button
                  key={category}
                  className={`ppdocs-category-item ${
                    selectedCategory === category ? "ppdocs-category-item-active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="ppdocs-category-left">
                    <span className="ppdocs-category-icon">▣</span>
                    <span>{category}</span>
                  </span>
                  <span className="ppdocs-category-count">
                    {categoryCounts[category]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="ppdocs-sidebar-block">
            <div className="ppdocs-sidebar-subtitle">File Type</div>
            <div className="ppdocs-filter-checklist">
              {["PDF", "CSV", "ZIP", "XLSX"].map((type) => (
                <label key={type} className="ppdocs-check-row">
                  <input
                    type="checkbox"
                    checked={selectedFileTypes.includes(type)}
                    onChange={() =>
                      toggleMultiSelect(type, selectedFileTypes, setSelectedFileTypes)
                    }
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="ppdocs-sidebar-block">
            <div className="ppdocs-sidebar-subtitle">Status</div>
            <div className="ppdocs-filter-checklist">
              {["Signed", "Pending Signature", "Generated", "Available", "Archived"].map(
                (status) => (
                  <label key={status} className="ppdocs-check-row">
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes(status)}
                      onChange={() =>
                        toggleMultiSelect(status, selectedStatuses, setSelectedStatuses)
                      }
                    />
                    <span>{status}</span>
                  </label>
                )
              )}
            </div>
          </div>

          <div className="ppdocs-sidebar-block">
            <div className="ppdocs-sidebar-subtitle">Property</div>
            <select
              className="ppdocs-select"
              value={selectedProperty}
              onChange={(e) => setSelectedProperty(e.target.value)}
            >
              {properties.map((property) => (
                <option key={property} value={property}>
                  {property}
                </option>
              ))}
            </select>
          </div>

          <div className="ppdocs-sidebar-block">
            <div className="ppdocs-sidebar-subtitle">Year</div>
            <select
              className="ppdocs-select"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              {["All", ...years].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        <div className="pps-divider-line" />

          <div className="ppdocs-sidebar-actions">
            <button className="ppdocs-btn ppdocs-btn-primaryo ppdocs-btn-full">
              Apply Filters
            </button>
            <button
              className="ppdocs-btn ppdocs-btn-lighto ppdocs-btn-full"
              onClick={clearAllFilters}
            >
              Clear All
            </button>
          </div>
        </aside>

        <div className="ppdocs-content">
          <div className="ppdocs-table-toolbar">
            <div className="ppdocs-searchbox">
              <span className="ppdocs-search-icon"><img src="/search1.svg" alt="" /></span>
              <input
                type="text"
                placeholder="Search by payout ID, property, quarter"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="ppdocs-search-input"
              />
            </div>

            <div className="ppdocs-toolbar-right">
              <select
                className="ppdocs-sort-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Name A-Z</option>
                <option>Name Z-A</option>
              </select>

              <button className="ppdocs-view-btn">☰</button>
              <button className="ppdocs-view-btn">▦</button>
            </div>
          </div>

          <div className="ppdocs-table-wrap">
            <table className="ppdocs-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Document Name</th>
                  <th>Category</th>
                  <th>Property</th>
                  <th>File Type</th>
                  <th>Generated Date</th>
                  <th>Status</th>
                  <th>Size</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.length > 0 ? (
                  filteredDocuments.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td className="ppdocs-cell-name">{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.property}</td>
                      <td>
                        <span className="ppdocs-filetype-pill">{item.fileType}</span>
                      </td>
                      <td>{item.generatedDate}</td>
                      <td>
                        <span
                          className={`ppdocs-status-pill ${
                            item.status === "Signed"
                              ? "ppdocs-status-signed"
                              : item.status === "Pending Signature"
                              ? "ppdocs-status-pending"
                              : item.status === "Generated"
                              ? "ppdocs-status-generated"
                              : item.status === "Available"
                              ? "ppdocs-status-available"
                              : "ppdocs-status-archived"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>{item.size}</td>
                      <td>
                        <button className="ppdocs-download-btn"><img src="/od.svg" alt="" /></button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9} className="ppdocs-empty-state">
                      No documents found for the selected filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="ppdocs-bottom-grid">
        <div className="ppdocs-insight-card">
          <div className="ppdocs-insight-head">
            <span className="bo">            <img src="/light.svg" alt="" />
</span>
            <strong>Document Insight</strong>
          </div>

          <p className="ppdocs-insight-text">
            You have <span>2 documents pending review</span>, including a new compliance
            report and one statement update.
          </p>

          <div className="ppdocs-tax-ready-box">
            <div className="ppdocs-tax-ready-icon"><img src="/doc.svg" alt="" /></div>
            <div>
              <strong>Tax Filing Ready</strong>
              <p>Download your FY 2025-26 tax pack before filing deadlines.</p>
            </div>
          </div>

          <div className="ppdocs-insight-metrics">
            <div className="ppdocs-insight-metric-card">
              <span>Fresh Uploads</span>
              <strong>07</strong>
              <p>Last 14 days</p>
            </div>
            <div className="ppdocs-insight-metric-card">
              <span>Avg Review Time</span>
              <strong>1.8d</strong>
              <p>Across pending files</p>
            </div>
            <div className="ppdocs-insight-metric-card">
              <span>Category Health</span>
              <strong>92%</strong>
              <p>Tax + Statements complete</p>
            </div>
          </div>

          <div className="ppdocs-insight-checklist">
            <div className="ppdocs-insight-check-row">
              <span className="ppdocs-insight-dot" />
              <p>Q2 Compliance Report draft uploaded and ready for legal review.</p>
            </div>
            <div className="ppdocs-insight-check-row">
              <span className="ppdocs-insight-dot" />
              <p>One statement needs signer confirmation before quarter close.</p>
            </div>
          </div>

          <div className="ppdocs-insight-actions">
            <button className="ppdocs-btn ppdocs-btn-lighto">Review Pending Files</button>
            <button className="ppdocs-btn ppdocs-btn-primaryo">Download Tax Pack</button>
          </div>
        </div>

        <div className="ppdocs-activity-card">
          <div className="ppdocs-activity-head">
            <div className="ppdocs-activity-head-title">Recent Document Activity</div>
            <button>View All Activity</button>
          </div>

          <div className="ppdocs-activity-list">
            {recentActivity.map((item) => (
              <div key={item.title} className="ppdocs-activity-item">
                <div className="ppdocs-activity-icon"><img src={item.icon} alt="" /></div>
                <div className="ppdocs-activity-content">
                  <div className="ppdocs-activity-top">
                    <div className="ppdocs-activity-top-title">{item.title}</div>
                    <span>{item.date}</span>
                  </div>
                  <span className="ppdocs-activity-tag">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}