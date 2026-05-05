import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-32 px-8 bg-beige-200 text-beige-950 overflow-hidden relative" id="newsletter">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-beige-400/40"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="text-[#4f4842] mb-12 max-w-2xl mx-auto font-light leading-relaxed border border-[#4f4842] p-8 rounded-2xl">
            En rejoignant l’univers Beige grâce à ce lien unique, vous accéderez à un programme de fidélité aux privilèges incomparables, ainsi qu’à notre Newsletter, qui vous révèlera en avant-première nos nouvelles créations, nos collaborations et des avantages exclusifs qui vous seront spécialement dédiés.
          </p>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-4 bg-[#4f4842] text-beige-100 px-12 py-4 rounded-full hover:bg-beige-950 transition-all duration-500 shadow-xl"
            >
              <span className="text-sm uppercase tracking-[0.3em] font-semibold">Rejoindre la famille Beige</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
