"use client";

import { useMemo, useState } from "react";

type IssueCategory =
  | "Payout Issue"
  | "Document Issue"
  | "Verification Issue"
  | "Tax Issue"
  | "Investment Question"
  | "Account / Security Issue"
  | "";

type SpecificProblem = string;
type CasePriority = "Low" | "Medium" | "High";

const categoryCards: { label: Exclude<IssueCategory, "">; icon: string }[] = [
  { label: "Payout Issue", icon: "◎" },
  { label: "Document Issue", icon: "📄" },
  { label: "Verification Issue", icon: "◉" },
  { label: "Tax Issue", icon: "🧾" },
  { label: "Investment Question", icon: "ⓘ" },
  { label: "Account / Security Issue", icon: "🔒" },
];

const payoutProblems = [
  "Delayed Payout",
  "Incorrect Payout Amount",
  "Failed Bank Transfer",
  "Receipt Missing",
  "Unknown Deduction",
];

const documentProblems = [
  "Missing Agreement",
  "Missing Tax Certificate",
  "Receipt Download Error",
  "Document Access Problem",
  "Signed Copy Request",
];

const verificationProblems = [
  "Bank Verification Failed",
  "PAN Verification Failed",
  "KYC Pending Review",
  "Identity Update Needed",
  "Account Name Mismatch",
];

const taxProblems = [
  "Missing Tax Pack",
  "Incorrect Tax Amount",
  "TDS Certificate Issue",
  "Tax Residency Query",
  "Form Download Issue",
];

const investmentProblems = [
  "Distribution Schedule",
  "Property Performance Query",
  "Commitment Clarification",
  "Capital Call Question",
  "Investment Record Request",
];

const securityProblems = [
  "Login Issue",
  "2FA Problem",
  "Profile Access Issue",
  "Suspicious Activity",
  "Account Closure Request",
];

type PrimeRaiseIssueFlowProps = {
  onClose: () => void;
};

export default function PrimeRaiseIssueFlow({
  onClose,
}: PrimeRaiseIssueFlowProps) {
  const [step, setStep] = useState(1);

  const [category, setCategory] = useState<IssueCategory>("");
  const [specificProblem, setSpecificProblem] = useState<SpecificProblem>("");
  const [property, setProperty] = useState("");
  const [payoutPeriod, setPayoutPeriod] = useState("");
  const [priority, setPriority] = useState<CasePriority>("High");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");

  const problemOptions = useMemo(() => {
    switch (category) {
      case "Payout Issue":
        return payoutProblems;
      case "Document Issue":
        return documentProblems;
      case "Verification Issue":
        return verificationProblems;
      case "Tax Issue":
        return taxProblems;
      case "Investment Question":
        return investmentProblems;
      case "Account / Security Issue":
        return securityProblems;
      default:
        return [];
    }
  }, [category]);

  const canContinueStep1 = !!category;
  const canContinueStep2 = !!specificProblem;
  const canContinueStep3 = true;
  const canContinueStep4 =
    subject.trim().length >= 5 && description.trim().length >= 20;

  const stepNames = [
    "Select Category",
    "Issue Type",
    "Context",
    "Details",
    "Review",
  ] as const;

  const closeFlow = () => {
    onClose();
  };

  const handleContinue = () => {
    if (step === 1 && canContinueStep1) setStep(2);
    else if (step === 2 && canContinueStep2) setStep(3);
    else if (step === 3 && canContinueStep3) setStep(4);
    else if (step === 4 && canContinueStep4) setStep(5);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="prm-issueflow-overlay" onClick={closeFlow}>
      <div className="prm-issueflow-modal" onClick={(e) => e.stopPropagation()}>
        <div className="prm-issueflow-header">
          <div className="prm-issueflow-title">Raise a New Issue</div>
          <button
            className="prm-issueflow-close"
            onClick={closeFlow}
            type="button"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="prm-issueflow-divider" />

        <div className="prm-issueflow-stepbar">
          <div className="prm-issueflow-steppill">
            <div className="prm-issueflow-stepitem prm-issueflow-stepitem-active">
              <div
                className={`prm-issueflow-stepicon ${
                  step >= 1 ? "prm-issueflow-stepicon-active" : ""
                }`}
              >
                ◎
              </div>
              <div className="prm-issueflow-steptext">
                <span className="prm-issueflow-stepcount">Step {step}/5</span>
                <span className="prm-issueflow-stepname">{stepNames[step - 1]}</span>
              </div>
            </div>

            <div className="prm-issueflow-stepdivider" />

            <div
              className={`prm-issueflow-stepicon ${
                step >= 2 ? "prm-issueflow-stepicon-active" : ""
              }`}
            >
              ⚠
            </div>

            <div className="prm-issueflow-stepdivider" />

            <div
              className={`prm-issueflow-stepicon ${
                step >= 3 ? "prm-issueflow-stepicon-active" : ""
              }`}
            >
              📄
            </div>

            <div className="prm-issueflow-stepdivider" />

            <div
              className={`prm-issueflow-stepicon ${
                step >= 4 ? "prm-issueflow-stepicon-active" : ""
              }`}
            >
              📋
            </div>

            <div className="prm-issueflow-stepdivider" />

            <div
              className={`prm-issueflow-stepicon ${
                step >= 5 ? "prm-issueflow-stepicon-active" : ""
              }`}
            >
              👁
            </div>
          </div>
        </div>

        <div className="prm-issueflow-body">
          {step === 1 && (
            <div className="prm-issueflow-panel">
              <div className="prm-issueflow-sectiontitle">Choose Issue Category</div>

              <div className="prm-issueflow-categorygrid">
                {categoryCards.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className={`prm-issueflow-categorycard ${
                      category === item.label
                        ? "prm-issueflow-categorycard-active"
                        : ""
                    }`}
                    onClick={() => {
                      setCategory(item.label);
                      setSpecificProblem("");
                    }}
                  >
                    <div className="prm-issueflow-categoryicon">{item.icon}</div>
                    <span className="prm-issueflow-categorylabel">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="prm-issueflow-panel">
              <div className="prm-issueflow-sectiontitle">Choose Specific Problem</div>

              <div className="prm-issueflow-problemlist">
                {problemOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`prm-issueflow-problemitem ${
                      specificProblem === item
                        ? "prm-issueflow-problemitem-active"
                        : ""
                    }`}
                    onClick={() => setSpecificProblem(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="prm-issueflow-panel">
              <div className="prm-issueflow-sectiontitle">Add Context (Optional)</div>

              <div className="prm-issueflow-fieldwrap">
                <label className="prm-issueflow-label">Property</label>
                <select
                  className="prm-issueflow-select"
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                >
                  <option value="">Select property</option>
                  <option value="JVC Tower SPV">JVC Tower SPV</option>
                  <option value="Lotus Heights">Lotus Heights</option>
                  <option value="Prime Residency">Prime Residency</option>
                </select>
              </div>

              <div className="prm-issueflow-fieldwrap">
                <label className="prm-issueflow-label">Payout Period</label>
                <select
                  className="prm-issueflow-select"
                  value={payoutPeriod}
                  onChange={(e) => setPayoutPeriod(e.target.value)}
                >
                  <option value="">Select period</option>
                  <option value="Q1 FY2025-26">Q1 FY2025-26</option>
                  <option value="Q2 FY2025-26">Q2 FY2025-26</option>
                  <option value="Q3 FY2025-26">Q3 FY2025-26</option>
                </select>
              </div>

              <div className="prm-issueflow-fieldwrap">
                <label className="prm-issueflow-label">Case Priority</label>
                <div className="prm-issueflow-priorityrow">
                  {(["Low", "Medium", "High"] as CasePriority[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`prm-issueflow-prioritybtn ${
                        priority === item
                          ? "prm-issueflow-prioritybtn-active"
                          : ""
                      }`}
                      onClick={() => setPriority(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="prm-issueflow-panel">
              <div className="prm-issueflow-sectiontitle">Describe Your Issue</div>

              <div className="prm-issueflow-fieldwrap">
                <label className="prm-issueflow-label">
                  Subject Line <span className="prm-issueflow-required">*</span>
                </label>
                <input
                  className="prm-issueflow-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Brief summary of your issue"
                />
              </div>

              <div className="prm-issueflow-fieldwrap">
                <label className="prm-issueflow-label">
                  Detailed Description <span className="prm-issueflow-required">*</span>
                </label>
                <textarea
                  className="prm-issueflow-textarea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Please provide as much detail as possible to help us resolve your issue clearly."
                />
                <div className="prm-issueflow-charcount">
                  {description.length} characters
                </div>
              </div>

              <div className="prm-issueflow-fieldwrap">
                <label className="prm-issueflow-label">Attachments</label>
                <div className="prm-issueflow-uploadbox">
                  <div className="prm-issueflow-uploadicon">⇪</div>
                  <div className="prm-issueflow-uploadtitle">
                    Click to upload or drag and drop
                  </div>
                  <div className="prm-issueflow-uploadsub">
                    PDF, PNG, JPG, CSV (max 10MB each)
                  </div>
                </div>
              </div>

              <div className="prm-issueflow-fieldwrap">
                <label className="prm-issueflow-label">Preferred Contact Method</label>
                <div className="prm-issueflow-contactrow">
                  {["Email", "Phone", "In-app"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`prm-issueflow-contactbtn ${
                        contactMethod === item
                          ? "prm-issueflow-contactbtn-active"
                          : ""
                      }`}
                      onClick={() => setContactMethod(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="prm-issueflow-panel">
              <div className="prm-issueflow-sectiontitle">Review & Submit</div>

              <div className="prm-issueflow-reviewcard">
                <div className="prm-issueflow-reviewgrid">
                  <div>
                    <span className="prm-issueflow-reviewlabel">Category</span>
                    <p className="prm-issueflow-reviewvalue">{category || "-"}</p>
                  </div>
                  <div>
                    <span className="prm-issueflow-reviewlabel">Issue Type</span>
                    <p className="prm-issueflow-reviewvalue">{specificProblem || "-"}</p>
                  </div>
                  <div>
                    <span className="prm-issueflow-reviewlabel">Priority</span>
                    <p className="prm-issueflow-reviewvalue">{priority}</p>
                  </div>
                  <div>
                    <span className="prm-issueflow-reviewlabel">Property</span>
                    <p className="prm-issueflow-reviewvalue">
                      {property || "Not selected"}
                    </p>
                  </div>
                </div>

                <div className="prm-issueflow-reviewdesc">
                  {description || "No description provided."}
                </div>
              </div>

              <div className="prm-issueflow-responsebox">
                <div className="prm-issueflow-responseicon">✓</div>
                <div>
                  <div className="prm-issueflow-responsetitle">Expected Response SLA</div>
                  <div className="prm-issueflow-responsetext">
                    Response within 2 hours • Resolution target: 24 hours
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="prm-issueflow-footer">
          <div className="prm-issueflow-footer-left">
            {step > 1 && (
              <button
                type="button"
                className="prm-issueflow-btn-secondary"
                onClick={handleBack}
              >
                Back
              </button>
            )}
          </div>

          <div className="prm-issueflow-footer-right">
            <button type="button" className="prm-issueflow-btn-outline">
              Save Draft
            </button>

            {step < 5 ? (
              <button
                type="button"
                className="prm-issueflow-btn-primary"
                onClick={handleContinue}
                disabled={
                  (step === 1 && !canContinueStep1) ||
                  (step === 2 && !canContinueStep2) ||
                  (step === 3 && !canContinueStep3) ||
                  (step === 4 && !canContinueStep4)
                }
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                className="prm-issueflow-btn-primary"
                onClick={closeFlow}
              >
                Submit Issue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
