"use client";

import { useState } from "react";
import { HeroBadge } from "../shared";

type FAQ = {
    id: number;
    number: string;
    question: string;
    answer: string;
    src: string;
};

type AccordionItems = {
    item: FAQ,
    isOpen: boolean;
    onToggle: () => void;
}

const faqs: FAQ[] = [
    {
        id: 1,
        number:"01", 
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        src: "/landing-assets/plus-circle.svg"
    },
    {
        id: 2,
        number:"02",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        src: "/landing-assets/plus-circle.svg",
    },
    {
        id: 3,
        number:"03",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        src: "/landing-assets/plus-circle.svg",
    },
    {
        id: 4,
        number:"04",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        src: "/landing-assets/plus-circle.svg",
    },
]

function AccordionItem({ item, isOpen, onToggle }: AccordionItems) {
    return (
        <div className="border-b border-gray-200">
            <button type="button" onClick={onToggle}
                className="flex items-center justify-between w-full gap-3 sm:gap-4 py-3 sm:py-4 md:py-5">
                    <div className="flex items-center gap-3 sm:gap-6 md:gap-8 min-w-0 flex-1">
                        <p className="text-gray-500 text-xs sm:text-sm flex-shrink-0">{item.number}</p>
                        <h1 className="text-xs sm:text-sm md:text-base text-left text-gray-900 font-medium truncate">{item.question}</h1>
                    </div>
                    <img src={item.src} alt="" className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 flex-shrink-0" />
            </button>

            <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ease-in-out text-xs sm:text-sm md:text-base text-gray-500 overflow-hidden ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden pl-6 sm:pl-12 md:pl-16 pr-3 sm:pr-6 md:pr-8 py-2 sm:py-3 md:py-4">
                    <p className="leading-relaxed">{item.answer}</p>
                </div>
            </div>
        </div>
    )
}

export default function PrimeFAQ() {

    const [active, setActive] = useState<number>(2)

    const toggle = (id: number) => (
        setActive((prev) => (prev === id ? 0 : id))
    )

    return (
        <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 text-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
                    <HeroBadge text="LOREM IPSUM" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xs text-center font-semibold">Got Questions? we've got answers</h3>
                    <p className="text-xs sm:text-sm md:text-sm text-center text-gray-600 max-w-sm py-2 sm:py-3">We've compiled answer to frequently asked questions to help you get started quickly and confidently</p>
                </div>

                <div className="py-8 sm:py-10 md:py-12">
                    {faqs.map((faq) => (
                            <AccordionItem key={faq.id} item={faq} isOpen={active === faq.id} onToggle={() => toggle(faq.id)} />
                    ))}
                </div>
            </div>
        </section>
    )
}