export function DocumentsTab() {
  const renderDoc = (title: string, size: string) => (
    <div className="flex justify-between items-center bg-white border border-[#E5E7EB] rounded-[8px] p-[16px] flex-1 min-w-[300px]">
      <div className="flex gap-[12px] items-center">
        <svg className="w-[20px] h-[20px] text-[#0F766E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <div className="flex flex-col">
          <div className="text-[13px] font-semibold text-[#111827]">{title}</div>
          <div className="text-[11px] text-[#6B7280]">PDF • {size}</div>
        </div>
      </div>
      <button className="w-[32px] h-[32px] rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-gray-50 text-[#4B5563]">
        <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Investment Documents */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <div className="text-[18px] font-semibold text-[#111827]">Investment Documents</div>
          <button className="text-[13px] font-medium text-[#EB6601] hover:underline">Download All</button>
        </div>
        <div className="grid grid-cols-2 gap-[16px]">
          {renderDoc("SPV Agreement", "2.1 MB")}
          {renderDoc("Private Placement Memorandum", "4.8 MB")}
          {renderDoc("Subscription Form", "1.2 MB")}
          {renderDoc("Investment Summary", "890 KB")}
        </div>
      </div>

      {/* Compliance & Legal Documents */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[20px]">
        <div className="flex justify-between items-center">
          <div className="text-[18px] font-semibold text-[#111827]">Compliance & Legal Documents</div>
          <button className="text-[13px] font-medium text-[#EB6601] hover:underline">Download All</button>
        </div>
        <div className="grid grid-cols-2 gap-[16px]">
          {renderDoc("DFSA Registration Certificate", "2.1 MB")}
          {renderDoc("Risk Disclosure Statement", "4.8 MB")}
          {renderDoc("Q4 2025 Audit Report", "1.2 MB")}
          {renderDoc("Property Valuation Report", "890 KB")}
        </div>
      </div>

      {/* Status boxes */}
      <div className="flex gap-[16px]">
         <div className="flex-1 bg-[#FFF7ED] border border-[#FFEDD5] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
           <div className="text-[13px] font-semibold text-[#EA580C]">Important</div>
           <div className="text-[12px] text-[#4B5563] leading-relaxed">
             Please review all documents carefully before investing
           </div>
         </div>
         <div className="flex-1 bg-[#F0FDFA] border border-[#CCFBF1] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
           <div className="text-[13px] font-semibold text-[#0F766E]">Verified</div>
           <div className="text-[12px] text-[#4B5563] leading-relaxed">
             All documents are legally verified and DFSA compliant
           </div>
         </div>
         <div className="flex-1 bg-[#F0F9FF] border border-[#BAE6FD] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
           <div className="text-[13px] font-semibold text-[#0284C7]">Updated</div>
           <div className="text-[12px] text-[#4B5563] leading-relaxed">
             Documents last updated on March 1, 2026
           </div>
         </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-white rounded-[8px] p-[16px] border border-[#E5E7EB] flex flex-col gap-[12px]">
        <div className="text-[14px] font-semibold text-[#111827]">Legal Disclaimer</div>
        <div className="text-[12px] text-[#6B7280] leading-relaxed">
          These documents are provided for informational purposes only and do not constitute an offer to sell or a solicitation of an offer to buy any securities. Investment in this property carries risks, including potential loss of principal. All investors must be accredited investors and complete the necessary KYC and AML verification. Please consult with your financial, tax, and legal advisors before making any investment decision.
        </div>
      </div>
    </div>
  );
}