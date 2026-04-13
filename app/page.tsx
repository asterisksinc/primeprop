import { cookies } from "next/headers";
import PrimeStatsSection from "./components/landing/PrimeStatsSection";
import PrimeDigitalGateway from "./components/landing/PrimeDigitalGateway";
import PrimeTrustedCompanies from "./components/landing/PrimeTrustedCompanies";
import PrimeMoneyWork from "./components/landing/PrimeMoneyWork";
import PrimeChooseUs from "./components/landing/PrimeChoseUs";
import PrimeOurProperties from "./components/landing/PrimeOurProperties";
import PrimeTestimonials from "./components/landing/PrimeTestimonials";
import PrimeFAQ from "./components/landing/PrimeFAQ";
import { Footer, Newsletter } from "./components/shared";
import Navbar from "./components/shared/Navbar";
import PrimeHero from "./components/landing/PrimeHero";
import { redirect } from "next/navigation";

export default async function Home() {

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/signin"); // 🔥 not logged in → go login
  }

  return (
    <>

      <main>
        <Navbar />
        <PrimeHero />
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