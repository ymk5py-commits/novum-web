import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative bg-ink-950">
      <Nav />
      <Hero />
      <Marquee />
      <Products />
      <Services />
      <Process />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
