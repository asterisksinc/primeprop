'use client';
import React from 'react';
import { Header, Footer, Newsletter, HeroBadge, HeroBackground } from '../components/shared';
import Navbar from '../components/shared/Navbar';

const propertyCards = Array.from({ length: 15 }).map((_, index) => ({
  id: index + 1,
  title: 'Three Bedroom + Maid\'s Room Villa',
  location: 'Arabian Ranches',
  type: 'Villa',
  image: '/landing-assets/property.png'
}));

function PropertyCard({ title, location, type, image }: { title: string; location: string; type: string; image: string }) {
  return (
    <article className="w-full rounded-[16px] border border-[#E5E5E5] bg-white p-[8px] shadow-[0_2px_8px_rgba(17,17,17,0.04)]">
      <div className="relative h-[152px] w-full overflow-hidden rounded-[14px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute right-[8px] top-[8px] flex gap-[6px]">
          <span className="rounded-[999px] bg-white/95 px-[10px] py-[4px] text-[12px] font-semibold leading-none text-[#277079]">
            Available
          </span>
          <span className="rounded-[999px] bg-white/95 px-[10px] py-[4px] text-[12px] font-semibold leading-none text-[#277079]">
            Ready
          </span>
        </div>
      </div>

      <div className="px-[2px] pb-[4px] pt-[12px]">
        <p className="text-[13px] leading-[20px] text-[#6B7280]">
          <span>{location}</span>
          <span className="mx-[8px] text-[#FF6500]">✦</span>
          <span>{type}</span>
        </p>

        <p className="mt-[4px] text-[17px] font-semibold leading-[24px] text-[#1F2937]">{title}</p>

        <div className="mt-[14px] flex h-[78px] items-center justify-center rounded-[14px] border border-[#F2A86A] bg-[#FAF1E9]">
          <div className="flex flex-col items-center gap-[8px] text-[#1F2937]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2">
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 1 1 8 0v3" />
            </svg>
            <span className="text-[14px] font-medium leading-none">Listing Price</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PropertiesPage() {
  return (
      <body className="bg-white font-figtree" >
            <Navbar activeLink="Properties" />
        <div className="min-h-screen overflow-x-hidden text-[#111111]">
          <div className="relative">
            <HeroBackground />

            <section className="relative z-10 pb-[90px] pt-[150px] text-center">
              <div className="mb-[20px] flex justify-center">
                <HeroBadge
                  text="Top Analysis"
                  icon={
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6500" strokeWidth="2">
                      <path d="M4 19h16" />
                      <path d="M7 15l3-3 3 2 4-5" />
                      <path d="M17 9h3v3" />
                    </svg>
                  }
                />
              </div>

              <div className="mb-[10px] text-[52px] font-bold leading-[1.15] text-[#111111]">Our funded properties</div>
              <p className="text-[13px] font-normal leading-[22px] text-[#666666]">Funded by over 2500+ amazing investor!</p>
            </section>
          </div>

          <div className="relative z-10 mt-[-20px] w-full rounded-t-[24px] bg-white pb-[70px] pt-[88px]">
            <div className="mx-auto max-w-[1200px]">
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3 px-5 md:px-1">
                {propertyCards.map((card) => (
                  <PropertyCard key={card.id} title={card.title} location={card.location} type={card.type} image={card.image} />
                ))}
              </div>
            </div>
          </div>

          <div className=" pb-[80px] pt-[36px]">
            <Newsletter />
            <Footer />
          </div>
        </div>
      </body>
  );
}