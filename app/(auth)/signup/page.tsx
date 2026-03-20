"use client";

import React, { useState } from 'react';
import { BarChart3, ShieldCheck, Banknote, CheckSquare, Clock, Check, Mail, Phone ,IdCard, MapPin, Camera , CheckCircle2,   FileText, Wallet} from 'lucide-react';
import { useRouter } from "next/navigation";
const Step1 = ({ nextStep }: any) => {
  
  return (
    <div className="min-h-screen bg-[#113032] flex p-4 lg:p-6 overflow-hidden font-sans relative">
      <div 
        className="w-full h-screen lg:w-[50%] max-w-2xl bg-white rounded-[2rem] p-8 relative z-10 shadow-2xl flex flex-col justify-between"
        style={{ minHeight: 'calc(100vh - 3rem)' }}
      >
        <div>
          <img src="/logo.png" alt="PrimeProp Logo" className="h-8 mb-16" />

          <h1 className="text-[48px] font-bold text-[#1e293b] leading-tight mb-3">
            Welcome to PrimeProp
          </h1>
          <p className="text-gray-500 text-lg mb-10 max-w-md">
            Invest in premium Dubai real estate opportunities with transparent
            passive income.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Start With Your Email
            </label>
            <input
              type="email"
              placeholder="John@investor.com"
              className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[#277079] focus:ring-1 focus:ring-[#277079] transition-colors mb-6 text-gray-800 placeholder-gray-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-[#277079] hover:bg-[#1f5a61] text-white font-medium py-4 rounded-xl transition-colors"
            >
              Continue
            </button>
          </form>

          <div className="flex items-center gap-2 mt-4">
            <CheckSquare className="w-4 h-4 text-[#277079]" fill="#277079" stroke="white" />
            <span className="text-sm text-gray-500 font-medium">
              We'll send a verification code to secure your account.
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12 p-6 rounded-2xl border border-gray-100 bg-gray-50/50">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#277079]/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#277079]" />
              </div>
              <span className="text-[11px] font-semibold text-gray-700">Market Data</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#277079]/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#277079]" />
              </div>
              <span className="text-[11px] font-semibold text-gray-700">Secure Assets</span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#277079]/10 flex items-center justify-center">
                <Banknote className="w-5 h-5 text-[#277079]" />
              </div>
              <span className="text-[11px] font-semibold text-gray-700">Monthly Payouts</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-400 font-medium">
            © 2026 PrimeProp Real Estate Investments. All rights reserved.
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none z-0">
        <img 
          src="/signup-bg.svg" 
          alt="Cityscape Background" 
          className="w-full h-full object-contain object-bottom-right"
        />
      </div>
    </div>
  );
};

const Step2 = ({ nextStep }: any) => {
  return (
    <div className="min-h-screen bg-[#fafafb] flex flex-col relative font-sans">
      <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
        <img src="/logo.png" alt="PrimeProp Logo" className="h-8" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[640px] mx-auto px-4 py-12">
        
        {/* Top Verification Info Card */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 mb-6 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-[1.35rem] font-bold text-[#1e293b] mb-1.5">Verify Your Identity</h2>
            <p className="text-[13px] text-gray-500">
              Verification Code Sent to <span className="font-semibold text-gray-700">johndoe@gmail.com</span>
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 flex items-center justify-center mb-1">
              <svg className="w-full h-full transform  " viewBox="0 0 36 36">
                <path 
                  className="text-gray-100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                />
                <path 
                  className="text-[#277079]" 
                  strokeDasharray="40, 100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-[#277079]">40%</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium">Step 2 of 6</span>
          </div>
        </div>

        {/* Main Code Entry Card */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center">
          <h2 className="text-[1.35rem] font-bold text-[#1e293b] mb-2">Enter the Verification Code</h2>
          <p className="text-[13px] text-gray-500 mb-10">Lorem ipsum dolor sit amet consectetur</p>

          <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="flex flex-col items-center w-full">
            <div className="flex gap-4 justify-center mb-10">
              {[1, 2, 3, 4].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  placeholder="0"
                  className="w-16 h-16 text-center text-xl font-semibold border border-gray-100 bg-[#fafafb] rounded-[0.85rem] focus:outline-none focus:border-[#277079] focus:ring-1 focus:ring-[#277079] focus:bg-white transition-colors placeholder-gray-300 text-gray-800"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full max-w-[340px] bg-[#277079] hover:bg-[#1f5a61] text-white font-medium py-3.5 rounded-xl transition-colors mb-8"
            >
              Verify
            </button>
          </form>

          <div className="flex flex-col gap-4 text-[13px]">
            <div className="flex items-center justify-center gap-1.5 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Code expires in <span className="font-semibold text-[#277079]">2:30</span></span>
            </div>
            <p className="text-gray-500">
              Didn't Receive? <button className="font-semibold text-[#277079] hover:underline">Resend Code</button>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 w-full text-center">
        <p className="text-[13px] text-gray-400 font-medium">
          © 2026 PrimeProp Real Estate Investments. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const Step4 = ({ nextStep, prevStep }: any) => {
  return (
    <div className="min-h-screen bg-[#fafafb] flex flex-col relative font-sans">
      <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
        <img src="/logo.png" alt="PrimeProp Logo" className="h-8" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[760px] mx-auto px-4 py-12 mt-12">
        
        {/* Top Review Info Card */}
        <div className="bg-white rounded-[1.25rem] p-6 lg:p-8 mb-5 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-[1.35rem] font-bold text-[#1e293b] mb-1.5">Review Your Information</h2>
            <p className="text-[13px] text-gray-500">
              Please verify your details before final submission.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 flex items-center justify-center mb-1">
              <svg className="w-full h-full transform  " viewBox="0 0 36 36">
                <path 
                  className="text-gray-100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                />
                <path 
                  className="text-[#277079]" 
                  strokeDasharray="80, 100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-[#277079]">80%</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium">Step 4 of 6</span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-[1.25rem] p-6 lg:p-8 mb-5 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-[3.25rem] h-[3.25rem] rounded-full overflow-hidden bg-gray-200 shrink-0">
                <img src="https://ui-avatars.com/api/?name=John+Doe&background=random" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#277079] tracking-wider mb-0.5 uppercase">Investor Profile</p>
                <h3 className="text-xl font-bold text-[#1e293b]">John Doe</h3>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#fafafb] flex items-center justify-center border border-gray-100">
                  <Phone className="w-3.5 h-3.5 text-[#277079]" />
                </div>
                <span className="text-[13px] font-medium text-gray-700">+91 98XXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#fafafb] flex items-center justify-center border border-gray-100">
                  <Mail className="w-3.5 h-3.5 text-[#277079]" />
                </div>
                <span className="text-[13px] font-medium text-gray-700">+91 98XXXXXXXX</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
             <div className="flex-1 bg-[#277079]/[0.06] rounded-xl p-3.5 flex items-center gap-3">
               <div className="bg-[#277079] rounded-full p-[3px]">
                 <Check className="w-3 h-3 text-white" strokeWidth={3} />
               </div>
               <span className="text-[13px] font-medium text-[#277079]">Document Verified</span>
             </div>
             <div className="flex-1 bg-[#277079]/[0.06] rounded-xl p-3.5 flex items-center gap-3">
               <div className="bg-[#277079] rounded-full p-[3px]">
                 <Check className="w-3 h-3 text-white" strokeWidth={3} />
               </div>
               <span className="text-[13px] font-medium text-[#277079]">2FA Verified</span>
             </div>
          </div>
        </div>

        {/* Terms Card */}
        <div className="bg-white rounded-[1.25rem] p-6 lg:p-8 mb-5 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100">
           <h3 className="text-[14px] font-bold text-[#1e293b] mb-4">Platform Terms & Privacy Policy</h3>
           <hr className="border-gray-100 mb-5" />
           <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
             By investing through PrimeProp, you acknowledge that all investments carry risk, including potential loss of capital. Real estate investments are subject to market fluctuations, property-specific risks, and regulatory changes. Returns are not guaranteed and past performance does not indicate future results. PrimeProp acts as a platform facilitating investments and does not provide investment advice. You should consult with financial advisors before making investment decisions. All investments are subject to applicable securities laws and regulations.
           </p>
           <label className="flex items-center gap-3 cursor-pointer select-none">
             <input type="checkbox" className="w-[1.125rem] h-[1.125rem] rounded border-gray-200  accent-[#277079] focus:ring-[#277079] bg-white cursor-pointer" />
             <span className="text-[13px] font-medium text-gray-700">I agree to the platform terms and privacy policy.</span>
           </label>
        </div>

        {/* Actions Card */}
        <div className="bg-white rounded-[1.25rem] p-5 lg:px-8 lg:py-5 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 flex justify-between items-center">
          <button onClick={prevStep} className="px-6 py-2.5 border border-[#277079] text-[#277079] rounded-[0.5rem] font-medium hover:bg-[#277079]/5 transition-colors text-[13px]">
            Back
          </button>
          <button onClick={nextStep} className="px-6 py-2.5 bg-[#277079] text-white rounded-[0.5rem] font-medium hover:bg-[#1f5a61] transition-colors text-[13px]">
            Continue
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 w-full text-center">
        <p className="text-[13px] text-gray-400 font-medium">
          © 2026 PrimeProp Real Estate Investments. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const Step3 = ({ nextStep, prevStep }: any) => {
  return (
    <div className="min-h-screen bg-[#fafafb] flex flex-col relative font-sans">
      <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
        <img src="/logo.png" alt="PrimeProp Logo" className="h-8" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[760px] mx-auto px-4 py-12 mt-12">
        
        {/* Top Info Card */}
        <div className="bg-white rounded-[1.25rem] p-6 lg:p-8 mb-5 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-[1.35rem] font-bold text-[#1e293b] mb-1.5">Document Uploaded</h2>
            <p className="text-[13px] text-gray-500">
              All Document Must be Needed
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 flex items-center justify-center mb-1">
              <svg className="w-full h-full transform  " viewBox="0 0 36 36">
                <path 
                  className="text-gray-100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                />
                <path 
                  className="text-[#277079]" 
                  strokeDasharray="60, 100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-[#277079]">60%</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium">Step 3 of 6</span>
          </div>
        </div>

        {/* Main Upload Card */}
        <div className="bg-white rounded-[1.25rem] p-6 lg:p-8 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100">
          <h2 className="text-[1.35rem] font-bold text-[#1e293b] mb-1.5">Verify Your Identity Documents</h2>
          <p className="text-[13px] text-gray-500 mb-8">To comply with investment regulations we need 3 documents.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Passport */}
            <div className="border border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors text-center h-[150px]">
              <div className="w-10 h-10 rounded-full bg-[#277079]/10 flex items-center justify-center mb-3">
                <IdCard className="w-5 h-5 text-[#277079]" />
              </div>
              <h3 className="text-[14px] font-semibold text-[#1e293b] mb-1">Passport</h3>
              <p className="text-[12px] text-gray-400">Click to Upload</p>
            </div>

            {/* Address Proof */}
            <div className="border border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors text-center h-[150px]">
              <div className="w-10 h-10 rounded-full bg-[#277079]/10 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[#277079]" />
              </div>
              <h3 className="text-[14px] font-semibold text-[#1e293b] mb-1">Address Proof</h3>
              <p className="text-[12px] text-gray-400">Utility Bill or Statement</p>
            </div>

            {/* Selfie */}
            <div className="border border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors text-center h-[150px]">
              <div className="w-10 h-10 rounded-full bg-[#277079]/10 flex items-center justify-center mb-3">
                <Camera className="w-5 h-5 text-[#277079]" />
              </div>
              <h3 className="text-[14px] font-semibold text-[#1e293b] mb-1">Selfie</h3>
              <p className="text-[12px] text-gray-400">Take a Live Photo</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-[#eef2f4] rounded-xl p-4 flex justify-between items-center mb-8">
            <span className="text-[13px] font-medium text-[#1e293b]">Document Uploaded</span>
            <span className="text-[13px] font-bold text-[#1e293b]">0/3 Uploaded</span>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center pt-2">
            <button onClick={prevStep} className="px-6 py-2.5 border border-[#277079] text-[#277079] rounded-[0.5rem] font-medium hover:bg-[#277079]/5 transition-colors text-[13px]">
              Back
            </button>
            <button onClick={nextStep} className="px-6 py-2.5 bg-[#277079] text-white rounded-[0.5rem] font-medium hover:bg-[#1f5a61] transition-colors text-[13px]">
              Continue
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 w-full text-center">
        <p className="text-[13px] text-gray-400 font-medium">
          © 2026 PrimeProp Real Estate Investments. All rights reserved.
        </p>
      </div>
    </div>
  );
};
const Step5 = ({ nextStep, prevStep }: any) => {
  return (
    <div className="min-h-screen bg-[#fafafb] flex flex-col relative font-sans">
      <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
        <img src="/logo.png" alt="PrimeProp Logo" className="h-8" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[760px] mx-auto px-4 py-12 mt-12">
        
        {/* Top Info Card */}
        <div className="bg-white rounded-[1.25rem] p-6 lg:p-8 mb-5 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-[1.35rem] font-bold text-[#1e293b] mb-1.5">Your Investment Dashboard Awaits</h2>
            <p className="text-[13px] text-gray-500">
              Everything is set up. You're just moments away from managing your real estate portfolio with professional-grade tools.
            </p>
          </div>
          
          <div className="flex flex-col items-center shrink-0 ml-4">
            <div className="relative w-12 h-12 flex items-center justify-center mb-1">
              <svg className="w-full h-full transform " viewBox="0 0 36 36">
                <path 
                  className="text-gray-100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                />
                <path 
                  className="text-[#277079]" 
                  strokeDasharray="95, 100" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
              </svg>
              <span className="absolute text-[10px] font-bold text-[#277079]">95%</span>
            </div>
            <span className="text-[11px] text-gray-400 font-medium">Step 5 of 6</span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[1.25rem] p-6 lg:p-8 mb-5 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border bg-[#F8FAFC] border-gray-100 rounded-xl p-5">
              <p className="text-[12px] text-gray-500 mb-1">Investment</p>
              <p className="text-[1.35rem] font-bold text-[#277079]">
                ₹20L <span className="text-[13px] text-gray-400 font-normal">Invested</span>
              </p>
            </div>
            <div className="border bg-[#F8FAFC] border-gray-100 rounded-xl p-5">
              <p className="text-[12px] text-gray-500 mb-1">Yield</p>
              <p className="text-[1.35rem] font-bold text-[#277079]">6.4%</p>
            </div>
            <div className="border bg-[#F8FAFC] border-gray-100 rounded-xl p-5">
              <p className="text-[12px] text-gray-500 mb-1">Next Payout</p>
              <p className="text-[1.35rem] font-bold text-[#277079]">
                Apr 15 <span className="text-[13px] text-gray-400 font-normal">(₹39K)</span>
              </p>
            </div>
          </div>

          {/* Features List */}
          <div className="border border-gray-100 rounded-xl p-6 mb-6 bg-[#F8FAFC] ">
            <h3 className="text-[13px] font-bold text-[#1e293b] mb-5">Platform Features</h3>
            
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-[#277079]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#1e293b] mb-0.5">Track Portfolio</h4>
                  <p className="text-[12px] text-gray-500">Real-time appreciation and rent tracking for all your assets.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#277079]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#1e293b] mb-0.5">Download Legal Docs</h4>
                  <p className="text-[12px] text-gray-500">Access your SPV agreements and title deeds instantly.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg border border-gray-200 bg-white flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5 text-[#277079]" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#1e293b] mb-0.5">Automated Payouts</h4>
                  <p className="text-[12px] text-gray-500">Earnings are credited directly to your bank account monthly.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[12px] text-gray-400">Finalizing your secure access node...</p>
        </div>

        {/* Actions Card */}
        <div className="bg-white rounded-[1.25rem] p-5 lg:px-8 lg:py-5 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 flex justify-between items-center">
          <button onClick={prevStep} className="px-6 py-2.5 border border-[#277079] text-[#277079] rounded-[0.5rem] font-medium hover:bg-[#277079]/5 transition-colors text-[13px]">
            Back
          </button>
          <button onClick={nextStep} className="px-6 py-2.5 bg-[#277079] text-white rounded-[0.5rem] font-medium hover:bg-[#1f5a61] transition-colors text-[13px]">
            Continue
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 w-full text-center">
        <p className="text-[13px] text-gray-400 font-medium">
          © 2026 PrimeProp Real Estate Investments. All rights reserved.
        </p>
      </div>
    </div>
  );
};

const Step6 = () => {
  const router = useRouter() 

  const handlesubmit = ()=>{
    router.push('/dashboard')
  }
  return (
    <div className="min-h-screen bg-[#fafafb] flex flex-col relative font-sans">
      <div className="absolute top-8 left-8 lg:top-12 lg:left-12">
        <img src="/logo.png" alt="PrimeProp Logo" className="h-8" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[600px] mx-auto px-4 py-12">
        
        {/* Main Success Card */}
        <div className="bg-white rounded-[1.25rem] p-8 lg:p-10 w-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-center text-center">
          
          {/* Success Icon */}
          <div className='bg-[#277079]/20 rounded-full w-20 h-20 flex items-center justify-center ' >
          <div className="w-16 h-16 bg-[#277079]  rounded-full flex items-center justify-center shadow-sm">
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>
          </div>

          <h2 className="text-[1.75rem] font-bold text-[#1e293b] mb-3">Welcome to PrimeProp!</h2>
          
          {/* Status Badge */}
          <div className="flex items-center gap-1.5 bg-[#277079]/[0.08] px-3.5 py-1.5 rounded-full mb-8">
            <CheckCircle2 className="w-4 h-4 text-[#277079]" fill="#277079" stroke="white" />
            <span className="text-[11px] font-bold text-[#277079] tracking-wide">KYC Approved <span className="mx-1">•</span> Dashboard Unlocked</span>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 text-left">
            {/* Investment */}
            <div className="border bg-[#F8FAFC] border-gray-100 rounded-[0.75rem] p-5  ">
              <p className="text-[12px] text-gray-500 mb-1">Investment</p>
              <p className="text-[1.5rem] font-bold text-[#277079]">
                ₹20L <span className="text-[13px] text-gray-400 font-normal">Invested</span>
              </p>
            </div>
            
            {/* Ownership */}
            <div className="border bg-[#F8FAFC] border-gray-100 rounded-[0.75rem] p-5  ">
              <p className="text-[12px] text-gray-500 mb-1">Ownership</p>
              <p className="text-[1.5rem] font-bold text-[#277079]">
                1%
              </p>
            </div>

            {/* Yield */}
            <div className="border bg-[#F8FAFC] border-gray-100 rounded-[0.75rem] p-5 ">
              <p className="text-[12px] text-gray-500 mb-1">Yield</p>
              <p className="text-[1.5rem] font-bold text-[#eb5f38]">
                6.4%
              </p>
            </div>

            {/* Next Payout */}
            <div className="border bg-[#F8FAFC] border-gray-100 rounded-[0.75rem] p-5 ">
              <p className="text-[12px] text-gray-500 mb-1">Next Payout</p>
              <p className="text-[1.5rem] font-bold text-[#eb5f38]">
                Apr 15 <span className="text-[13px] text-gray-400 font-normal">(₹39K)</span>
              </p>
            </div>
          </div>

          {/* Actions */}
          <button   onClick={handlesubmit}
  className="w-full bg-[#277079] hover:bg-[#1f5a61] text-white font-medium py-3.5 rounded-xl transition-colors mb-4 text-[14px]">
            Enter Dashboard
          </button>
          
          <button className="text-[#277079] font-semibold text-[13px] hover:underline">
            Skip Tour
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 w-full text-center">
        <p className="text-[13px] text-gray-400 font-medium">
          © 2026 PrimeProp Real Estate Investments. All rights reserved.
        </p>
      </div>
    </div>
  );
};
const StepPlaceholder = ({ step, prevStep, nextStep }: any) => (
  <div className="min-h-screen bg-[#fafafb] flex flex-col items-center justify-center p-4 font-sans relative">
    <div className="bg-white rounded-[1.25rem] p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col items-center text-center max-w-md w-full">
      <h2 className="text-3xl font-bold text-[#1e293b] mb-4">Step {step}</h2>
      <p className="text-gray-500 mb-8">This is a placeholder for onboarding step {step}.</p>
      <div className="flex gap-4">
        <button onClick={prevStep} className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 transition-colors">Back</button>
        {step < 6 && <button onClick={nextStep} className="px-6 py-3 bg-[#277079] text-white rounded-xl font-medium hover:bg-[#1f5a61] transition-colors">Continue</button>}
      </div>
    </div>
  </div>
);

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  switch (currentStep) {
    case 1:
      return <Step1 nextStep={nextStep} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} />;
    case 3: return <Step3 nextStep={nextStep} prevStep={prevStep} />
    case 4:return <Step4 nextStep={nextStep} prevStep={prevStep} />
    case 5:return <Step5 nextStep={nextStep} prevStep={prevStep} />
    case 6:
      return  <Step6   />
    default:
      return <Step1 nextStep={nextStep} />;
  }
}