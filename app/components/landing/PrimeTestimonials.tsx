import { HeroBadge } from "../shared";

type Testimonial = {
    id: number;
    name: string;
    role: string;
    image: string;
    review: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Devon Lane",
        role: "CEO & Founder",
        image: "/landing-assets/user1.jpg",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        id: 2,
        name: "Robert Fox",
        role: "CEO & Founder",
        image: "/landing-assets/user2.jpg",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        id: 3,
        name: "Jenny Wilson",
        role: "CEO & Founder",
        image: "/landing-assets/user3.jpg",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        id: 4,
        name: "Jane Cooper",
        role: "CEO & Founder",
        image: "/landing-assets/user4.jpg",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        id: 5,
        name: "Eleanor Pena",
        role: "CEO & Founder",
        image: "/landing-assets/user5.jpg",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
        id: 6,
        name: "Darrell Steward",
        role: "CEO & Founder",
        image: "/landing-assets/user6.jpg",
        review:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
];

export default function PrimeTestimonials() {
    return (
        <section className="bg-white py-12 sm:py-16 md:py-24 lg:py-32 text-primary">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 text-center">
                    <HeroBadge text="LOREM IPSUM" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold max-w-lg">What our trusted clients say about their experiences</h3>
                    <p className="text-xs sm:text-sm md:text-base max-w-2xl text-gray-800">Discover how over 40,000 customers worldwide have shared their stories, and success journeys, highlighting the rest impact our platform has made in their careers.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 py-8 sm:py-10 md:py-12">
                    {testimonials.map((testimonial, index) => (

                        <div key={index} className="bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 w-full overflow-hidden hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-2">
                                <img className="h-8 sm:h-10 w-8 sm:w-10 rounded-full object-cover flex-shrink-0" src={testimonial.image} alt={testimonial.name} />
                                <div className="min-w-0">
                                    <h2 className="text-xs sm:text-sm font-medium truncate">{testimonial.name}</h2>
                                    <p className="text-xs text-gray-800 truncate">{testimonial.role}</p>
                                </div>
                            </div>
                            <div>
                                <p className="py-3 sm:py-4 md:py-5 text-xs sm:text-sm leading-relaxed ">{testimonial.review}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/landing-assets/review.svg" alt="rating" className="w-auto h-4" />
                                <span className="text-xs sm:text-sm font-medium">5.0</span>
                            </div>

                        </div>
                    ))}

                </div>

                <button className="bg-accent text-white text-center mx-auto text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex gap-2 items-center hover:opacity-90 transition-opacity mt-4 sm:mt-6">View Funded Properties
                <img className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3" src="/landing-assets/arrow.svg" alt="" />
            </button>


            </div>

        </section>
    )
}