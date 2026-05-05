import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VignetteGrid from "./components/VignetteGrid";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative min-h-screen selection:bg-beige-300 selection:text-beige-900"
      >
        {/* Subtle Grain Overlay */}
        <div className="grain-texture" />
        
        {/* Subtle Plaster Surface Overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.05] plaster-surface z-0" />

        <Header />
        
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
          <Newsletter />
          <Testimonials />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
