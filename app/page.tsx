
import PrimeStatsSection from "./components/landing/PrimeStatsSection";
import PrimeDigitalGateway from "./components/landing/PrimeDigitalGateway";
import PrimeTrustedCompanies from "./components/landing/PrimeTrustedCompanies";
import PrimeMoneyWork from "./components/landing/PrimeMoneyWork";
import PrimeChooseUs from "./components/landing/PrimeChoseUs";
import PrimeOurProperties from "./components/landing/PrimeOurProperties";
import PrimeTestimonials from "./components/landing/PrimeTestimonials";
import PrimeFAQ from "./components/landing/PrimeFAQ";
import { Footer, Header, Newsletter } from "./components/shared";

export default function Home() {
  return (
    <>

      <main>
        <Header />
        <PrimeStatsSection />
        <PrimeDigitalGateway />
        <PrimeTrustedCompanies />
        <PrimeMoneyWork />
        <PrimeChooseUs />
        <PrimeOurProperties />
        <PrimeTestimonials />
        <PrimeFAQ />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}