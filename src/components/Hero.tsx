import { motion } from "motion/react";
import { IMAGE_IDS, getImageUrl } from "../constants/images";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-beige-100" id="hero">
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={getImageUrl(IMAGE_IDS.entrance)} 
          alt="Warm beige minimalist coffee shop interior" 
          className="w-full h-full object-cover brightness-[1.02] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-beige-100/10"></div>
      </motion.div>

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
