import { motion } from "motion/react";

const BRANDS = [
  "Ami Paris",
  "Miu Miu",
  "Courrèges",
  "Coperni",
  "Repetto",
  "The Good Fab",
  "You and Milk",
  "Lululemon",
  "Skims"
];

export default function PartnerBrands() {
  // Triple the brands to ensure seamless loop
  const brandsTriple = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="py-24 bg-white border-y border-beige-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-beige-950 font-bold">
          Nos marques partenaires
        </h2>
      </div>

      <div className="flex">
        <motion.div
          animate={{
            x: [-1035, 0], 
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-24 whitespace-nowrap px-12"
        >
          {brandsTriple.map((brand, i) => (
            <span
              key={i}
              className="text-sm md:text-base uppercase tracking-[0.4em] font-serif font-light text-[#4f4842]/60 hover:text-[#4f4842] transition-colors duration-500 cursor-default"
            >
              {brand}
            </span>
          ))}
        </motion.div>
        
        {/* Mirror for seamless loop */}
        <motion.div
          animate={{
            x: [-1035, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-24 whitespace-nowrap px-12"
          aria-hidden="true"
        >
          {brandsTriple.map((brand, i) => (
            <span
              key={i+brandsTriple.length}
              className="text-sm md:text-base uppercase tracking-[0.4em] font-serif font-light text-[#4f4842]/60"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* Soft gradient fades on ends */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
  );
}
