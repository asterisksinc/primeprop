

type Logo = {
    id: number;
    name: string;
    src: string;
};

// -- Data --
const logos: Logo[] = [
    { id: 1, name: "Logoipum 1", src: "/landing-assets/logo01.svg" },
    { id: 2, name: "Logoipum 2", src: "/landing-assets/logo02.svg" },
    { id: 3, name: "Logoipum 3", src: "/landing-assets/logo03.svg" },
    { id: 4, name: "Logoipum 4", src: "/landing-assets/logo04.svg" }
]

export default function PrimeTrustedCompanies() {
    return (
        <section className="py-8 md:py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">

                {/* Left Text */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight">
                        Trusted by leading <br />
                        Companies Worldwide
                    </h3>
                </div>

                {/* Slider Logos */}
                <div className="relative max-w-[750px] w-full mx-auto overflow-hidden py-6">

                    {/* Gradient fade (premium look) */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-10 md:w-16 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-10 md:w-16 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="flex w-max animate-marquee gap-12">

                        {[...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex-shrink-0">
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-8 object-contain"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}