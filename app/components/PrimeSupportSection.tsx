"use client";
import { useMemo, useState } from "react";
import PrimeRaiseIssueFlow from "./PrimeRaiseIssueFlow";

const tabs = ["All", "Open", "In Review", "Waiting for You", "Resolved", "Closed"];

const supportCards = [
  {
    title: "Payout Issues",
    desc: "Report delayed, missing, incorrect, or failed distributions.",
    tags: "Delayed payout, wrong amount, failed bank transfer",
    action: "Get Help",
    icon: "/pay.svg",
    color:''
  },
  {
    title: "Documents & Certificates",
    desc: "Missing annual tax forms, payout receipts, or tax documents.",
    tags: "Missing certificates, download issue",
    action: "Open Document Issue",
    icon: "/doc.svg",
    color:'o'
  },
  {
    title: "Bank Verification",
    desc: "Problems verifying a payout account or updating bank details.",
    tags: "Verification failed, account update",
    action: "Resolve Verification",
    icon: "/bank.svg",
        color:''

  },
  {
    title: "Tax & Statements",
    desc: "Questions about tax certificates, declarations, or downloadable statements.",
    tags: "Tax certificates, statements",
    action: "View Tax Help",
    icon: "/tax1.svg",
        color:'o'

  },
  {
    title: "Investment Questions",
    desc: "Ask about asset performance, payouts, commitment status, or invested records.",
    tags: "Performance, stake, records",
    action: "Ask a question",
    icon: "/info.svg",
  },
  {
    title: "Account & Security",
    desc: "Login issues, 2FA problems, profile access, suspicious activity, or account closure.",
    tags: "Login, 2FA, security",
    action: "Secure my account",
    icon: "/secu.svg",
        color:'red'

  },
];

const articles = [
  {
    badge: "Payout",
    time: "2 min",
    title: "How long do distributions take to arrive?",
  },
  {
    badge: "Bank",
    time: "2 min",
    title: "How do I change my payout bank account?",
  },
  {
    badge: "Tax",
    time: "2 min",
    title: "Where can I download my tax certificate?",
  },
  {
    badge: "Bank",
    time: "4 min",
    title: "What happens if bank verification fails?",
  },
  {
    badge: "Documents",
    time: "4 min",
    title: "How do I review signed investment documents?",
  },
];

const cases = [
  {
    id: "SUP-20481",
    subject: "Delayed Q1 payout for JVC Tower SPV",
    category: "Payout",
    priority: "High",
    created: "Apr 13, 2026",
    status: "In Review",
  },
  {
    id: "SUP-20409",
    subject: "Missing annual tax certificate FY 2025–26",
    category: "Tax",
    priority: "Medium",
    created: "Apr 10, 2026",
    status: "Waiting for You",
  },
  {
    id: "SUP-20377",
    subject: "Update payout bank account",
    category: "Bank",
    priority: "Low",
    created: "Apr 02, 2026",
    status: "Resolved",
  },
];

const helpWays = [
  {
    title: "In-app messaging",
    desc1: "Available 24/7",
    desc2: "Instant response",
    action: "Start Chat",
    icon: "/msg.svg",
    color:''
  },
  {
    title: "Priority email support",
    desc1: "Available 24/7",
    desc2: "Typical response under 4 hours",
    action: "Start Email",
    icon: "/mail.svg",
    color:'o'
  },
  {
    title: "Callback request",
    desc1: "Mon–Sat, 9 AM–6 PM IST",
    desc2: "Available for verified investors",
    action: "Request Callback",
    icon: "/mo.svg",
    color:'g'
  },
  {
    title: "Help article library",
    desc1: "Always available",
    desc2: "200+ self-service articles",
    action: "Browse articles",
    icon: "/lib.svg",
    
    color:'b'
  },
];

export default function PrimeSupportSection() {
    const [isRaiseIssueOpen, setIsRaiseIssueOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

 const filteredCases = useMemo(() => {
    return cases.filter((item) => {
      const matchesTab = activeTab === "All" || item.status === activeTab;
      const matchesSearch =
        item.id.toLowerCase().includes(search.toLowerCase()) ||
        item.subject.toLowerCase().includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);
  return (
    <>
    <section className="prime-support-v1-shell">
      <div className="prime-support-v1-topbar">
        <div>
          <h2 className="prime-support-v1-heading">Support Center</h2>
        </div>

        <div className="prime-support-v1-top-actions">
          <button className="prime-support-v1-btn prime-support-v1-btn-light">
            Browse Help Articles
          </button>
          <button className="prime-support-v1-btn prime-support-v1-btn-light">
            View My Cases
          </button>
       <button
  className="prime-support-v1-btn prime-support-v1-btn-dark"
  onClick={() => setIsRaiseIssueOpen(true)}
>
  Raise New Issue
</button>
        </div>
      </div>

      <div className="prime-support-v1-priority-strip">
        <div className="prime-support-v1-priority-left">
          <div className="prime-support-v1-priority-icon"><img src="/war.svg" alt=""  /></div>

          <div>
            <div className="prime-support-v1-priority-title-row">
              <span className="prime-support-v1-priority-title">
                Priority Support Available
              </span>
              <span className="prime-support-v1-chip prime-support-v1-chip-hot">
                Smart Tip
              </span>
            </div>
            <p className="prime-support-v1-priority-text">
              Because your account is verified and the payout is above your
              normal quarterly amount, payout issues on this case will be routed
              to the Payments Team with high priority.
            </p>
          </div>
        </div>

        <button className="prime-support-v1-priority-cta">
          Open Priority Case
        </button>
      </div>

      <div className="prime-support-v1-card prime-support-v1-block">
        <h3 className="prime-support-v1-section-title">How can we help you?</h3>

        <div className="prime-support-v1-help-grid">
          {supportCards.map((item) => (
            <div key={item.title} className="prime-support-v1-help-card">
              <div className={`prime-support-v1-help-icon${item.color || ''}`}><img src={item.icon} alt=""  /></div>
              <h4 className="prime-support-v1-help-title">{item.title}</h4>
              <p className="prime-support-v1-help-desc">{item.desc}</p>
              <p className="prime-support-v1-help-tags">{item.tags}</p>
              <button className="prime-support-v1-help-link">
                {item.action}
                <span>›</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="prime-support-v1-search-layout">
        <div className="prime-support-v1-card prime-support-v1-block">
          <h3 className="prime-support-v1-section-title">Search Help Articles</h3>

          <div className="prime-support-v1-searchbar">
            <span className="prime-support-v1-search-icon"><img src="/ser.svg" alt="" /></span>
            <input
              type="text"
              placeholder='Try "Where is my payout receipt?"'
              className="prime-support-v1-case-search-input"
            />
          </div>

          <div className="prime-support-v1-article-list">
            {articles.map((item) => (
              <div key={item.title} className="prime-support-v1-article-row">
                <div className="prime-support-v1-article-meta-wrap">
                  <div className="prime-support-v1-article-meta">
                    <span className="prime-support-v1-article-badge">
                      {item.badge}
                    </span>
                    <img src="/wat.svg" alt="" />
                    <span className="prime-support-v1-article-time">
                      {item.time}
                    </span>
                  </div>
                  <div className="prime-support-v1-article-title">
                    {item.title}
                  </div>
                </div>
                <span className="prime-support-v1-article-arrow">›</span>
              </div>
            ))}
          </div>
        </div>

        <div className="prime-support-v1-side-stack">
          <div className="prime-support-v1-card prime-support-v1-side-card">
            <div className="prime-support-v1-help-icon"><img src="/out.svg" alt=""  /></div>
            <span className="prime-support-v1-side-label">
              Most Common Issue This Week
            </span>
            <h4 className="prime-support-v1-side-title">
              Payout Processing Timelines
            </h4>
            <p className="prime-support-v1-side-text">
              Understanding distribution schedules and processing times
            </p>
          </div>

          <div className="prime-support-v1-card prime-support-v1-side-card">
            <div className="prime-support-v1-help-icono"><img src="/ax.svg" alt=""  /></div>
            <span className="prime-support-v1-side-label">
              Tax Season Support
            </span>
            <h4 className="prime-support-v1-side-title">
              Download FY 2025-26 Tax Pack
            </h4>
            <p className="prime-support-v1-side-text">
              Get all your tax documents in one place
            </p>
          </div>

          <div className="prime-support-v1-card prime-support-v1-side-card">
            <div className="prime-support-v1-help-icon"><img src="/mo.svg" alt=""  /></div>
            <span className="prime-support-v1-side-label">
              Need Urgent Help?
            </span>
            <h4 className="prime-support-v1-side-title">
              Contact Priority Support
            </h4>
            <p className="prime-support-v1-side-text">
              Available 24/7 for Verified Investors
            </p>
          </div>
        </div>
      </div>

   <div className="prime-support-v1-card prime-support-v1-block">
      <h3 className="prime-support-v1-section-title">My Support Cases</h3>

      <div className="prime-support-v1-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`prime-support-v1-tab ${
              activeTab === tab ? "prime-support-v1-tab-active" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="prime-support-v1-case-toolbar">
        <div className="prime-support-v1-case-search">
          <span>
            <img src="/ser.svg" alt="" />
          </span>
          <input
            type="text"
            placeholder="Search by case ID or subject"
            className="prime-support-v1-case-search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button type="button" className="prime-support-v1-filter-btn">
          ☷ Filter
        </button>
      </div>

      <div className="prime-support-v1-table-wrap">
        <table className="prime-support-v1-table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Subject</th>
              <th>Category</th>
              <th>Priority</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredCases.length > 0 ? (
              filteredCases.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.subject}</td>
                  <td>{item.category}</td>
                  <td>
                    <span
                      className={`prime-support-v1-status-pill prime-support-v1-priority-${item.priority
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item.priority}
                    </span>
                  </td>
                  <td>{item.created}</td>
                  <td>
                    <span
                      className={`prime-support-v1-status-pill prime-support-v1-case-${item.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "20px" }}>
                  No cases found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

      <div className="prime-support-v1-card prime-support-v1-block">
        <h3 className="prime-support-v1-section-title">Other Ways to Get Help</h3>

        <div className="prime-support-v1-other-grid">
          {helpWays.map((item) => (
            <div key={item.title} className="prime-support-v1-other-card">
              <div className={`prime-support-v1-help-icon${item.color}`}><img src={item.icon} alt="" /></div>

              <div className="prime-support-v1-other-content">
                <h4 className="prime-support-v1-other-title">{item.title}</h4>
                <p className="prime-support-v1-other-desc">○ {item.desc1}</p>
                <p className="prime-support-v1-other-desc">✓ {item.desc2}</p>
                <button className="prime-support-v1-other-link">
                  {item.action} <span>›</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
       
    </section>
     {isRaiseIssueOpen && (
        <PrimeRaiseIssueFlow onClose={() => setIsRaiseIssueOpen(false)} />
      )}</>
  );
}