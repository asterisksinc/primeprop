import PrimePropNavbar from "./components/PrimePropNavbar";
import "./primeprop-dashboard.css";

const payoutRows = [
  { title: "Q1 2024", status: "Paid", amount: "39,200 AED", paid: true },
  { title: "Q2 2024", status: "Projected", amount: "40,100 AED", paid: false },
  { title: "Q3 2024", status: "Projected", amount: "41,000 AED", paid: false },
  { title: "Q4 2024", status: "Projected", amount: "41,500 AED", paid: false },
];

const activities = [
  {
    date: "Mar 12 2024",
    title: "Q1 Distribution Processed",
    desc: "₹39,200 credited to your UPI",
    type: "green",
    icon: "$",
  },
  {
    date: "Feb 28 2024",
    title: "Annual Yield Update",
    desc: "Net yield adjusted to 6.4%",
    type: "orange",
    icon: "↗",
  },
  {
    date: "Jan 15 2024",
    title: "Asset Funding Completed",
    desc: "JVC Tower SPV fully funded",
    type: "green",
    icon: "⌘",
  },
  {
    date: "Jan 02 2024",
    title: "New Document Available",
    desc: "Tax certificate ready for download",
    type: "gray",
    icon: "📄",
  },
];

const yieldBars = [
  24, 41, 19, 33, 28, 42, 53, 49, 44, 28, 18, 23, 40, 29, 17, 25, 38, 52, 47,
  42, 27, 13,
];

export default function HomePage() {
  return (
    <main className="ppd-page-shell">
      <div className="ppd-page-wrap">

        <section className="ppd-dashboard-grid">
          <div className="ppd-left-column">
            <div className="ppd-card ppd-investment-card">
              <div className="ppd-investment-top">
                <div className="ppd-investment-box">
                  <div className="ppd-small-label">Total Investment</div>
                  <div className="ppd-big-number">20,00,000 AED</div>
                  <div className="ppd-muted-text">1.00% Ownership</div>
                </div>

                <div className="ppd-vertical-divider" />

                <div className="ppd-jvc-box">
                  <div className="ppd-jvc-title">JVC Tower SPV</div>
                  <div className="ppd-mini-row">
                    <span>Funding</span>
                    <strong>97%</strong>
                  </div>

                  <div className="ppd-funding-bars">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <span key={index} className="ppd-funding-stick" />
                    ))}
                  </div>

                  <div className="ppd-mini-row ppd-mini-row-bottom">
                    <span>You are investor</span>
                    <strong>16 of 20</strong>
                  </div>
                </div>
              </div>

              <div className="ppd-horizontal-divider" />

              <div className="ppd-chart-box">
                <div style={{ background: '#F8FAFC' }}>
                  <div className="ppd-chart-title" style={{ marginLeft: '10px' }}>
                    Funding Progress
                  </div>

                  <div className="ppd-chart-wrapper">

                    {/* grid lines */}
                    <div className="ppd-chart-grid">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <span key={i}></span>
                      ))}
                    </div>

                    {/* line graph */}
                    <svg
                      className="ppd-chart-svg"
                      viewBox="0 0 520 160"
                      preserveAspectRatio="none"
                    >
                      <polyline
                        points="20,130 100,120 180,100 260,80 340,60 420,40 500,20"
                        fill="none"
                        stroke="#138a82"
                        strokeWidth="3"
                      />

                      {[
                        [20, 130],
                        [100, 120],
                        [180, 100],
                        [260, 80],
                        [340, 60],
                        [420, 40],
                        [500, 20],
                      ].map(([x, y], i) => (
                        <circle
                          key={i}
                          cx={x}
                          cy={y}
                          r="5"
                          fill="#fff"
                          stroke="#138a82"
                          strokeWidth="3"
                        />
                      ))}

                    </svg>

                    {/* months */}
                    <div className="ppd-chart-months">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="ppd-middle-column height">
            <div className="ppd-card ppd-earnings-card">
              <div className="ppd-earnings-head">
                <div>
                  <div className="ppd-chart-title">Q1 Earnings</div>
                  <div className="ppd-big-number ppd-big-number-small">39,200 AED</div>
                  <div className="ppd-muted-text">6.4% YTD Yield</div>
                </div>

                <div className="ppd-yield-grid">
                  <div className="ppd-yield-box">
                    <span>Gross Yield</span>
                    <strong>8.2%</strong>
                  </div>
                  <div className="ppd-yield-box">
                    <span>Net Yield</span>
                    <strong>6.4%</strong>
                  </div>
                </div>
              </div>

              <div className="ppd-benchmark-pill">Outperforming benchmark by <span className="b">0.8%</span> </div>
            </div>

            <div className="ppd-card ppd-performance-card">
              <div className="ppd-performance-head">
                <div className="ppd-chart-title">Yield Performance</div>
                <button className="ppd-quarter-btn">
                  Q1
                </button>
              </div>

              <div className="ppd-performance-labels">
                <span>Gross</span>
                <span>Net</span>
              </div>

              <div className="ppd-performance-bars">
                <div className="ppd-performance-bar-green" />
                <div className="ppd-performance-bar-orange" />
              </div>

              <div className="ppd-performance-values">
                <span>8.1</span>
                <span>6.2</span>
              </div>

              <div className="ppd-performance-legend">
                <div><span className="ppd-dot-green" /> Gross</div>
                <div><span className="ppd-dot-orange" /> Net</div>
              </div>
            </div>
          </div>

          <div className="ppd-right-column">
            <div className="ppd-card ppd-distribution-card height">
              <div className="ppd-distribution-header">
                <div className="ppd-chart-title">Next Distribution</div>
                <div className="ppd-upi-badge">UPI Verified</div>
              </div>

              <div className="ppd-date-title">Apr 15, 2024</div>
              <div className="ppd-muted-text">₹39,000 estimated payout</div>
              <div className="ppd-horizontal-divider" />

              <div className="ppd-payout-box">
                <div className="ppd-chart-title">Payout History</div>
                <div className="ppd-payout-header">
                  <span>Title</span>
                  <span>Status</span>
                  <span>Amount</span>
                </div>

                {payoutRows.map((row) => (
                  <div className="ppd-payout-row" key={row.title}>
                    <span>{row.title}</span>
                    <span className={row.paid ? "ppd-status-paid" : "ppd-status-projected"}>
                      {row.status}
                    </span>
                    <span>{row.amount}</span>
                  </div>
                ))}
              </div>
            </div>


          </div>
        </section>
      </div>
      <div style={{ display: 'flex', marginTop: '14px', gap: '14px' }}>
        <div className="flex-col">
          <div className="ppd-row-two">
            <div className="ppd-card ppd-mini-card">
              <div className="ppd-chart-title">Yield Trend (6M)</div>
              <div className="ppd-orange-bars">
                {yieldBars.map((h, i) => (
                  <span key={i} style={{ height: `${h + 8}px` }} />
                ))}
              </div>
              <div className="ppd-green-metric">+12.4% <span>vs previous period</span></div>
            </div>

            <div className="ppd-card ppd-mini-card">
              <div className="ppd-card-header-inline">
                <div className="ppd-chart-title">Fee Transparency</div>
                <div className="ppd-info-dot">i</div>
              </div>
              <div className="ppd-big-number ppd-big-number-small">70,000 AED</div>
              <div className="ppd-green-metric">
                3.5% <span>vs industry avg</span> 4.8%
              </div>
            </div>

            <div className="ppd-card ppd-mini-card">
              <div className="ppd-card-header-inline">
                <div className="ppd-chart-title">Document Status</div>
                <div className="ppd-info-dot">i</div>
              </div>
              <div className="ppd-big-number ppd-big-number-small">3 of 3 Available</div>
              <div className="ppd-download-link">↓&nbsp; Download Bundle (8.2MB)</div>
            </div>
          </div>

          <div className="ppd-card ppd-map-card" style={{ marginTop: '14px' }}>
            <div className="ppd-chart-title">SPV Portfolio Overview</div>

            <div className="ppd-map-image-wrap">
              <img src="/primeprop-map.png" alt="Map" />
            </div>

            <div className="ppd-map-stats">
              <div className="ppd-map-stat">
                <span>Occupancy</span>
                <strong>98.4%</strong>
              </div>
              <div className="ppd-map-stat">
                <span>Wale</span>
                <strong>4.2 years</strong>
              </div>
              <div className="ppd-map-stat">
                <span>Valuation</span>
                <strong>240 Cr AED</strong>
              </div>
              <div className="ppd-map-stat">
                <span>Tenant Quality</span>
                <strong>AAA Rated</strong>
              </div>
            </div>
          </div></div>
        <div className="flex-col" style={{ maxWidth: '461px' }}>
          <div className="ppd-card ppd-activity-card ">
            <div className="ppd-chart-title">Recent Activity</div>

            <div className="ppd-activity-list">
              {activities.map((item, index) => (
                <div className="ppd-activity-item" key={index}>
                  <div className={`ppd-activity-icon ppd-activity-${item.type}`}>{item.icon}</div>
                  <div className="ppd-activity-content">
                    <div className="ppd-activity-date">{item.date}</div>
                    <div className="ppd-activity-title">{item.title}</div>
                    <div className="ppd-activity-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
          <div className="ppd-opportunity-box" style={{ marginTop: '14px' }}>
            <div className="ppd-opportunity-top">
              <div className="ppd-activity-icon ppd-activity-orange">↗</div>
              <div>
                <div className="ppd-opportunity-title">Investment Opportunity</div>
                <div className="ppd-opportunity-desc">
                  Increasing your position in JVC Tower SPV by ₹5L would increase your quarterly
                  payout to <span>48,750 AED.</span>
                </div>
              </div>
            </div>

            <button className="ppd-opportunity-btn">Explore Opportunity →</button>
          </div>
        </div>
      </div>
    </main>
  );
}