type ContentProps = {
  activeSection: string;
};

export default function PrimeSettingsContent({
  activeSection,
}: ContentProps) {
  return (
    <section className="pps-content-shell">
      {activeSection === "account" && <AccountSection />}
      {activeSection === "security" && <SecuritySection />}
      {activeSection === "payouts" && <PayoutsSection />}
      {activeSection === "tax" && <TaxSection />}
      {activeSection === "notifications" && <NotificationsSection />}
      {activeSection === "preferences" && <PreferencesSection />}
      {activeSection === "support" && <SupportSection />}
    </section>
  );
}

function AccountSection() {
  return (
    <div className="pps-section-wrap">
      <div className="pps-card-box">
        <h2 className="pps-section-title">Profile Information</h2>

        <div className="pps-profile-head"  style={{marginTop:'30px', marginBottom:'30px'}}>
          <div className="pps-profile-avatar">🧔</div>

          <div className="pps-profile-meta">
            <div className="pps-profile-name">Profile Photo</div>
            <div className="pps-profile-sub">JPG, GIF or PNG. Max size 2MB.</div>
            <div className="pps-profile-actions">
              <button className="pps-btn-primary">Upload Photo</button>
              <button className="pps-btn-link">Remove</button>
            </div>
          </div>
        </div>

        <div className="pps-divider-line" />

        <div className="pps-form-grid" style={{marginBottom:'40px',marginTop:'30px'}}>
          <div className="pps-field-box">
            <label>Full Name</label>
            <input defaultValue="Ananya Sharma" />
          </div>
          <div className="pps-field-box">
            <label>Email Address</label>
            <input defaultValue="johndoe23@gmail.com" />
          </div>
          <div className="pps-field-box">
            <label>Phone Number</label>
            <input defaultValue="+91 98765 43210" />
          </div>
          <div className="pps-field-box">
            <label>Date of Birth</label>
            <input defaultValue="Jan 20, 1992" />
          </div>
          <div className="pps-field-box">
            <label>Country of Residence</label>
            <input defaultValue="India" />
          </div>
          <div className="pps-field-box">
            <label>Investor Type</label>
            <div className="pps-verified-wrap">
              <input defaultValue="Individual Institutional" />
              <span className="pps-verified-badge">Verified</span>
            </div>
          </div>
        </div>
        <div className="pps-divider-line" />

        <div className="pps-action-right"  style={{marginTop:'40px'}}>
          <button className="pps-btn-primary">Save Changes</button>
        </div>
      </div>

   
    </div>
  );
}

function SecuritySection() {
  return (
    <div className="pps-section-wrap">
   <div className="pps-card-box">
        <h3 className="pps-section-title">Security</h3>

        <div className="pps-security-box">
          <div className="pps-security-left">
            <div className="pps-security-icon"><img src="/lock.svg"  /></div>
            <div>
              <div className="pps-security-title">Password</div>
              <div className="pps-security-sub">Last changed 42 days ago</div>
            </div>
          </div>
          <button className="pps-btn-primary">Change Password</button>
        </div>
<div className="pps-security-box1">
        <div className="pps-security-box2">
          <div className="pps-security-left">
            <div className="pps-security-icon"><img src="/mob.svg"  /></div>
            <div>
              <div className="pps-security-title">Two-Factor Authentication</div>
              <div className="pps-security-sub">
                Protected with Authenticator app
              </div>
            </div>
          </div>
          <span className="pps-green-badge">Enabled</span>  </div>
              <div className="pps-inline-buttons">
          <button className="pps-btn-outline">Manage 2FA</button>
          <button className="pps-btn-outline">View Backup Codes</button>
          <button className="pps-btn-outline">Regenerate Codes</button>
      
        </div>
</div>
    

        <div className="pps-login-box">
          <div className="pps-login-head">
            <div className="pps-security-left">
              <div className="pps-security-icon pps-blue-icon"><img src="/cloc.svg"/></div>
              <div>
                <div className="pps-security-title">Login Activity</div>
                <div className="pps-security-sub">Recent login sessions</div>
              </div>
            </div>
          </div>

          <div className="pps-login-row">
            <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
                <img src="/lap.svg" alt="" /><div>
              <div className="pps-login-main">Mar 16, 2026 &nbsp; -- &nbsp;  <span className="pps-security-sub" style={{fontSize:'12px'}}>Ahmedabad, India</span> </div>
              <div className="pps-security-sub">Chrome on Windows</div></div>
            </div>
            <span className="pps-green-badge">Current session</span>
          </div>

          <div className="pps-login-row">
            <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
                <img src="/ph.svg" alt="" /><div>
              <div className="pps-login-main">Mar 12, 2026 &nbsp; -- &nbsp; <span className="pps-security-sub" style={{fontSize:'12px'}}> Mumbai, India</span></div>
              <div className="pps-security-sub">Safari on iPhone</div>
            </div></div>
            <span className="pps-gray-text">Successful login</span>
          </div>
        </div>
      </div>

     
    </div>
  );
}

function PayoutsSection() {
  return (
    <div className="pps-section-wrap">
      <div className="pps-card-box">
        <h2 className="pps-section-title">Payout Methods</h2>

        <div className="pps-bank-card" style={{marginTop:'30px'}}>
          <div className="pps-bank-top">
            
                      <div style={{display:'flex', gap:'15px'}}>
                          <div className="pps-security-icon"><img src="/lock.svg" /></div>
                          <div>
                              <div className="pps-security-title">HDFC Bank</div>
                              <div className="pps-security-sub">John Doe</div>
                          </div>

                      </div>
            <span className="pps-green-badge">Primary Payout Method</span>
          </div>

          <div className="pps-bank-grid">
            <div>
              <label>Account Number</label>
              <div className="pps-bank-value">•••• •••• 4321</div>
            </div>
            <div>
              <label>IFSC Code</label>
              <div className="pps-bank-value">HDFC0001234</div>
            </div>
          </div>

          <div className="pps-inline-buttons">
            <button className="pps-btn-outline" style={{flex:'auto'}}>Edit Details</button>
            <button className="pps-btn-outline" style={{flex:'auto'}}>Re-Verify</button>
            <button className="pps-btn-outline" style={{flex:'auto'}}>+ Add Account</button>
            <button className="pps-btn-outline" style={{flex:'auto'}}>Set Priority</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TaxSection() {
  return (
    <div className="pps-section-wrap">
      <div className="pps-card-box">
        <h2 className="pps-section-title">Tax Information</h2>

        <div className="pps-tax-block">
          <div className="pps-section-head-flex">
            <h3 className="pps-subsection-title">Tax Residency</h3>
            <button className="pps-btn-link">Add Another Residency</button>
          </div>
          <div className="pps-login-row">
            <div>
              <div className="pps-login-main">India</div>
              <div className="pps-security-sub">Primary tax residency</div>
            </div>
            <span className="pps-green-badge">Active</span>
          </div>
        </div>

        <div className="pps-tax-block">
          <div className="pps-section-head-flex">
            <h3 className="pps-subsection-title">Tax ID / PAN</h3>
            <button className="pps-btn-link">Add Another Residency</button>
          </div>

          <div className="pps-form-grid">
            <div className="pps-field-box">
              <label>PAN Number</label>
              <input defaultValue="ABCDE1234F" />
              <small>Last updated: Feb 28, 2026</small>
            </div>
            <div className="pps-field-box">
              <label>Declaration Status</label>
              <div className="pps-submit-box">Submitted ✓</div>
            </div>
          </div>
        </div>
        <div className="pps-divider-line" />

            <div className="pps-tax-block">
            <h3 className="pps-subsection-title">Investor Tax Forms</h3>
            <div style={{display:'flex',  flexWrap: 'wrap'}}>
          <div className="pps-doc-card" style={{width: '47%', marginRight:'20px', marginBottom:'20px'}}>
            <div>
              <div className="pps-login-main">PAN Declaration</div>
              <div className="pps-security-sub">Last updated: Feb 28, 2026</div>
            </div>
            <div className="pps-doc-actions">
              <span className="pps-green-badge">Submitted</span>
              <button className="pps-btn-link">View</button>
            </div>
          </div>

          <div className="pps-doc-card" style={{width: '47%', marginRight:'20px', marginBottom:'20px'}}>
            <div>
              <div className="pps-login-main">Tax Residency Self-Certification</div>
              <div className="pps-security-sub">Last updated: Feb 28, 2026</div>
            </div>
            <div className="pps-doc-actions">
              <span className="pps-green-badge">Submitted</span>
              <button className="pps-btn-link">View</button>
            </div>
          </div>

          <div className="pps-doc-card" style={{width: '47%', marginRight:'20px', marginBottom:'20px'}}>
            <div>
              <div className="pps-login-main">Annual Tax Statement Preference</div>
              <div className="pps-security-sub">Last updated: Mar 01, 2026</div>
            </div>
            <div className="pps-doc-actions">
              <span className="pps-green-badge">Configured</span>
              <button className="pps-btn-link">View</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationsSection() {
  const rows = [
    "Distributions & Payouts",
    "Documents",
    "Security Alerts",
    "Property Updates",
    "Tax Statements",
    "Promotional / New Opportunities",
  ];

  return (
    <div className="pps-section-wrap">
      <div className="pps-card-box">
        <h2 className="pps-section-title">Notification</h2>

        <div className="pps-table-wrap">
          <div className="pps-table-head">
            <span>Category</span>
            <span>Email</span>
            <span>Push</span>
            <span>SMS</span>
          </div>

          {rows.map((row) => (
            <div className="pps-table-row" key={row}>
              <div className="pps-category-info">
                <strong>{row}</strong>
                <small>Monthly yields and dividend announcements</small>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreferencesSection() {
  return (
    <div className="pps-section-wrap">
      <div className="pps-card-box">
        <h2 className="pps-section-title">App Preferences</h2>

        <div className="pps-form-grid">
          <div className="pps-field-box">
            <label>Language</label>
            <select>
              <option>English</option>
            </select>
          </div>
          <div className="pps-field-box">
            <label>Theme</label>
            <select>
              <option>System Default</option>
            </select>
          </div>
          <div className="pps-field-box">
            <label>Currency Display</label>
            <select>
              <option>INR</option>
            </select>
          </div>
          <div className="pps-field-box">
            <label>Date Format</label>
            <select>
              <option>DD/MM/YYYY</option>
            </select>
          </div>
        </div>
        <div className="pps-divider-line" />

        <h3 className="pps-subsection-title pps-sub-top">Accessibility</h3>

              <div className="pps-toggle-grid">
                  <div className="pps-toggle-card">
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <div>
                      <div className="pps-toggle-title">High Contrast Mode</div>
                      <div className="pps-security-sub">Increase color contrast for better visibility</div></div>
                      <label className="toggle-switch">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                      </label>          </div>
                      </div>
                  <div className="pps-toggle-card">
                                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
  <div>
                      <div className="pps-toggle-title">Reduce Motion</div>
                      <div className="pps-security-sub">Minimize animations and transitions</div></div>
                      <label className="toggle-switch">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                      </label>       </div>         </div>
                  <div className="pps-toggle-card">
                                                        <div style={{display:'flex' , justifyContent:'space-between', alignItems:'center'}}>
  <div>
                      <div className="pps-toggle-title">Larger Text Size</div>
                      <div className="pps-security-sub">Increase default text size</div></div>
                      <label className="toggle-switch">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                      </label>  </div>          </div>
              </div>
        <div className="pps-divider-line" />

        <div className="pps-action-right">
          <button className="pps-btn-primary">Save Preferences</button>
        </div>
      </div>
    </div>
  );
}

function SupportSection() {
  return (
    <div className="pps-section-wrap">
 <div className="pps-card-box">
        <div className="pps-section-head-flex">
          <h2 className="pps-section-title">Active Session</h2>
          <button className="pps-danger-link">Log Out All Other Devices</button>
        </div>

        <div className="pps-login-row">
          <div>
            <div className="pps-login-main">
              Chrome on Windows <span className="pps-this-device">This Device</span>
            </div>
            <div className="pps-security-sub">Mumbai, India - Last Active 2 Minutes Ago</div>
          </div>
          <span className="pps-green-badge">Active Now</span>
        </div>

        <div className="pps-login-row">
          <div>
            <div className="pps-login-main">Safari on iphone 15 Pro</div>
            <div className="pps-security-sub">Delhi, India Last active Oct 24, 2023</div>
          </div>
          <button className="pps-danger-link">Terminate</button>
        </div>
      </div>

     

      <div className="pps-card-box pps-danger-card">
        <h3 className="pps-subsection-title">Account Actions</h3>

        <div className="pps-action-row">
          <div>
            <div className="pps-login-main">Download My Data</div>
            <div className="pps-security-sub">Export all your account data and investment records</div>
          </div>
          <button className="pps-btn-outline">Download</button>
        </div>

        <div className="pps-action-row">
          <div>
            <div className="pps-login-main">Deactivate Account Temporarily</div>
            <div className="pps-security-sub">Pause your account access without closing it</div>
          </div>
          <button className="pps-btn-outline">Deactivate</button>
        </div>

        <div className="pps-action-row pps-action-row-danger">
          <div>
            <div className="pps-login-main">Request Account Closure</div>
            <div className="pps-security-sub">Permanently close your account (requires support review)</div>
          </div>
          <button className="pps-btn-danger">Close Account</button>
        </div>
      </div>
    </div>
  );
}