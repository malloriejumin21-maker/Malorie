import { motion } from "motion/react";

const vignettes = [
  {
    title: "Boutique",
    image: "/images/shop.webp",
    description: "élégance et qualité"
  },
  {
    title: "Coffee",
    image: "/images/Coffee.webp",
    description: "café, caramel et cannelle"
  },
  {
    title: "Atelier",
    image: "/images/atelier.webp",
    description: "créer avec amour"
  }
];

export default function VignetteGrid() {
  return (
    <section className="py-60 px-8 md:px-24 bg-beige-100 plaster-surface" id="vignettes">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
        {vignettes.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: index * 0.3, ease: "easeOut" }}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] bg-beige-200 warm-glow">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover brightness-[1.02] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-serif tracking-[0.5em] mb-4 text-beige-950 font-medium">{item.title}</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-beige-900 font-semibold">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
