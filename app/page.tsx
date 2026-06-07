import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Integrations from "@/components/Integrations";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="relative bg-navy-950">
        <Hero />
        <Marquee />
        <Products />
        <Integrations />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
