import { motion } from "motion/react";
import { IMAGE_IDS, getImageUrl } from "../constants/images";
import { ArrowRight } from "lucide-react";

export default function LastEvent() {
  return (
    <section className="py-32 px-8 bg-beige-50 overflow-hidden" id="last-event">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-beige-200 text-beige-950/60 text-[10px] uppercase tracking-[0.3em] font-semibold mb-8">
              Rétrospective
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#4f4842] leading-tight mb-8">
              Tu as loupé notre dernier évènement ? :(
            </h2>
            <p className="text-[#4f4842]/70 text-lg font-light leading-relaxed mb-12 max-w-xl">
              Revivez les moments forts de nos ateliers créatifs. Une après-midi suspendue entre partage, apprentissage et créativité au cœur de notre univers beige.
            </p>
            
            <motion.a
              href="#"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 text-[#4f4842] font-medium tracking-widest text-xs uppercase group"
            >
              Voir l'album photo 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="order-1 lg:order-2 relative group"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl relative">
              <img 
                src={getImageUrl(IMAGE_IDS.atelier)} 
                alt="Ateliers créatifs Beige"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#4f4842]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l border-b border-[#4f4842]/20 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
