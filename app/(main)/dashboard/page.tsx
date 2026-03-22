'use client';

import "../../primeprop-dashboard.css";
import "../../settings-dashboard.css";
import "../../prime-support-section.css";
import "../../prime-raise-issue-flow.css";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

const payoutRows = [
  { title: "Q1 2024", status: "Paid", amount: "39,200 AED", paid: true },
  { title: "Q2 2024", status: "Projected", amount: "40,100 AED", paid: false },
  { title: "Q3 2024", status: "Projected", amount: "41,000 AED", paid: false },
  { title: "Q4 2024", status: "Projected", amount: "41,500 AED", paid: false },
   { title: "Q4 2024", status: "Projected", amount: "41,500 AED", paid: false },
    { title: "Q4 2024", status: "Projected", amount: "41,500 AED", paid: false },
];

const activities = [
  {
    date: "Mar 12 2024",
    title: "Q1 Distribution Processed",
    desc: "₹39,200 credited to your UPI",
    type: "green",
    icon: "$",
    stage: "Completed",
  },
  {
    date: "Feb 28 2024",
    title: "Annual Yield Update",
    desc: "Net yield adjusted to 6.4%",
    type: "orange",
    icon: "↗",
    stage: "Reviewed",
  },
  {
    date: "Jan 15 2024",
    title: "Asset Funding Completed",
    desc: "JVC Tower SPV fully funded",
    type: "green",
    icon: "⌘",
    stage: "Completed",
  },
  {
    date: "Jan 02 2024",
    title: "New Document Available",
    desc: "Tax certificate ready for download",
    type: "gray",
    icon: "📄",
    stage: "Action Needed",
  },
];

const fundingProgressData = [
  { month: 'Jan', progress: 12 },
  { month: 'Feb', progress: 22 },
  { month: 'Mar', progress: 38 },
  { month: 'Apr', progress: 52 },
  { month: 'May', progress: 68 },
  { month: 'Jun', progress: 82 },
  { month: 'Jul', progress: 97 },
];

const yieldTrendData = [
  { name: '1', value: 24 }, { name: '2', value: 41 }, { name: '3', value: 19 },
  { name: '4', value: 33 }, { name: '5', value: 28 }, { name: '6', value: 42 },
  { name: '7', value: 53 }, { name: '8', value: 49 }, { name: '9', value: 44 },
  { name: '10', value: 28 }, { name: '11', value: 18 }, { name: '12', value: 23 },
  { name: '13', value: 40 }, { name: '14', value: 29 }, { name: '15', value: 17 },
  { name: '16', value: 25 }, { name: '17', value: 38 }, { name: '18', value: 52 },
  { name: '19', value: 47 }, { name: '20', value: 42 }, { name: '21', value: 27 },
  { name: '22', value: 13 },
];

const yieldPerformanceData = [
  { name: 'Gross', value: 8.1, fill: '#16a43b' },
  { name: 'Net', value: 6.2, fill: '#EB6601' },
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
                <div className="ppd-chart-title">Funding Progress</div>
                <div style={{ width: '100%', height: 160 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={fundingProgressData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" vertical={false} />
                      <XAxis
                        dataKey="month"
                        tick={{ fontSize: 12, fill: '#6B7280' }}
                        tickLine={false}
                        axisLine={{ stroke: '#e9ecef' }}
                      />
                      <YAxis
                        tick={{ fontSize: 11, fill: '#6B7280' }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) => `${v}%`}
                        domain={[0, 100]}
                      />
                      <Tooltip
                        contentStyle={{
                          background: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          fontSize: '13px',
                          padding: '10px 14px',
                        }}
                        formatter={(value) => [`${value ?? 0}%`, 'Funded']}
                        cursor={{ stroke: '#EB6601', strokeWidth: 1, strokeDasharray: '4 4' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="progress"
                        stroke="#EB6601"
                        strokeWidth={3}
                        dot={{ r: 5, fill: '#fff', stroke: '#EB6601', strokeWidth: 3 }}
                        activeDot={{ r: 7, fill: '#EB6601', stroke: '#fff', strokeWidth: 3 }}
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                      />
                    </LineChart>
                  </ResponsiveContainer>
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
                <button className="ppd-quarter-btn">Q1</button>
              </div>

              <div style={{ width: '100%', height: 120, marginTop: 8 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yieldPerformanceData} layout="vertical" margin={{ top: 0, right: 10, left: 10, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 10]} tick={{ fontSize: 11, fill: '#6B7280' }} tickLine={false} axisLine={false} />
                    <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: '#1f2937' }} tickLine={false} axisLine={false} width={50} />
                    <Tooltip
                      contentStyle={{
                        background: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        fontSize: '13px',
                        padding: '10px 14px',
                      }}
                      formatter={(value) => [`${value ?? 0}%`]}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1200} animationEasing="ease-out" barSize={22}>
                      {yieldPerformanceData.map((entry, index) => (
                        <Cell key={index} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
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

      <div className="ppd-secondary-grid">
        <div className="ppd-secondary-left">
          <div className="ppd-row-two">
            <div className="ppd-card ppd-mini-card">
              <div className="ppd-chart-title">Yield Trend (6M)</div>
              <div style={{ width: '100%', height: 60, marginTop: 4 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={yieldTrendData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <Bar dataKey="value" fill="#277079" radius={[10, 10, 0, 0]} animationDuration={1000} animationEasing="ease-out" />
                    <Tooltip
                      contentStyle={{
                        background: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        fontSize: '12px',
                        padding: '8px 12px',
                      }}
                      formatter={(value) => [`${value ?? 0}%`, 'Yield']}
                      cursor={{ fill: 'rgba(39, 112, 121, 0.08)' }}
                    />
                  </BarChart>
                </ResponsiveContainer>
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

          <div className="ppd-card ppd-map-card">
            <div className="ppd-chart-title">SPV Portfolio Overview</div>

            <div className="ppd-map-image-wrap">
              <iframe
                src="https://www.google.com/maps?q=Ames,Iowa&output=embed"
                style={{ border: 0, width: '100%', height: '100%', flex: 1 }}
                loading="lazy"
              ></iframe>
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
          </div>
        </div>

        <div className="ppd-secondary-right">
          <div className="ppd-card ppd-activity-card">
            <div className="ppd-activity-head">
              <div className="ppd-chart-title">Recent Activity</div>
              <button className="ppd-activity-view-btn">View All Activity</button>
            </div>

            <div className="ppd-activity-list">
              {activities.map((item, index) => (
                <div className="ppd-activity-item" key={index}>
                  <div className={`ppd-activity-icon ppd-activity-${item.type}`}>{item.icon}</div>
                  <div className="ppd-activity-content">
                    <div className="ppd-activity-top">
                      <div className="ppd-activity-title">{item.title}</div>
                      <span>{item.date}</span>
                    </div>
                    <div className="ppd-activity-desc">{item.desc}</div>
                    <span className="ppd-activity-tag">{item.stage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ppd-opportunity-box">
            <div className="ppd-opportunity-top">
              <div className="ppd-activity-icon ppd-activity-blue">📈</div>
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