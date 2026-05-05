import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import CoffeeMenu from "./pages/CoffeeMenu";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key="app-root"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative min-h-screen selection:bg-beige-300 selection:text-beige-900 overflow-x-hidden"
        >
          {/* Subtle Grain Overlay */}
          <div className="grain-texture" />
          
          {/* Subtle Plaster Surface Overlay */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.05] plaster-surface z-0" />

          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<CoffeeMenu />} />
          </Routes>

          <Footer />
        </motion.div>
      </AnimatePresence>
    </Router>
  );
}
