"use client";

import { useMemo, useState } from "react";

type ReviewFlowStep = 1 | 2 | 3 | 4 | "success";

export function RightPanel() {
  const [isFlowOpen, setIsFlowOpen] = useState(false);
  const [step, setStep] = useState<ReviewFlowStep>(1);
  const [investmentAmount, setInvestmentAmount] = useState(20);
  const [scenario, setScenario] = useState<"Bear" | "Base" | "Bull">("Bear");
  const [signatureMode, setSignatureMode] = useState<"type" | "draw">("draw");
  const [typedSignature, setTypedSignature] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isBankVerified, setIsBankVerified] = useState(false);
  const [bankName, setBankName] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "bank" | "split">("upi");

  const ownership = useMemo(() => ((investmentAmount / 200) * 100).toFixed(2), [investmentAmount]);
  
  // Calculate based on scenario (multiplied directly as per original formula)
  const scenarioMultipliers = {
    Bear: 5.4,
    Base: 6.4,
    Bull: 8.4,
  };
  
  const annualReturn = useMemo(() => Math.round(investmentAmount * scenarioMultipliers[scenario]), [investmentAmount, scenario]);
  const quarterlyDistribution = useMemo(() => (annualReturn / 4).toFixed(1), [annualReturn]);

  const scenarioYield = {
    Bear: "5.4%",
    Base: "6.4%",
    Bull: "8.4%",
  };

  const resetFlow = () => {
    setStep(1);
    setTermsAccepted(false);
    setSignatureMode("draw");
    setTypedSignature("");
    setIsBankVerified(false);
    setBankName("");
    setAccountHolder("");
    setAccountNumber("");
    setConfirmAccountNumber("");
    setIfscCode("");
    setPaymentMethod("upi");
  };

  const closeFlow = () => {
    setIsFlowOpen(false);
    resetFlow();
  };

  const openFlow = () => {
    setIsFlowOpen(true);
    setStep(1);
  };

  const canContinueStep2 = termsAccepted && (signatureMode === "draw" || typedSignature.trim().length > 1);
  const canVerifyBank =
    accountHolder.trim().length > 2 &&
    bankName.trim().length > 1 &&
    accountNumber.trim().length > 5 &&
    accountNumber === confirmAccountNumber &&
    ifscCode.trim().length > 5;

  return (
    <>
    <div className="flex flex-col gap-[16px] w-full">
      {/* Investment Calculator */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[16px]">
        <div className="text-[16px] font-semibold text-[#111827]">Investment Calculator</div>
        
        <div className="flex flex-col gap-[8px]">
          <div className="text-[13px] text-[#6B7280]">Investment Amount</div>
          <div className="text-[24px] font-bold text-[#EB6601]">{investmentAmount}L AED</div>
          <div className="flex justify-between text-[11px] text-[#9CA3AF]">
            <span>Range: 10L AED &rarr; 50L AED</span>
          </div>
          {/* Slider track */}
          <div className="mt-[4px] relative w-full h-[6px] bg-[#E5E7EB] rounded-full">
            <div className="absolute left-0 top-0 h-full bg-[#F97316] rounded-l-full" style={{ width: `${((investmentAmount - 10) / 40) * 100}%` }}></div>
            <input
              type="range"
              min="10"
              max="50"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              style={{ zIndex: 5 }}
            />
            <div className="absolute top-1/2 -translate-y-1/2 w-[16px] h-[16px] bg-white border-[3px] border-[#F97316] rounded-full shadow-sm pointer-events-none" style={{ left: `calc(${((investmentAmount - 10) / 40) * 100}% - 8px)` }}></div>
          </div>
        </div>

        {/* Your Ownership */}
        <div className="bg-[#F3F4F6] rounded-lg p-[16px] flex flex-col gap-[4px]">
          <div className="text-[13px] text-[#4B5563]">Your Ownership</div>
          <div className="text-[20px] font-semibold text-[#1F2937]">{ownership}%</div>
        </div>

        {/* Returns Grid */}
        <div className="flex gap-[12px]">
          <div className="flex-1 bg-[#FFF5F0] rounded-lg p-[16px] flex flex-col gap-[4px] border border-[#FFDED1]">
            <div className="text-[13px] text-[#4B5563]">Annual Return</div>
            <div className="text-[20px] font-bold text-[#EB6601]">{annualReturn}K AED</div>
            <div className="text-[11px] text-[#6B7280]">{scenarioYield[scenario]} yield</div>
          </div>
          <div className="flex-1 bg-[#EEF2FF] rounded-lg p-[16px] flex flex-col gap-[4px] border border-[#E0E7FF]">
            <div className="text-[13px] text-[#4B5563]">Quarterly Distribut...</div>
            <div className="text-[20px] font-bold text-[#EB6601]">{quarterlyDistribution}K AED</div>
            <div className="text-[11px] text-[#6B7280]">Every 3 Months</div>
          </div>
        </div>

        {/* Scenario Analysis */}
        <div className="flex flex-col gap-[12px]">
          <div className="text-[13px] font-medium text-[#374151]">Scenario Analysis</div>
          <div className="flex gap-[8px]">
            {(["Bear", "Base", "Bull"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setScenario(s)}
                className={`flex-1 rounded-[6px] py-[8px] flex flex-col items-center justify-center cursor-pointer transition-colors ${
                  scenario === s
                    ? "bg-[#EB6601] text-white mb-2"
                    : "bg-[#F9FAFB] text-[#374151] border border-[#E5E7EB] mb-2 hover:border-[#EB6601]"
                }`}
              >
                <div className="text-[11px] opacity-80">{s} Case</div>
                <div className="text-[14px] font-bold">{scenarioYield[s]}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-[12px] mt-[4px]">
          <button
            onClick={openFlow}
            className="w-full bg-[#EB6601] text-white font-medium text-[15px] py-[12px] rounded-[8px] hover:bg-[#d85e01] transition-colors"
          >
            Review Commitment
          </button>
          <button className="w-full bg-white text-[#374151] font-medium text-[15px] py-[12px] rounded-[8px] border border-[#E5E7EB] hover:bg-slate-50 transition-colors">
            Add to Watchlist
          </button>
        </div>

        {/* Min Investment / Gross Yield */}
        <div className="flex justify-between items-center pt-[16px] border-t border-[#F3F4F6] mt-[4px]">
          <div className="flex flex-col gap-[2px]">
            <div className="text-[11px] text-[#6B7280]">Min Investment</div>
            <div className="text-[13px] font-semibold text-[#111827]">30L AED</div>
          </div>
          <div className="flex flex-col gap-[2px] items-end">
            <div className="text-[11px] text-[#6B7280]">Gross Yield</div>
            <div className="text-[13px] font-semibold text-[#16A34A]">9.1%</div>
          </div>
        </div>
      </div>

      {/* Funding Status */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[16px]">
        <div className="text-[16px] font-semibold text-[#111827]">Funding Status</div>
        
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-between items-center">
            <div className="text-[14px] font-semibold text-[#111827]">65% Funded</div>
            <div className="text-[12px] text-[#6B7280]">12 / 25 Investors</div>
          </div>
          <div className="w-full h-[6px] bg-[#E5E7EB] rounded-full overflow-hidden">
            <div className="h-full bg-[#16A34A] w-[65%] rounded-full"></div>
          </div>
        </div>

        <div className="flex gap-[12px]">
          <div className="flex-1 bg-[#FEF2F2] rounded-lg p-[12px] flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] rounded-full bg-[#FCA5A5] flex items-center justify-center flex-shrink-0">
              <svg className="w-[16px] h-[16px] text-[#991B1B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="text-[11px] text-[#6B7280]">Remaining Slots</div>
              <div className="text-[13px] font-bold text-[#111827]">13 Investors</div>
            </div>
          </div>
          <div className="flex-1 bg-[#EEF2FF] rounded-lg p-[12px] flex items-center gap-[12px]">
            <div className="w-[32px] h-[32px] rounded-full bg-[#EB6601] flex items-center justify-center flex-shrink-0">
              <svg className="w-[16px] h-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="text-[11px] text-[#6B7280]">Time Remaining</div>
              <div className="text-[13px] font-bold text-[#111827]">21 Days</div>
            </div>
          </div>
        </div>

        <div className="bg-[#F0FDFA] rounded-lg p-[12px] flex items-center gap-[12px] border border-[#CCFBF1]">
          <div className="w-[32px] h-[32px] rounded-full bg-[#EB6601] flex items-center justify-center flex-shrink-0">
            <svg className="w-[16px] h-[16px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="text-[11px] text-[#6B7280]">Funding Velocity</div>
            <div className="text-[13px] font-bold text-[#111827]">~5.6% / day</div>
          </div>
        </div>

        <div className="bg-[#FFF7ED] rounded-lg p-[12px] flex gap-[12px] border border-[#FFEDD5]">
          <svg className="w-[20px] h-[20px] text-[#EA580C] mt-[2px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="flex flex-col">
            <div className="text-[13px] font-medium text-[#EA580C]">High Demand</div>
            <div className="text-[11px] text-[#9A3412] mt-[2px]">Only 13 slots left. Property expected to close early.</div>
          </div>
        </div>
      </div>

      {/* Property Activity */}
      <div className="bg-white rounded-[12px] p-[24px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <div className="text-[16px] font-semibold text-[#1F2937]">Property Activity</div>
          <button className="text-[13px] text-[#EB6601] font-medium hover:underline">View All Activity</button>
        </div>
        
        <div className="flex flex-col gap-[16px] relative">
          <div className="absolute left-[15px] top-[16px] bottom-[16px] w-[2px]" style={{ backgroundColor: "rgba(31,41,55,0.1)" }}></div>
          
          {[
            { title: "Yield Updated", desc: "Downtown Office SPV yield increased to 8.2%", time: "2 hours ago", iconColor: "#277079", bgColor: "rgba(39,112,121,0.1)", icon: "yield" },
            { title: "New Investor Joined", desc: "3 new commitments totaling ₹60L", time: "5 hours ago", iconColor: "#277079", bgColor: "rgba(39,112,121,0.1)", icon: "user" },
            { title: "Document Uploaded", desc: "Q4 Financial Report now available", time: "1 day ago", iconColor: "#277079", bgColor: "rgba(39,112,121,0.1)", icon: "doc" },
            { title: "Funding Milestone", desc: "75% funding target achieved", time: "2 days ago", iconColor: "#277079", bgColor: "rgba(39,112,121,0.1)", icon: "target" },
            { title: "Lease Signed", desc: "New tenant secured - 3 year contract", time: "3 days ago", iconColor: "#277079", bgColor: "rgba(39,112,121,0.1)", icon: "doc" }
          ].map((item, i) => (
            <div key={i} className="flex gap-[16px] relative z-10">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0 text-white border-2 border-white shadow-sm" style={{ backgroundColor: item.iconColor }}>
                {item.icon === "yield" && (
                  <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
                    <polyline points="13 2 13 9 20 9"/>
                  </svg>
                )}
                {item.icon === "user" && (
                  <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
                  </svg>
                )}
                {item.icon === "doc" && (
                  <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2-13H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2z"/>
                  </svg>
                )}
                {item.icon === "target" && (
                  <svg className="w-[20px] h-[20px]" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6" fill="#F9FAFB"/>
                    <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  </svg>
                )}
              </div>
              <div className="flex-1 rounded-[8px] p-[12px] border" style={{ backgroundColor: item.bgColor, borderColor: "rgba(31,41,55,0.1)" }}>
                <div className="flex justify-between items-start mb-[4px]">
                  <div className="text-[13px] font-semibold text-[#1F2937]">{item.title}</div>
                  <div className="text-[11px] text-[#6B7280]">{item.time}</div>
                </div>
                <div className="text-[12px] text-[#6B7280]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {isFlowOpen && (
      <div className="fixed inset-0 z-[120] bg-black/45 backdrop-blur-[1px] flex justify-end">
        <div className="w-full max-w-lg h-full overflow-y-auto bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {step === "success" ? (
            <div className="p-8 sm:p-10 flex flex-col gap-6">
              <div className="w-16 h-16 rounded-full bg-[#16A34A] mx-auto flex items-center justify-center text-white text-3xl">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-2xl text-gray-900 font-semibold mb-2">Investment Confirmed!</div>
                <div className="text-sm text-gray-500 max-w-[80%] mx-auto">Your investment position has been successfully secured.</div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-[#F9FAFB] p-5 flex flex-col gap-4">
                <div className="text-base text-gray-900 font-semibold">Downtown Office SPV</div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Investment</div>
                    <div className="font-semibold text-[#EB6601]">{investmentAmount}L AED</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Ownership</div>
                    <div className="font-semibold text-gray-900">{ownership}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Next Distribution</div>
                    <div className="font-semibold text-[#16A34A]">Apr 15</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 text-center flex flex-col gap-1">
                  <div className="text-xs text-gray-500">Projected Annual Income</div>
                  <div className="text-2xl font-bold text-[#EB6601]">{(annualReturn / 100).toFixed(1)}L AED</div>
                  <div className="text-xs text-gray-500">{scenarioYield[scenario]} net yield</div>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="text-sm text-gray-900 font-semibold mb-3">What Happens Next?</div>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2"><span className="font-semibold text-[#EB6601]">1.</span> <span>Investment confirmation email within 24 hours.</span></div>
                  <div className="flex items-start gap-2"><span className="font-semibold text-[#EB6601]">2.</span> <span>Quarterly distributions from Apr 15, 2026.</span></div>
                  <div className="flex items-start gap-2"><span className="font-semibold text-[#EB6601]">3.</span> <span>Real-time portfolio tracking enabled.</span></div>
                </div>
              </div>

              <div className="flex justify-between gap-3 pt-4">
                <button onClick={closeFlow} className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg border border-[#E5E7EB] text-[#374151] bg-white hover:bg-slate-50 transition-colors">View Portfolio</button>
                <button onClick={closeFlow} className="flex-1 px-4 py-2.5 text-sm font-medium rounded-lg bg-[#EB6601] text-white hover:bg-[#d85e01] transition-colors">Go to Dashboard</button>
              </div>
            </div>
          ) : (
            <>
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div className="text-lg font-semibold text-gray-900">Review Commitment</div>
                <button onClick={closeFlow} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 flex flex-col gap-6">
                {/* Stepper */}
                <div className="flex items-center gap-4">
                  {[1, 2, 3, 4].map((s) => {
                    const isActive = s === step;
                    const isCompleted = s < step;
                    
                    if (isActive) {
                      return (
                        <div key={s} className="flex-1 rounded-full border border-[#EB6601]/20 bg-[#FFF5F0] p-1 flex items-center gap-3 pr-4">
                          <div className="w-8 h-8 rounded text-white bg-[#EB6601] flex items-center justify-center flex-shrink-0">
                            {s === 1 && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <circle cx="12" cy="12" r="8" strokeWidth={2} />
                                <circle cx="12" cy="12" r="3" fill="currentColor" />
                              </svg>
                            )}
                            {s === 2 && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            )}
                            {s === 3 && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11m-8-11v11m-4-11v11m8-11v11" />
                              </svg>
                            )}
                            {s === 4 && (
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                              </svg>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-medium text-[#EB6601]">Step {s}/4</span>
                            <span className="text-xs font-semibold text-gray-900">
                              {s === 1 && "Amount"}
                              {s === 2 && "Documents"}
                              {s === 3 && "Bank Info"}
                              {s === 4 && "Final Review"}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    
                    return (
                      <div key={s} className={`w-10 h-10 rounded flex items-center justify-center flex-shrink-0 ${isCompleted ? "bg-[#EB6601] text-white" : "bg-gray-100 text-gray-400"}`}>
                        {isCompleted ? (
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-sm font-semibold">{s}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {step === 1 && (
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Investment Details</h3>
                      <div className="bg-[#F9FAFB] rounded-xl p-4 border border-gray-200 flex justify-between items-center">
                        <div>
                          <div className="text-sm font-semibold text-gray-900">Downtown Office SPV</div>
                          <div className="text-xs text-gray-500">Downtown Dubai, Dubai</div>
                        </div>
                        <div className="bg-[#F97316] text-white px-3 py-1 rounded-full text-xs font-semibold">9.1% Yield</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <h3 className="text-sm font-semibold text-gray-900">Investment Amount</h3>
                        <div className="text-lg font-bold text-[#EB6601]">{investmentAmount}L AED</div>
                      </div>
                      <input
                        type="range"
                        min={10}
                        max={50}
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#F97316]"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>10L AED</span>
                        <span>50L AED</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-gray-200 p-4">
                        <div className="text-xs text-gray-600 mb-2">Your Ownership</div>
                        <div className="text-xl font-bold text-[#EB6601]">{ownership}%</div>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4">
                        <div className="text-xs text-gray-600 mb-2">Annual Return</div>
                        <div className="text-xl font-bold text-[#F97316]">{annualReturn}k AED</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Scenario Analysis</h3>
                      <div className="grid grid-cols-3 gap-3">
                        {(["Bear", "Base", "Bull"] as const).map((s) => (
                          <button
                            key={s}
                            onClick={() => setScenario(s)}
                            className={`rounded-xl py-3 border text-center transition-colors ${scenario === s ? "bg-[#EB6601] text-white border-[#EB6601]" : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"}`}
                          >
                            <div className="text-xs mb-1">{s} Case</div>
                            <div className="text-sm font-bold">{scenarioYield[s]}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Investment Documents</h3>
                      <div className="rounded-xl border border-gray-200 bg-[#F9FAFB] overflow-hidden">
                        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center bg-white">
                          <div className="text-sm font-semibold text-gray-900">SPV Agreement</div>
                          <div className="text-xs text-gray-500">Page 1 of 12</div>
                        </div>
                        <div className="m-4 h-48 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-sm text-gray-400">
                          Document Preview
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Digital Signature</h3>
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <button onClick={() => setSignatureMode("type")} className={`rounded-lg py-2 border text-sm font-medium transition-colors ${signatureMode === "type" ? "bg-[#FFF5F0] border-[#EB6601] text-[#EB6601]" : "bg-white border-gray-200 text-gray-600"}`}>Type Name</button>
                        <button onClick={() => setSignatureMode("draw")} className={`rounded-lg py-2 border text-sm font-medium transition-colors ${signatureMode === "draw" ? "bg-[#FFF5F0] border-[#EB6601] text-[#EB6601]" : "bg-white border-gray-200 text-gray-600"}`}>Draw Signature</button>
                      </div>

                      {signatureMode === "type" ? (
                        <input
                          value={typedSignature}
                          onChange={(e) => setTypedSignature(e.target.value)}
                          placeholder="Type your full name"
                          className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#EB6601] focus:ring-1 focus:ring-[#EB6601] transition-all"
                        />
                      ) : (
                        <div className="h-32 rounded-lg border border-dashed border-gray-300 bg-white flex items-center justify-center text-sm text-gray-400">
                          Draw your signature here
                        </div>
                      )}
                    </div>

                    <label className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#EB6601] focus:ring-[#EB6601]"
                      />
                      <span className="text-xs text-gray-600 leading-relaxed">I confirm that I have read and agree to the investment terms, fee structure, and risk disclosures.</span>
                    </label>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Bank Verification</h3>
                      
                      {!isBankVerified ? (
                        <div className="flex flex-col gap-4">
                          <div className="rounded-lg border border-[#FFEDD5] bg-[#FFF7ED] p-3">
                            <div className="text-xs font-semibold text-[#EA580C]">Secure Verification Process</div>
                            <div className="text-[11px] text-gray-600 mt-1">A ₹100 verification transfer will be initiated and refunded within 24 hours.</div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                              <label className="text-xs font-medium text-gray-700 mb-1.5 block">Account Holder Name</label>
                              <input value={accountHolder} onChange={(e) => setAccountHolder(e.target.value)} placeholder="John Doe" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#EB6601] focus:ring-1 focus:ring-[#EB6601] outline-none" />
                            </div>
                            <div className="col-span-1">
                              <label className="text-xs font-medium text-gray-700 mb-1.5 block">Bank Name</label>
                              <input value={bankName} onChange={(e) => setBankName(e.target.value)} placeholder="HDFC Bank" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#EB6601] focus:ring-1 focus:ring-[#EB6601] outline-none" />
                            </div>
                            <div className="col-span-1">
                              <label className="text-xs font-medium text-gray-700 mb-1.5 block">Account Number</label>
                              <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="0000 0000 0000" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#EB6601] focus:ring-1 focus:ring-[#EB6601] outline-none" />
                            </div>
                            <div className="col-span-1">
                              <label className="text-xs font-medium text-gray-700 mb-1.5 block">Confirm Account Number</label>
                              <input value={confirmAccountNumber} onChange={(e) => setConfirmAccountNumber(e.target.value)} placeholder="0000 0000 0000" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#EB6601] focus:ring-1 focus:ring-[#EB6601] outline-none" />
                            </div>
                            <div className="col-span-2">
                              <label className="text-xs font-medium text-gray-700 mb-1.5 block">IFSC Code</label>
                              <input value={ifscCode} onChange={(e) => setIfscCode(e.target.value.toUpperCase())} placeholder="HDFC0001234" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-[#EB6601] focus:ring-1 focus:ring-[#EB6601] outline-none" />
                            </div>
                          </div>
                          
                          <button
                            onClick={() => setIsBankVerified(true)}
                            disabled={!canVerifyBank}
                            className="w-full rounded-lg bg-[#EB6601] text-white py-2.5 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d85e01] transition-colors"
                          >
                            Verify With 10 AED
                          </button>
                        </div>
                      ) : (
                        <div className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] p-5 flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-[#16A34A] flex items-center justify-center text-white mb-3">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="text-lg font-semibold text-gray-900">Bank Account Verified!</div>
                          <div className="text-xs text-gray-600 mb-4 text-center">Your bank account has been successfully verified.</div>
                          
                          <div className="w-full rounded-lg bg-white p-3 border border-gray-200 flex flex-col gap-2">
                            <div className="flex justify-between text-xs"><span className="text-gray-500">Bank Name</span><span className="font-medium text-gray-900">{bankName}</span></div>
                            <div className="flex justify-between text-xs"><span className="text-gray-500">Account Holder</span><span className="font-medium text-gray-900">{accountHolder}</span></div>
                            <div className="flex justify-between text-xs"><span className="text-gray-500">Account Number</span><span className="font-medium text-gray-900">****{accountNumber.slice(-4)}</span></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="flex flex-col gap-6">
                    {/* Investment Summary */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Investment Summary</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Property</div>
                          <div className="text-sm font-medium text-gray-900">Downtown Office SPV</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Location</div>
                          <div className="text-sm font-medium text-gray-900">Downtown Dubai, Dubai</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Investment Amount</div>
                          <div className="text-sm font-semibold text-[#EB6601]">{investmentAmount}L AED</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Ownership</div>
                          <div className="text-sm font-medium text-gray-900">{ownership}%</div>
                        </div>
                      </div>
                    </div>

                    {/* Returns Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-gray-200 p-4">
                        <div className="text-xs text-gray-600 mb-2">Projected Annual Return</div>
                        <div className="text-xl font-bold text-[#F97316]">{(annualReturn / 100).toFixed(1)}L AED</div>
                        <div className="text-xs text-gray-500 mt-1">{scenarioYield[scenario]} net yield</div>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4">
                        <div className="text-xs text-gray-600 mb-2">Projected Yield</div>
                        <div className="text-xl font-bold text-[#16A34A]">{Math.round(Number(quarterlyDistribution))}k AED</div>
                        <div className="text-xs text-gray-500 mt-1">Every 3 months</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-3 border-y border-gray-100">
                      <div className="text-xs text-gray-500">Next Distribution Date</div>
                      <div className="text-xs font-bold text-[#EA580C]">APR 15</div>
                    </div>

                    {/* Investment Breakdown */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Investment Breakdown</h3>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Principal Amount</span>
                          <span className="text-xs font-medium text-gray-900">{investmentAmount}L AED</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Acquisition Fee (3%)</span>
                          <span className="text-xs font-medium text-gray-900">{(investmentAmount * 0.03).toFixed(2)}L AED</span>
                        </div>
                        <div className="bg-gray-100 h-px w-full my-1"></div>
                        <div className="flex justify-between items-center bg-[#F0FDFA] p-3 rounded-lg border border-[#CCFBF1]">
                          <span className="text-sm font-medium text-gray-700">Total Payable</span>
                          <span className="text-sm font-bold text-[#EB6601]">{(investmentAmount * 1.03).toFixed(2)}L AED</span>
                        </div>
                      </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F0FDFA] border border-[#CCFBF1] rounded-lg p-3">
                        <div className="text-xs font-semibold text-[#EB6601] mb-1">Secure Transaction</div>
                        <div className="text-[10px] text-gray-600 leading-relaxed">Your payment is processed through encrypted channels. All transactions are monitored and comply with RBI regulations.</div>
                      </div>
                      <div className="bg-[#FFF7ED] border border-[#FFEDD5] rounded-lg p-3">
                        <div className="text-xs font-semibold text-[#EA580C] mb-1">Investment Disclaimer</div>
                        <div className="text-[10px] text-gray-600 leading-relaxed">Real estate investments carry inherent risks. Past performance does not guarantee future returns. Please invest responsibly.</div>
                      </div>
                    </div>

                    {/* Verification Checklist */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Verification Checklist</h3>
                      <div className="flex flex-col gap-2">
                        <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-lg p-3 flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-gray-900">Documents Signed</div>
                            <div className="text-[11px] text-gray-600">SPV Agreement electronically signed</div>
                          </div>
                        </div>
                        <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-lg p-3 flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-gray-900">Bank Account Verified</div>
                            <div className="text-[11px] text-gray-600">HDFC Bank ****6789</div>
                          </div>
                        </div>
                        <div className="bg-[#FFF7ED] border border-[#FFEDD5] rounded-lg p-3 flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#EA580C] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.642 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.358-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-gray-900">Investment Confirmation Pending</div>
                            <div className="text-[11px] text-gray-600">Awaiting final payment confirmation</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">Payment Method</h3>
                      <div className="flex flex-col gap-2">
                        <label className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer ${paymentMethod === "upi" ? "border-[#EB6601] shadow-sm relative overflow-hidden" : "border-gray-200"}`}>
                          {paymentMethod === "upi" && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EB6601]"></div>}
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${paymentMethod === "upi" ? "border-[#EB6601]" : "border-gray-300"}`}>
                            {paymentMethod === "upi" && <div className="w-2 h-2 rounded-full bg-[#EB6601]"></div>}
                          </div>
                          <div className="text-gray-500">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-900">UPI Instant Transfer</div>
                            <div className="text-[11px] text-gray-500">Instant confirmation • Recommended</div>
                          </div>
                          {paymentMethod === "upi" && (
                            <div className="bg-[#EB6601] text-white text-[10px] px-2 py-0.5 rounded-full font-medium">Fastest</div>
                          )}
                        </label>

                        <label className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer ${paymentMethod === "bank" ? "border-[#EB6601] shadow-sm relative overflow-hidden" : "border-gray-200"}`}>
                          {paymentMethod === "bank" && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EB6601]"></div>}
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${paymentMethod === "bank" ? "border-[#EB6601]" : "border-gray-300"}`}>
                            {paymentMethod === "bank" && <div className="w-2 h-2 rounded-full bg-[#EB6601]"></div>}
                          </div>
                          <div className="text-gray-500">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-900">Bank Transfer (NEFT/RTGS)</div>
                            <div className="text-[11px] text-gray-500">Processing time: 2-4 hours</div>
                          </div>
                        </label>

                        <label className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer ${paymentMethod === "split" ? "border-[#EB6601] shadow-sm relative overflow-hidden" : "border-gray-200"}`}>
                          {paymentMethod === "split" && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#EB6601]"></div>}
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${paymentMethod === "split" ? "border-[#EB6601]" : "border-gray-300"}`}>
                            {paymentMethod === "split" && <div className="w-2 h-2 rounded-full bg-[#EB6601]"></div>}
                          </div>
                          <div className="text-gray-500">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-gray-900">Split Payment</div>
                            <div className="text-[11px] text-gray-500">Pay in 2 installments (50% each)</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-between gap-4 mt-auto z-10">
                {step === 1 ? (
                  <button onClick={closeFlow} className="px-5 py-2 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    Cancel Investment
                  </button>
                ) : (
                  <button onClick={() => setStep((step - 1) as ReviewFlowStep)} className="px-5 py-2 text-sm font-medium rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                    Back
                  </button>
                )}
                
                {step === 1 && (
                  <button onClick={() => setStep(2)} className="px-5 py-2 text-sm font-medium rounded-lg bg-[#EB6601] text-white hover:bg-[#d85e01] transition-colors">
                    Review Documents
                  </button>
                )}
                {step === 2 && (
                  <button 
                    onClick={() => setStep(3)} 
                    className="px-5 py-2 text-sm font-medium rounded-lg bg-[#EB6601] text-white hover:bg-[#d85e01] transition-colors"
                  >
                    Sign & Continue
                  </button>
                )}
                {step === 3 && (
                  <button 
                    onClick={() => {
                      if (!isBankVerified) {
                        setAccountHolder((prev) => prev || "Demo Investor");
                        setBankName((prev) => prev || "Demo Bank");
                        setAccountNumber((prev) => prev || "1234567890");
                        setConfirmAccountNumber((prev) => prev || "1234567890");
                        setIfscCode((prev) => prev || "DEMO0001234");
                        setIsBankVerified(true);
                      }
                      setStep(4);
                    }} 
                    className="px-5 py-2 text-sm font-medium rounded-lg bg-[#EB6601] text-white hover:bg-[#d85e01] transition-colors"
                  >
                    Continue to Review
                  </button>
                )}
                {step === 4 && (
                  <button onClick={() => setStep("success")} className="px-5 py-2 text-sm font-medium rounded-lg bg-[#EB6601] text-white hover:bg-[#d85e01] transition-colors">
                    Confirm Investment
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    )}
    </>
  );
}
