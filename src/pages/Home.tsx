import { motion } from "motion/react";
import Hero from "../components/Hero";
import VignetteGrid from "../components/VignetteGrid";
import About from "../components/About";
import PartnerBrands from "../components/PartnerBrands";
import Newsletter from "../components/Newsletter";
import Testimonials from "../components/Testimonials";
import LastEvent from "../components/LastEvent";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      
      {/* Main Title Section relocated above photos */}
      <section className="pt-24 pb-8 bg-beige-100 text-center overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-beige-950 text-5xl md:text-8xl font-serif font-medium tracking-[0.6em] mr-[-0.6em]"
        >
          BEIGE
        </motion.h1>
      </section>

      <VignetteGrid />
      
      <About />
      <LastEvent />
      <PartnerBrands />
      <Newsletter />
      <Testimonials />
    </main>
  );
}
