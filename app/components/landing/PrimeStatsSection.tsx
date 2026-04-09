import AvatarStack from "../shared/AvatarStack";


// --- types --
type Stat = {
    id: string;
    value: string;
    label: string;
    src: string;
};

type Mission = {
    title: string;
    description: string;
    rating: number;
    avatars: string[];
}


// --- data ---
const leftStats: Stat[] = [
    { id: "roi", value: "8-12%", label: "Expected annual ROI", src: "/landing-assets/analysis.svg" },
    { id: "rent", value: "1.5Mn+", label: "AED Rent disbursed", src: "/landing-assets/feed.svg" },
];

const rightStats: Stat[] = [
    { id: "start", value: "2,000", label: "AED to get started", src: "/landing-assets/dollar.svg" },
    { id: "nationalities", value: "200+", label: "Nationalities eligible", src: "/landing-assets/world.svg" },
]

const mission: Mission = {
    title: "OUR MISSION",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    rating: 4.5,
    avatars: [
        ""
    ]
}

// --- Avatar Profile --

const users = [
    {
        id: 1,
        image: "/landing-assets/Ellipse1.png",
        alt: "Ellipse1"
    },
    {
        id: 2,
        image: "/landing-assets/Ellipse2.png",
        alt: "Ellipse2",
    },
    {
        id: 3,
        image: "/landing-assets/Ellipse3.png",
        alt: "Ellipse3"
    },
    {
        id: 4,
        image: "/landing-assets/Ellipse4.png",
        alt: "Ellipse4"
    }
]

// --- Reusable Components ---
type CardProps = {
    value: string;
    label: string;
    src: string;
};

// --- Reusable Card ---
function Card({ value, label, src }: CardProps) {

    return (
        <div className="flex flex-col justify-between bg-white border border-gray-200 p-3 md:p-6 min-h-[7em] sm:min-h-[10em] md:min-h-[12em] rounded-lg sm:rounded-xl ">
            <div className="flex items-center justify-between gap-2">
                <h2 className="text-accent font-medium text-4xl md:text-5xl">{value}</h2>
                <img className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" src={src} alt="icons" />
            </div>
            <p className="text-primary text-sm md:text-base font-light">{label}</p>
        </div>
    )
}

// --- Main Section ---
export default function PrimeStatsSection() {
    return (
        <section className="bg-white py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">

                    {/* --Left-- */}
                    <div className="grid grid-cols-2 md:flex md:flex-col gap-3 md:gap-4">
                        {leftStats.map((item) => (
                            <Card key={item.id} value={item.value} label={item.label} src={item.src} />
                        ))}
                    </div>

                    {/* -- Right -- */}
                    <div className="order-2 md:order-3 grid grid-cols-2 md:flex md:flex-col gap-3 md:gap-4">
                        {rightStats.map((item) => (
                            <Card key={item.id} value={item.value} label={item.label} src={item.src} />
                        ))}

                    </div>

                    {/* --- Center --- */}
                    <div className="order-3 md:order-2 relative bg-white rounded-xl  overflow-hidden h-56 md:h-[406px]">
                        <img src="/landing-assets/our-mission.jpg" alt="Our Mission" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between">
                            <div>
                                <h1 className="uppercase font-mediumtext-base">OUR MISSION</h1>
                                <p className="hidden md:block text-xs sm:text-sm md:text-base mt-1 sm:mt-2 leading-relaxed text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                            </div>

                            <div>
                                <AvatarStack users={users} />
                                <img className="mt-2 h-4" src="/landing-assets/review.svg" alt="ReviewStar" />
                                <p className="text-xs sm:text-sm text-white mt-1 leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}