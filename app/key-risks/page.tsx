'use client';
import React from 'react';
import { Header, Footer, Newsletter, HeroBadge, HeroBackground, DownloadApp } from '../components/shared';

export default function KeyRisksPage() {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@400&display=swap" rel="stylesheet" />
        <style>{`
          body { font-family: 'Figtree', sans-serif; }
        `}</style>
      </head>
      <body className="m-0 p-0 bg-white">
        <div className="min-h-screen text-[#111111] overflow-x-hidden">
          
          {/* Hero Section */}
          <div className="relative">
            <HeroBackground />
            <Header activeLink="Key Risks" />

            {/* Hero Content */}
            <section className="relative z-10 text-center pt-[70px] pb-[100px]">
              <div className="mb-[20px] flex justify-center">
                <HeroBadge 
                  text="Risk Warnings" 
                  icon={
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF6500" strokeWidth="2">
                      <path d="M12 2L2 22h20L12 2z" />
                      <line x1="12" y1="16" x2="12" y2="16" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                    </svg>
                  }
                />
              </div>
              
              <div className="text-[52px] font-bold text-[#111111] leading-[1.15] mb-[18px]">
                Key Risks and<br />disclosures
              </div>
              
              <p className="text-[13px] font-normal text-[#666666] leading-[22px]">
                Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit
              </p>
            </section>
          </div>

          {/* Content Section */}
          <div className="w-full bg-[#FAFAFA] relative z-10 rounded-t-[40px] mt-[-40px]">
            <div className="max-w-[1000px] mx-auto px-5 pt-[80px] pb-[100px]">
              <div className="flex flex-col gap-[32px]">
                
                {/* Regulatory Disclosure */}
                <section>
                  <h3 className="text-[16px] font-semibold text-[#111111] mb-[16px]">Regulatory Disclosure</h3>
                  <p className="text-[13px] leading-[26px] text-[#666666]">
                    Prypco Blocks (DIFC) Ltd (Prypco Blocks) is fully regulated by the Dubai Financial Services Authority (DFSA).
                  </p>
                </section>

                {/* Disclaimer */}
                <section>
                  <h3 className="text-[16px] font-semibold text-[#111111] mb-[16px]">Disclaimer</h3>
                  <p className="text-[13px] leading-[26px] text-[#666666]">
                    Please be aware that Prypco Blocks does not offer any investment advice and does not assess the suitability of any investment for individual investors. All information provided is intended to assist you in making informed decisions, but you must conduct your own due diligence and analysis before making any investment decisions. It is important to understand that investing involves risks, and there is no guarantee of profit or protection against loss. Therefore, if you are uncertain about any investment, we recommend seeking the advice of an independent financial advisor before proceeding.
                  </p>
                </section>

                {/* Client Money Account */}
                <section>
                  <h3 className="text-[16px] font-semibold text-[#111111] mb-[16px]">Client Money Account</h3>
                  <p className="text-[13px] leading-[26px] text-[#666666] mb-[20px]">
                    Please be advised that client funds are kept in a separate account with Emirates NBD and are managed by Prypco Blocks. While Prypco Blocks has conducted due diligence on Emirates NBD's custodial systems and controls and deemed them suitable for holding client funds, please be aware that Emirates NBD does not have a direct relationship with clients.
                  </p>
                  <p className="text-[13px] leading-[26px] text-[#666666] mb-[20px]">
                    Therefore, it is essential to note that Prypco Blocks is solely responsible for maintaining proper segregation of customer funds deposited in the ENBD account. In the unlikely event of an insolvency, liquidation, or other distribution related to Prypco Blocks, which is a DFSA regulated firm, client funds will be subject to the <strong className="font-semibold text-[#111111]">DFSA Client Money Distribution Rules.</strong>
                  </p>
                  <p className="text-[13px] leading-[26px] text-[#666666]">
                    Please take into consideration that investing always comes with risks, and you should carefully evaluate the risks associated with any investment before making a decision. We recommend that you seek independent financial advice if you have any questions or concerns about investing in this opportunity.
                  </p>
                </section>

                <div className="w-full h-[1px] bg-[#E0E0E0] my-[8px]"></div>

                {/* Risk Warnings */}
                <section>
                  <h2 className="text-[20px] font-bold text-[#111111] mb-[24px]">Risk Warnings</h2>
                  
                  <div className="flex flex-col gap-[32px]">
                    {/* Investment */}
                    <div>
                      <h4 className="text-[15px] font-semibold text-[#111111] mb-[16px]">Investment</h4>
                      <p className="text-[13px] leading-[26px] text-[#666666]">
                        Investing in PRYPCO Blocks entails a substantial level of risk and may result in an inability to achieve expected returns. Utilizing credit or borrowed funds to invest in PRYPCO Blocks further elevates the level of risk. Shared ownership introduces additional risks, and the timing of your exit may also impact your investment. To mitigate against potential risks, we strongly advise diversifying your PRYPCO Blocks investments across multiple properties to reduce exposure to any one property that could be affected by issues such as tenant default or specific problems that may impact its value. It is strongly recommended that investors meticulously assess their financial situation and investment objectives prior to making any investment decisions.
                      </p>
                    </div>

                    {/* Income */}
                    <div>
                      <h4 className="text-[15px] font-semibold text-[#111111] mb-[16px]">Income</h4>
                      <p className="text-[13px] leading-[26px] text-[#666666] mb-[20px]">
                        While PRYPCO Blocks provides rental income estimates, they are not guaranteed and may turn out to be lower than anticipated, or may stop altogether for certain periods. Investors may also experience a decrease in cash receipts and available distribution if tenants do not fulfill their obligations or if vacancies arise.
                      </p>
                      <p className="text-[13px] leading-[26px] text-[#666666]">
                        In addition, the value of the investment in real estate is speculative, and rental income is not assured. Past performance and forecasts are not reliable indicators of future performance, and the real estate market can experience a downturn that can affect the property's value. There may also be government restrictions on the sale of a property to foreign owners, which may limit the range of potential buyers. In case the operator ceases to carry on its business, investors may lose their capital, incur costs, or experience delays in the investment being wound up. Therefore, investors are advised to individually assess and establish their comfort level with the risks involved before investing in PRYPCO Blocks.
                      </p>
                    </div>

                    {/* Tradability */}
                    <div>
                      <h4 className="text-[15px] font-semibold text-[#111111] mb-[16px]">Tradability</h4>
                      <p className="text-[13px] leading-[26px] text-[#666666] mb-[20px]">
                        Investors in this type of investment will not directly own the underlying property. Instead, they will have an interest in a legal entity that owns the property. As a result, the investment is likely to be illiquid, implying that it may be difficult to sell the interest due to a lack of willing buyers. Investors must understand that they may not be able to easily liquidate their investment before the end of the investment period, and therefore, should be prepared to commit to investing for the full duration of the investment. Please carefully consider your investment goals, risk tolerance, and financial situation before investing in this illiquid investment.
                      </p>
                      <p className="text-[13px] leading-[26px] text-[#666666]">
                        Although the share transfer may provide an opportunity to advertise your investment for sale to other PRYPCO Blocks investors, there is no guarantee that there will be potential investors available to buy your investment at a price that you consider reasonable. This may require you to wait until the end of the investment term for an exit. Additionally, even at the end of the term, exiting the investment will depend on the completion of a transaction to sell the underlying property, which could take several months. Please carefully consider these risks before investing in real estate.
                      </p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>

          <div className="bg-white pt-[60px]">
            {/* Download App Section */}
            <DownloadApp />

            {/* Newsletter Section */}
            <Newsletter />

            {/* Footer */}
            <Footer />
          </div>

        </div>
      </body>
    </html>
  );
}