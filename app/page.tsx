
import PrimeStatsSection from "./components/landing/PrimeStatsSection";
import PrimeDigitalGateway from "./components/landing/PrimeDigitalGateway";
import PrimeTrustedCompanies from "./components/landing/PrimeTrustedCompanies";
import PrimeMoneyWork from "./components/landing/PrimeMoneyWork";
import PrimeChooseUs from "./components/landing/PrimeChoseUs";
import PrimeOurProperties from "./components/landing/PrimeOurProperties";
import PrimeTestimonials from "./components/landing/PrimeTestimonials";
import PrimeFAQ from "./components/landing/PrimeFAQ";
import { FAQ, Footer, Newsletter } from "./components/shared";
import PrimePropNavbar from "./components/PrimePropNavbar";

export default function Home() {
 return(
   <main>
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
 )
}