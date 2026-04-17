import { motion, AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VignetteGrid from "./components/VignetteGrid";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
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
          <VignetteGrid />
          <About />
          <Newsletter />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
