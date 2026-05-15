import Navbar from "@/components/Navbar";
import Disclaimer from "@/components/Disclaimer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Routes from "@/components/Routes";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Disclaimer />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Routes />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
