"use client";

import { useState } from "react";
import { HeroBadge } from "../shared";

// -- Type --
type Feature = {
    id: number;
    title: string;
    description: string;
    icon: string;
}


type AccordionItemProps = {
    item: Feature;
    isOpen: boolean;
    onToggle: () => void;
}

// -- Data --
const features: Feature[] = [
    {
        id: 1,
        title: "Rental Income",
        description: "Receive regular passive income every month as tenants pay rent on the properties you've invested in.",
        icon: "/landing-assets/rental.svg"
    },
    {
        id: 2,
        title: "Capital Appreciation",
        description: "Benefit from potential property value increases over time, allowing you to sell your shares at a profit.",
        icon: "/landing-assets/capital.svg"
    },
    {
        id: 3,
        title: "Flexibility at Your Fingertips",
        description: "Manage your investments anytime, anywhere through our easy-to-use platform.",
        icon: "/landing-assets/flexibility.svg",
    }
]

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
    return (
        <div className="border-b border-gray-200">
            <button type="button" onClick={onToggle}
                className="flex w-full items-center gap-3 md:gap-4 py-4 md:py-5 text-left">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <img className="h-8 w-8 md:h-10 md:w-10" src={item.icon} alt="" />
                        <span className="flex-1 text-sm md:text-[15px] font-medium text-primary">{item.title}</span>
                    </div>
                    <div>
                        <img src="/landing-assets/dropDownArrow.svg" alt="" />
                    </div>
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <p className="pb-2 pl-[40px] text-start md:pl-14 pr-4 md:pr-6 text-xs md:text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
            </div>
        </div>
    )
}



export default function PrimeMoneyWork() {

    const [active, setActive] = useState<number>(1);

    const toggle = (id: number) => {
        setActive((prev) => (prev === id ? 0 : id));
    }

    return (
        <section className="py-12 md:py-16 bg-gradient-to-b from-[#FFF8EC] to-[#ffffff] text-primary">
            <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">

                {/* -- Left Image -- */}
                <div className="bg-[#F5F5F5] rounded-2xl h-64 w-64 md:h-[30em] md:w-[30em] flex items-center justify-center mx-auto md:mx-0">
                    <div className="bg-white rounded-2xl h-48 w-48 md:h-[25em] md:w-[25em]"></div>
                </div>

                {/* Right Text */}
                <div className="px-2 md:px-4 text-center md:text-left">
                    
                    <div>
                        <h1 className="text-2xl md:text-3xl font-semibold mt-5">Make your money work for you</h1>
                        <p className="text-gray-800 mt-2 text-sm md:text-base">Here's how you earn money on our platform</p>

                        <div>
                            {features.map((item) => (
                                <AccordionItem key={item.id} item={item} isOpen={active === item.id} onToggle={() => toggle(item.id)} />
                            ))}
                        </div>
                    </div>
                    <button className="bg-accent text-white text-sm px-3 md:px-4 py-2 rounded-full flex gap-2 items-center mt-4 mx-auto md:mx-0">Start Earning
                        <img className="w-2 md:w-3 h-2 md:h-3" src="/landing-assets/arrow.svg" alt="" />
                    </button>
                </div>


            </div>
        </section>
    )

}