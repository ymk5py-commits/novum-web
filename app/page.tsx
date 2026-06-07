import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Products from "@/components/Products";
import ScrollExpandVideo from "@/components/ScrollExpandVideo";
import Integrations from "@/components/Integrations";
import GlobalReach from "@/components/GlobalReach";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main className="relative bg-navy-950">
        <Hero />
        <LogoMarquee />
        <Products />
        <ScrollExpandVideo />
        <Integrations />
        <GlobalReach />
        <Services />
        <Process />
        <Projects />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
