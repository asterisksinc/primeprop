type Logo = {
    id: number;
    name : string;
    src : string;
};

// -- Data --
const logos : Logo[] = [
    { id: 1, name : "Logoipum 1", src: "/landing-assets/logo01.svg"},
    { id: 2, name : "Logoipum 2", src: "/landing-assets/logo02.svg"},
    { id: 3, name : "Logoipum 3", src: "/landing-assets/logo03.svg"},
    { id: 4, name : "Logoipum 4", src: "/landing-assets/logo04.svg"}
]

export default function PrimeTrustedCompanies() {
    return (
        <section className="py-8 md:py-10 lg:py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8">

                {/* Left Text */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: '"Figtree", sans-serif', fontWeight: 400 }}>
                        Trusted by leading <br className="hidden md:block" />
                        Companies Worldwide
                    </h3>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 lg:gap-8">
                    {logos.map((logo) => (
                        <div key={logo.id} className="">
                            <img src={logo.src} alt={logo.name} className="object-contain w-16 md:w-20 lg:w-24 h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}