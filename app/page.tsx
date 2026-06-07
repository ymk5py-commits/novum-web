import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="relative bg-navy-950">
        <Hero />
        <Marquee />
        <Products />
        <Services />
        <Process />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
