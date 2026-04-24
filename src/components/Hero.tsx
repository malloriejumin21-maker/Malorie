import { motion } from "motion/react";
import entranceImg from "../assets/images/entrance.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-beige-100" id="hero">
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 z-0 translate-y-24"
      >
        <img 
          src={entranceImg} 
          alt="Warm beige minimalist coffee shop interior" 
          className="w-full h-full object-cover brightness-[1.02] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-beige-100/20"></div>
      </motion.div>

      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
          className="text-beige-950 text-7xl md:text-9xl font-serif font-medium tracking-[0.8em] mr-[-0.8em] drop-shadow-md"
        >
          BEIGE
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-beige-900"></div>
      </motion.div>
    </section>
  );
}
