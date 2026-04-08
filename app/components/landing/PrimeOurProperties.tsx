import Image from "next/image";
import { HeroBadge } from "../shared";

type Property = {
    id: string;
    title: string;
    location: string;
    type: string;
    image: string;
    status1: string;
    status2: string;

}

const properties: Property[] = [

    {
        id: "1",
        title: "Three Bedroom + Maid’s Room Villa",
        location: "Arabian Ranches",
        type: "Villa",
        image: "/landing-assets/property.png",
        status1: "Available",
        status2: "Ready",
    },
    {
        id: "2",
        title: "Three Bedroom + Maid’s Room Villa",
        location: "Arabian Ranches",
        type: "Villa",
        image: "/landing-assets/property.png",
        status1: "Available",
        status2: "Ready",
    },
    {
        id: "3",
        title: "Three Bedroom + Maid’s Room Villa",
        location: "Arabian Ranches",
        type: "Villa",
        image: "/landing-assets/property.png",
        status1: "Available",
        status2: "Ready",
    },
    {
        id: "4",
        title: "Three Bedroom + Maid’s Room Villa",
        location: "Arabian Ranches",
        type: "Villa",
        image: "/landing-assets/property.png",
        status1: "Available",
        status2: "Ready",
    },
]

export default function PrimeOurProperties() {
    return (
        <section className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 text-black flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 px-4 sm:px-6">
                <HeroBadge text="LOREM IPSUM" />
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Our Properties</h1>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center max-w-md">Start building wealth in just 4 simple steps</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3  md:gap-6 my-6  md:my-10 px-4  md:px-8 lg:px-10 w-full max-w-7xl">
                {properties.map((property) => (
                    <div key={property.id} className="bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 w-full overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                        <div className="relative">
                            <img className="h-24 sm:h-28 md:h-36 w-full object-cover rounded-lg sm:rounded-xl overflow-hidden" src={property.image} alt={property.title} />
                        </div>

                        <div className="text-xs sm:text-sm mt-2 sm:mt-3 flex gap-1 sm:gap-2 flex-wrap">
                            <h2>{property.location}</h2>
                            <Image src="/landing-assets/Start.svg" width={10} height={10} alt="star" />
                            <h2>{property.type}</h2>
                        </div>
                        <div className="mt-1">
                            <h1 className="text-[16px] ">{property.title}</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-1 bg-[#EB6601]/20 py-3 sm:py-4 rounded-lg  border border-[#EB6601]/30 mt-2 sm:mt-3">
                            <Image src="/landing-assets/lock.svg" width={16} height={16} alt="lock" />
                            <p className="text-[11px] sm:text-[12px] font-medium">Listing Price</p>
                        </div>

                    </div>
                ))}
            </div>
            <button className="bg-accent text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full flex gap-2 items-center hover:opacity-90 transition-opacity mt-2">
                View Funded Properties
                <img className="w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3" src="/landing-assets/arrow.svg" alt="" />
            </button>


        </section>
    )
}