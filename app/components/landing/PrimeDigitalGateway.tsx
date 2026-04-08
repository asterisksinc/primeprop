// --- Types ---

import { HeroBadge } from "../shared";

type Step = {
    id: number;
    number: string;
    title: string;
    description: string;
    cta: string;
    image: string;
};

// --- Data ---
const steps: Step[] = [
    {
        id: 1,
        number: "01",
        title: "Browse",
        description:
            "Explore curated, income-generating Dubai properties verified and handpicked by our leading experts.",
        cta: "Start Browsing",
        image: "/placeholder.png",
    },
    {
        id: 2,
        number: "02",
        title: "Invest",
        description:
            "Build your investment portfolio with Blocks of properties, from only AED 2,000 on our crowdfunding fractional ownership platform.",
        cta: "Invest Now",
        image: "/placeholder.png",
    },
    {
        id: 3,
        number: "03",
        title: "Earn",
        description:
            "Receive monthly rental income and potential capital appreciation. Track everything on your PRYPCO Blocks dashboard.",
        cta: "Start Earning",
        image: "/placeholder.png",
    },
    {
        id: 4,
        number: "04",
        title: "Manage",
        description:
            "You can choose to add, hold, or withdraw your investments after the lock-in period.",
        cta: "Get Started",
        image: "/placeholder.png",
    },
]

type StepCardProps = {
    step: Step;
    reverse?: boolean;
}

function Stepcard({ step, reverse = false }: StepCardProps) {
    return (
        <div className="bg-[#F5F5F5] border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">

                {/* -- Text -- */}
                <div className={reverse ? "md:order-2" : ""}>
                    

                    <div className="relative inline-block">
                        <img src="/landing-assets/stepBadge.svg" alt="stepBadge" />
                        <p className="uppercase text-[11px] md:text-[14px] absolute inset-0 left-[8px] md:left-[10px] top-[2px] md:top-[3px]">Step {step.number}</p>
                    </div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold mt-6 md:mt-8 lg:mt-10">{step.title}</h3>
                    <p className="text-primary text-xs md:text-sm lg:text-base mb-4 max-w-sm mt-2 md:mt-3">{step.description}</p>

                    <button className="bg-accent text-white text-xs md:text-sm px-3 md:px-4 py-2 rounded-full flex gap-2 items-center">{step.cta}
                        <img className="w-2 md:w-3 h-2 md:h-3" src="/landing-assets/arrow.svg" alt="" />
                    </button>
                </div>

                 {/* -- Image -- */}
            <div className={`bg-white rounded-lg md:rounded-xl h-[15em] md:h-[22em] lg:h-[25em] ${reverse ? "md:order-1" : ""}`}>

                {/* Replace with real Image */}
                {/* <div className="w-full h-full flex items-center justify-center">
                    <img src={step.image} alt={step.title} className="object-cover h-full" />
                </div> */}
            </div>

            </div>


           

        </div>
    )
}

// -- Main Section --
export default function PrimeDigitalGateway() {

    return (
        <section className="py-10 md:py-16 lg:py-20 bg-white">
            <div className="max-w-6xl mx-auto bg-red px-4 md:px-6">

                {/* -- Header -- */}
                <div className="text-center mb-8 md:mb-12 text-black">
                    <HeroBadge text="LOREM IPSUM"/>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-2xl mx-auto px-2">Your digital gateway to fractional ownership in Dubai's real estate market.</h2>
                    <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-[18px]">Start building wealth in just 4 simple steps</p>
                </div>

                <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
                    {steps.map((step, index)=> (
                        <Stepcard 
                        key={step.id}
                        step={step}
                        reverse={index % 2 !== 0} 
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}