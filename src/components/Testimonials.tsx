import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Sophie L.",
    date: "Avril 2026",
    content: "Un lieu hors du temps. Le café est divin et l'ambiance tellement apaisante. Ma pause préférée à Paris.",
    rating: 5
  },
  {
    name: "Marc-Antoine",
    date: "Mars 2026",
    content: "Les ateliers de couture sont d'une qualité rare. On sent la passion et l'expertise dans chaque geste.",
    rating: 5
  },
  {
    name: "Elena R.",
    date: "Février 2026",
    content: "La sélection de vêtements est pointue et éthique. Beige est plus qu'un concept store, c'est un art de vivre.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-8 bg-white overflow-hidden" id="avis">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center gap-1 mb-6 text-[#4f4842]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#4f4842] lowercase tracking-wide">
            Vous pensez quoi de nous ?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-10 border border-beige-100 rounded-3xl hover:border-[#4f4842]/20 transition-colors duration-500"
            >
              <Quote className="absolute top-6 left-6 text-beige-200" size={32} strokeWidth={1} />
              
              <div className="relative z-10">
                <p className="text-[#4f4842]/80 leading-relaxed italic mb-8 font-light">
                  "{review.content}"
                </p>
                
                <div className="flex items-center justify-between border-t border-beige-50 pt-6">
                  <div>
                    <h4 className="text-sm font-serif font-medium text-[#4f4842]">{review.name}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-[#4f4842]/40 mt-1">{review.date}</p>
                  </div>
                  <div className="flex gap-0.5 text-beige-300">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Global Google Rating Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
           <p className="text-[11px] uppercase tracking-[0.4em] text-beige-900/40 font-medium">
             Note moyenne de <span className="text-[#4f4842] font-bold">4.9/5</span> basée sur plus de 200 avis
           </p>
        </motion.div>
      </div>
    </section>
  );
}
