"use client";

const historyRows = [
  {
    date: "Apr 15, 2026",
    property: "JVC Tower SPV",
    quarter: "Q1 2026",
    gross: "40K AED",
    fees: "800 AED",
    net: "39.2K AED",
    method: 'Bank ••••4321',
    status: "Processing",
  },
  {
    date: "Jan 15, 2026",
    property: "JVC Tower SPV",
    quarter: "Q4 2025",
    gross: "39,800 AED",
    fees: "800 AED",
    net: "39.4K AED",
    method: 'Bank ••••4321',
    status: "Paid",
  },
  {
    date: "Oct 15, 2025",
    property: "JVC Tower SPV",
    quarter: "Q3 2025",
    gross: "38,710 AED",
    fees: "790 AED",
    net: "39K AED",
    method: 'Bank ••••4321',
    status: "Paid",
  },
  {
    date: "Jul 15, 2025",
    property: "JVC Tower SPV",
    quarter: "Q2 2025",
    gross: "38,420 AED",
    fees: "780 AED",
    net: "39.2K AED",
    method: 'Bank ••••4321',
    status: "Paid",
  },
];

const activityItems = [
  {
    title: "Transfer initiated for JVC Tower SPV Q1 distribution",
    tag: "JVC Tower SPV",
    date: "Apr 14, 2026",
    icon: "/mon.svg",
  },
  {
    title: "Q1 payout approved after reconciliation",
    tag: "JVC Tower SPV",
    date: "Apr 12, 2026",
    icon: "/tik.svg",
  },
  {
    title: "Fee reconciliation completed",
    tag: "JVC Tower SPV",
    date: "Apr 10, 2026",
    icon: "/fil.svg",
  },
  {
    title: "Rental income posted",
    tag: "JVC Tower SPV",
    date: "Apr 02, 2026",
    icon: "/bu.svg",
  },
];

const taxDocs = [
  { title: "Annual Tax Certificate FY 2025-26", size: "1.2 MB", updated: "Generated Apr 10, 2026" },
  { title: "Quarterly Income Statement Q1 2026", size: "930 KB", updated: "Generated Apr 10, 2026" },
  { title: "Capital Account Statement FY 2025-26", size: "1.5 MB", updated: "Generated Apr 10, 2026" },
];

const statementButtons = [
  "Download Annual Statement",
  "Download Custom CSV",
  "Download All Receipts (ZIP)",
];

export default function PrimeDistributionOverview() {
  return (
    <section className="prime-db-v1-shell">
      <div className="prime-db-v1-top-grid ">
        <div className="prime-db-v1-stat-card">
          <div className="prime-db-v1-stat-head">
            <span className="prime-db-v1-stat-label">Total Net Distributions Received</span>
            <span className="prime-db-v1-stat-chip prime-db-v1-stat-chip-green">+3.2%</span>
          </div>
          <div className="prime-db-v1-stat-value">1,56,800 AED</div>
          <div className="prime-db-v1-stat-sub">Across 4 payouts</div>
        </div>

        <div className="prime-db-v1-stat-card">
          <div className="prime-db-v1-stat-head">
            <span className="prime-db-v1-stat-label">Expected Next Payout</span>
            <span className="prime-db-v1-stat-chip prime-db-v1-stat-chip-orange">Processing soon</span>
          </div>
          <div className="prime-db-v1-stat-value">39,200 AED</div>
          <div className="prime-db-v1-stat-sub">Scheduled for Apr 15</div>
        </div>

        <div className="prime-db-v1-stat-card">
          <div className="prime-db-v1-stat-head">
            <span className="prime-db-v1-stat-label">Average Realized Net Yield</span>
            <span className="prime-db-v1-stat-chip prime-db-v1-stat-chip-green">+0.8% vs LY</span>
          </div>
          <div className="prime-db-v1-stat-value">Apr 15, 2024</div>
          <div className="prime-db-v1-stat-sub">After fees and expenses</div>
        </div>

        <div className="prime-db-v1-stat-card">
          <div className="prime-db-v1-stat-head">
            <span className="prime-db-v1-stat-label">Available for Download</span>
          </div>
          <div className="prime-db-v1-stat-value">Apr 15, 2024</div>
          <div className="prime-db-v1-stat-sub">FY 2024-25 records updated</div>
        </div>
      </div>

      <div className="prime-db-v1-summary-grid car">
        <div className=" prime-db-v1-next-card">
          <div className="prime-db-v1-section-head">
            <h3 className="prime-db-v1-section-title">Next Distribution</h3>
          </div>

          <div className="prime-db-v1-next-amount-label">Net Payout Amount</div>
          <div className="prime-db-v1-next-amount">39,200 AED</div>
          <div className="prime-db-v1-next-property">JVC Tower SPV</div>

          <div className="prime-db-v1-mini-table prime-db-v1-payment-box">
            <div className="prime-db-v1-mini-row">
              <span>Gross Income</span>
              <strong>40K AED</strong>
            </div>
            <div className="prime-db-v1-mini-row">
              <span>Fees</span>
              <strong className="prime-db-v1-green-text">800 AED</strong>
            </div>
            <div className="prime-db-v1-mini-row prime-db-v1-mini-row-final">
              <span>Net Payout</span>
              <strong className="prime-db-v1-teal-text">39200 AED</strong>
            </div>
          </div>

          <div className="prime-db-v1-payment-box">
            <div className="prime-db-v1-payment-top">
              <div className="prime-db-v1-payment-icon"><img src="/one.svg" alt=""  /></div>
              <div>
                <div className="prime-db-v1-payment-label">Payout Method</div>
                <div className="prime-db-v1-payment-title">Verified Bank Account</div>
                <div className="prime-db-v1-payment-sub">Payroll Method</div>
              </div>
              <div className="prime-db-v1-payment-badge">Verified</div>
            </div>

            <div className="prime-db-v1-button-row">
              <button className="prime-db-v1-btn prime-db-v1-btn-solid">
                View Payout Details
              </button>
              <button className="prime-db-v1-btn prime-db-v1-btn-outline">
                Change Payout Method
              </button>
            </div>
          </div>
        </div>

        <div className=" " style={{padding:'10px 10px'}}>
          <div style={{display:'flex', justifyContent:'end', alignItems:'center'}}>
                        <div className="prime-db-v1-schedule-tag mb-4" style={{width: '150px'}}>Scheduled Apr 15, 2026</div></div>
<div className="prime-db-v1-card prime-db-v1-progress-card">
  <div className="prime-db-v1-section-head">
    <h3 className="prime-db-v1-section-title">Distribution Progress</h3>
  </div>

  <div className="prime-db-v1-progress-list">
    <div className="prime-db-v1-progress-line"></div>

    <div className="prime-db-v1-progress-item prime-db-v1-progress-item-done">
      <span className="prime-db-v1-progress-dot">✓</span>
      <div className="prime-db-v1-progress-content">
        <div className="prime-db-v1-progress-title">Rental Income Posted</div>
      </div>
    </div>

    <div className="prime-db-v1-progress-item prime-db-v1-progress-item-done">
      <span className="prime-db-v1-progress-dot">✓</span>
      <div className="prime-db-v1-progress-content">
        <div className="prime-db-v1-progress-title">Fee Reconciliation Complete</div>
      </div>
    </div>

    <div className="prime-db-v1-progress-item prime-db-v1-progress-item-done">
      <span className="prime-db-v1-progress-dot">✓</span>
      <div className="prime-db-v1-progress-content">
        <div className="prime-db-v1-progress-title">Distribution Approved</div>
      </div>
    </div>

    <div className="prime-db-v1-progress-item prime-db-v1-progress-item-current">
      <span className="prime-db-v1-progress-dot">↻</span>
      <div className="prime-db-v1-progress-content">
        <div className="prime-db-v1-progress-title">Transfer Initiated</div>
        <div className="prime-db-v1-progress-sub">In Progress...</div>
      </div>
    </div>

    <div className="prime-db-v1-progress-item prime-db-v1-progress-item-pending">
      <span className="prime-db-v1-progress-dot prime-db-v1-progress-dot-empty"></span>
      <div className="prime-db-v1-progress-content">
        <div className="prime-db-v1-progress-title">Completed</div>
      </div>
    </div>
  </div>
</div>
      </div></div>

      <div className="prime-db-v1-card prime-db-v1-table-card">
        <div className="prime-db-v1-section-head">
          <h3 className="prime-db-v1-section-title">Distribution History</h3>
         
        </div>

        <div className="prime-db-v1-search-wrap" style={{display:'flex', gap:'10px'}}>
          <input
            type="text"
            className="prime-db-v1-search-input"
            placeholder="Search by payout ID, property, quarter"
          />
           <button style={{width:'123px', marginLeft:'10px'}} className="prime-db-v1-filter-btn">☷ Filter</button>
        </div>

        <div className="prime-db-v1-table-wrap">
          <table className="prime-db-v1-table">
            <thead>
              <tr>
                <th>Payout Date</th>
                <th>Property</th>
                <th>Quarter/Period</th>
                <th>Gross Income</th>
                <th>Fees</th>
                <th>Net Payout</th>
                <th>Method</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {historyRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.date}</td>
                  <td>{row.property}</td>
                  <td>{row.quarter}</td>
                  <td>{row.gross}</td>
                  <td>{row.fees}</td>
                  <td className="prime-db-v1-net-col">{row.net}</td>
                  <td>{row.method}</td>
                  <td>
                    <span
                      className={`prime-db-v1-status-pill ${
                        row.status === "Processing"
                          ? "prime-db-v1-status-processing"
                          : "prime-db-v1-status-paid"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td><img src="/dload.svg" alt="" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="prime-db-v1-lower-grid">
        <div className="prime-db-v1-left-column">
          <div className="prime-db-v1-card prime-db-v1-method-card">
            <div className="prime-db-v1-section-head">
              <h3 className="prime-db-v1-section-title">Payout Method</h3>
            </div>

            <div className="prime-db-v1-bank-card">
              <div className="prime-db-v1-bank-head">
                <div className="prime-db-v1-bank-icon"><img src="/bank1.svg" alt="" /></div>
                <div>
                  <div className="prime-db-v1-bank-type">Payout Method</div>
                  <div className="prime-db-v1-bank-name">Bank Transfer</div>
                </div>
                <div className="prime-db-v1-bank-status">Verified</div>
              </div>

              <div className="prime-db-v1-bank-grid">
                <div>
                  <span>Account Holder</span>
                  <strong>John Doe</strong>
                </div>
                <div>
                  <span>Bank</span>
                  <strong>HDFC Bank</strong>
                </div>
                <div>
                  <span>Account Ending</span>
                  <strong>••••4321</strong>
                </div>
                <div>
                  <span>Last Verified</span>
                  <strong>Mar 01, 2026</strong>
                </div>
              </div>
            </div>

            <div className="prime-db-v1-button-row prime-db-v1-button-row-2">
              <button className="prime-db-v1-btn prime-db-v1-btn-outline">
                Edit Bank Details
              </button>
              <button className="prime-db-v1-btn prime-db-v1-btn-outline">
                Re-Verify Account
              </button>
              <button className="prime-db-v1-btn prime-db-v1-btn-outline-orange">
                Set as Primary
              </button>
              <button className="prime-db-v1-btn prime-db-v1-btn-solid">
                Add Alternate Method
              </button>
            </div>
        <div className="pps-divider-line" />

            <div className="prime-db-v1-safe-note">
              <h3 style={{display:'flex', fontSize:'16px', color:'#1F2937'}}>   <span className="prime-db-v1-safe-icon">◎</span> Secure Payment Processing</h3>
            <br />
</div>
              <div style={{fontSize:'12px', color:'grey'}}>All bank details are encrypted and securely stored. We never store your full account number.</div>
            
          </div>

          <div className="prime-db-v1-card prime-db-v1-tax-card">
            <div className="prime-db-v1-section-head">
              <h3 className="prime-db-v1-section-title">Tax Documents</h3>
            </div>

            <div className="prime-db-v1-doc-list">
              {taxDocs.map((doc, index) => (
                <div key={index} className="prime-db-v1-doc-item">
                  <div className="prime-db-v1-doc-left">
                    <div className="prime-db-v1-doc-icon"><img src="/doc1.svg" alt="" /></div>
                    <div>
                      <div className="prime-db-v1-doc-title">{doc.title}</div>
                      <div className="prime-db-v1-doc-meta">
                        {doc.size} • {doc.updated}
                      </div>
                    </div>
                  </div>
                  <button className="prime-db-v1-doc-download"><img src="/expo.svg" alt="" /></button>
                </div>
              ))}
            </div>

            <div className="prime-db-v1-tax-ready-box">
              <div className="prime-db-v1-tax-ready-title ml-3 text-bold" style={{display:'flex'}}> <img className="mr-2" src="/doc1.svg" alt="" /> Tax Season Ready</div>
              <div className="prime-db-v1-tax-ready-sub ml-9">
                All documents are formatted and include necessary details for filing returns.
              </div>
            </div>
          </div>
        </div>

        <div className="prime-db-v1-right-column">
       <div className="prime-db-v1-card prime-db-v1-activity-card">
  <div className="prime-db-v1-section-head prime-db-v1-activity-head">
    <h3 className="prime-db-v1-section-title">Property Activity</h3>
    <button className="prime-db-v1-text-link">View All Activity</button>
  </div>

  <div className="prime-db-v1-activity-list">
    <div className="prime-db-v1-activity-line"></div>

    {activityItems.map((item, index) => (
      <div key={index} className="prime-db-v1-activity-row">
        <div className="prime-db-v1-activity-icon-wrap">
          <span className="prime-db-v1-activity-icon">
            <img src={item.icon} alt="" />
          </span>
        </div>

        <div className="prime-db-v1-activity-box">
          <div className="prime-db-v1-activity-box-top">
            <div className="prime-db-v1-activity-title">{item.title}</div>
            <div className="prime-db-v1-activity-date">{item.date}</div>
          </div>

          <div className="prime-db-v1-activity-tag">{item.tag}</div>
        </div>
      </div>
    ))}
  </div>
</div>

          <div className="prime-db-v1-card prime-db-v1-statements-card">
            <div className="prime-db-v1-section-head">
              <h3 className="prime-db-v1-section-title">Statements & Exports</h3>
              <button className="prime-db-v1-text-link">View All Activity</button>
            </div>

            <div className="prime-db-v1-statement-btns">
              {statementButtons.map((item) => (
                <button key={item} className="prime-db-v1-statement-btn">
                  {item}
                </button>
              ))}
            </div>

            <div className="prime-db-v1-section-title mt-2 mb-2" style={{marginBottom:'10px'}}>Export Options</div>
            <div className="prime-db-v1-export-list mt-2">
              <label className="prime-db-v1-export-item">
                <input type="checkbox" /> Include fees breakdown
              </label>
              <label className="prime-db-v1-export-item">
                <input type="checkbox" /> Include property split
              </label>
              <label className="prime-db-v1-export-item">
                <input type="checkbox" /> Include tax classification
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="prime-db-v1-insight-shell">
        <div className="prime-db-v1-insight-top">
          <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
            <div className="bo"><img src="/light.svg" alt="" /></div>
            <div>
            <div className="prime-db-v1-insight-title">Distribution Insight</div>
            <div className="prime-db-v1-insight-sub">
              Your realized net payout increased by 3.2% compared with last quarter due to higher occupancy and stable operating costs.
            </div></div>
          </div>
          <button className="prime-db-v1-download-btn">Download Tax Pack</button>
        </div>

        <div className="prime-db-v1-insight-grid">
          <div className="prime-db-v1-insight-card">
            <div className="prime-db-v1-insight-label">Payout Growth</div>
            <div className="prime-db-v1-insight-value prime-db-v1-green-text">+2.0%</div>
          </div>
          <div className="prime-db-v1-insight-card">
            <div className="prime-db-v1-insight-label">Occupancy Rate</div>
            <div className="prime-db-v1-insight-value prime-db-v1-green-text">95%</div>
          </div>
          <div className="prime-db-v1-insight-card">
            <div className="prime-db-v1-insight-label">Tax Docs Ready</div>
            <div className="prime-db-v1-insight-value prime-db-v1-orange-text">3</div>
          </div>
        </div>

        <div className="prime-db-v1-note-row" style={{padding:'15px'}}>
                  <div className="prime-db-v1-doc-left">
                    <div className=""><img src="/doc1.svg" alt="" /></div>
                    <div>
                      <div className="prime-db-v1-doc-title">Tax Documents Available</div>
                      <div className="prime-db-v1-doc-meta">
          Tax Documents Available Tax documents for FY 2025-26 are now ready for download.
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    </section>
  );
}