import { motion } from "motion/react";
import { IMAGE_IDS, getImageUrl } from "../constants/images";

export default function About() {
  return (
    <section className="py-80 px-8 md:px-24 bg-beige-100 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden warm-glow bg-beige-200">
            <img 
              src={getImageUrl(IMAGE_IDS.clothes)} 
              alt="Warm minimalist beige retail local" 
              className="w-full h-full object-cover brightness-[1.02] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="text-left"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-medium leading-[1.2] mb-12 text-beige-950">
            Un espace <br /> bienveillant et <br /> créatif au cœur de Paris.
          </h2>
          <p className="text-lg font-medium leading-relaxed text-beige-900 max-w-md italic font-serif">
            "Beige est un lieu singulier. Entre boutique de matières, coffee shop minimaliste et ateliers créatifs, nous avons sculpté avec tout notre amour un endroit accueillant et convivial."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
