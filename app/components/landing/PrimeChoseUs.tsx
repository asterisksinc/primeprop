import { HeroBadge } from "../shared";

type CardItemProps = {
  id: string;
  title: string;
  description: string;
  isWide?: boolean;
};

const CardItems: CardItemProps[] = [
  {
    id: "1",
    title: "Regulated and secure",
    description:
      "All investments on PRYPCO Blocks operate under the Dubai Financial Services Authority (DFSA) framework. This ensures that client funds are segregated and protected and that every property investment is held in a special purpose vehicle (SPV) — to safeguard ownership and reduce risk.",
  },

  {
    id: "2",
    title: "Invest from anywhere",
    description:
      "Whether you’re in Dubai, New York, London, or Singapore, you can become a property investor in minutes. PRYPCO Blocks makes it possible to browse, invest, and manage your portfolio entirely online — no travel, no paperwork, and no hassle. Real estate investing has never been this seamless or borderless.",
  },

  {
    id: "3",
    title: "Earn rental income",
    description:
      "Join thousands of investors who’ve already earned over AED 600,000 in rental payouts through PRYPCO Blocks. Every property generates steady monthly income, allowing you to grow your wealth effortlessly while your investment appreciates over time — all without the headaches of traditional property management.",
    isWide: true,
  },

  {
    id: "4",
    title: "Value investment",
    description:
      "We analyze the Dubai real estate market to identify properties with strong long-term fundamentals, including location, yield potential, and growth trajectory. By focusing on value at entry, investors can build portfolios that balance steady income with future appreciation, reflecting a measured and research-driven investment strategy.",
  },

  {
    id: "5",
    title: "Sharia Compliant",
    description:
      "PRYPCO Blocks has received Sharia certification from the Shariyah Review Bureau (SRB) and operates under an Islamic Window Licence issued by the Dubai Financial Services Authority (DFSA). This ensures all investments adhere to Islamic finance principles.",
  },
];

export default function PrimeChooseUs() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 lg:py-32 text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <HeroBadge text="LOREM IPSUM" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-2">
          <h1
            className="text-xl sm:text-2xl md:text-3xl font-semibold"
            
          >
            Here's why 50,000+ others chose PRYPCO Blocks
          </h1>
          <p className="text-sm sm:text-base md:text-[17px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 py-12 sm:py-16 md:py-20">
          {CardItems.map((item) => {
            const isWide = item.isWide === true;
            return (
              <div
                key={item.id}
                className={`bg-gray-100 border border-gray-200 flex flex-col p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl overflow-hidden ${isWide ? "md:col-span-2 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-8 md:items-start" : "flex flex-col"}`}
              >
                <div className={`${isWide ? "md:py-6" : ""}`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">{item.description}</p>
                </div>
                <div className={`bg-gradient-to-b from-white to-gray-100 h-32 sm:h-40 md:h-64 lg:h-[20em] mt-4 sm:mt-5 md:mt-5 rounded-lg sm:rounded-2xl overflow-hidden ${ isWide ? "md:order-2" : ""}`}>
                  {/* <img src="" alt="" /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
