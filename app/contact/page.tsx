'use client';
import React from 'react';
import { Header, Footer, Newsletter, HeroBadge, HeroBackground, FAQ } from '../components/shared';
import Navbar from '../components/shared/Navbar';
import PrimeFAQ from '../components/landing/PrimeFAQ';

export default function ContactPage() {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-white">
            <Navbar  activeLink="Home" />
        <div className="min-h-screen text-[#111111] overflow-x-hidden" style={{ fontFamily: '"Figtree", sans-serif' }}>
          
          {/* Hero Section */}
          <div className="relative">
            <HeroBackground />

            {/* Hero Content */}
            <section className="relative z-10 text-center pt-[70px] pb-[100px]">
              <div className="mb-[20px] flex justify-center">
                <HeroBadge 
                  text="Get In Touch" 
                  icon={
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6500" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  }
                />
              </div>
              
              <div className=" text-[35px] md:text-[52px] font-bold text-[#111111] leading-[1.15] mb-[18px] pt-10">
                Let's Talk About Your<br />Lorem Doe Ipsum
              </div>
              
              <p className="text-[13px] font-normal text-[#666666] leading-[22px]">
                We're here to answer your questions, explore ideas,<br />and start meaningful conversations.
              </p>
            </section>
          </div>

          {/* Contact Section */}
          <div className="w-full bg-white pt-[60px] pb-[100px] relative">
  <div className="max-w-[1200px] mx-auto px-5">

    {/* Two Column Layout → stacks on mobile */}
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[40px] relative z-10 lg:items-stretch">

      {/* Left Side - Location Header + Map */}
      <div className="flex flex-col lg:flex-[0.55]">

        {/* Location Header */}
        <div className="flex items-start gap-[16px] mb-[24px]">
          <div className="w-[48px] h-[48px] rounded-[12px] bg-[#FFF5EE] flex items-center justify-center flex-shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#FF6500" strokeWidth="2" fill="none"/>
              <circle cx="12" cy="10" r="3" stroke="#FF6500" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="pt-[2px]">
            <div className="text-[18px] font-semibold text-[#111111] mb-[4px]">The FEU X Headquarter</div>
            <p className="text-[13px] text-[#666666]">1st floor, Sheikh Zayed Road, Al Manara, Dubai - UAE</p>
          </div>
        </div>

        {/* Map - fixed height on mobile, flex-1 on desktop */}
        <div className="relative w-full h-[280px] sm:h-[360px] lg:flex-1 lg:h-auto rounded-[16px] overflow-hidden bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.1!2d55.19!3d25.09!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bb89f0c56b7%3A0x3f3f3f3f3f3f3f3f!2sAl%20Barsha%2C%20Dubai!5e0!3m2!1sen!2sae!4v1600000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FEU X Location"
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:flex-[0.45] bg-white rounded-[16px] p-6 sm:p-[40px] shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="text-[24px] sm:text-[28px] font-semibold text-[#111111] mb-[8px]">Contact us</div>
        <p className="text-[14px] font-normal text-[#666666] leading-[22px] mb-[32px]">
          Send us a message and our team will get back to you shortly.
        </p>

        <div className="flex flex-col gap-[20px]">

          {/* Full Name */}
          <div>
            <label className="block text-[14px] font-medium text-[#111111] mb-[8px]">Full Name</label>
            <input
              type="text"
              placeholder="Ex. Sarah Smith"
              className="w-full h-[48px] rounded-[8px] border border-[#E0E0E0] px-[16px] text-[14px] text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#FF6500] transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[14px] font-medium text-[#111111] mb-[8px]">Email Address</label>
            <input
              type="email"
              placeholder="Ex. example@gmail.com"
              className="w-full h-[48px] rounded-[8px] border border-[#E0E0E0] px-[16px] text-[14px] text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#FF6500] transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-[14px] font-medium text-[#111111] mb-[8px]">Phone Number</label>
            <div className="flex h-[48px]">
              {/* Country Code */}
              <div className="flex items-center gap-[6px] sm:gap-[8px] px-[10px] sm:px-[14px] border border-[#E0E0E0] border-r-0 rounded-l-[8px] bg-white cursor-pointer flex-shrink-0">
                <img
                  src="https://flagcdn.com/w20/ae.png"
                  alt="UAE"
                  className="w-[22px] h-[15px] object-cover rounded-[2px]"
                />
                <span className="text-[14px] text-[#111111] font-medium">+971</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#999999" strokeWidth="2">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
              {/* Phone Input */}
              <input
                type="tel"
                placeholder="Ex. 1234 5678"
                className="flex-1 min-w-0 h-full rounded-r-[8px] border border-[#E0E0E0] px-[16px] text-[14px] text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#FF6500] transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-[14px] font-medium text-[#111111] mb-[8px]">Message</label>
            <textarea
              placeholder="Type your message here (optional)"
              className="w-full h-[100px] rounded-[8px] border border-[#E0E0E0] p-[16px] text-[14px] text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#FF6500] transition-colors resize-none"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start gap-[12px]">
            <input
              type="checkbox"
              id="consent"
              className="w-[18px] h-[18px] mt-[3px] rounded-[4px] border-[#E0E0E0] accent-[#FF6500] cursor-pointer flex-shrink-0"
            />
            <label htmlFor="consent" className="text-[13px] font-normal leading-[20px] text-[#666666] cursor-pointer">
              I agree to receive communications, including emails, calls, and texts, from FEU X about
              products, services, and promotions. I understand I can unsubscribe at any time.
            </label>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full h-[48px] bg-[#FF6500] text-white text-[14px] font-semibold rounded-[69px] hover:bg-[#e65b00] active:scale-95 transition-all duration-150 mt-[8px]"
          >
            Submit
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

          {/* FAQ Section */}
          <PrimeFAQ />

          {/* Newsletter Section */}
          <Newsletter />

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
