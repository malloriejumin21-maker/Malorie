import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const formUrl = "https://380038a4.sibforms.com/serve/MUIFAP7hdkhkBUC7SQBmkg7dX48CdylfLDJBWQKuJcw22UhKQAiOMwG3HXQewW1teoGp5n22sftj7Y3uSzlP57jSye1ACtzGXJlrOAwO5BZfSgVmXcbKlgvCS7r7dtgUbSDkBaUaINwuCGPGTx9VTa58fVYGT38Mo-5r_pOV_0rQ6mn_-Mt-DzP98pYFWjbUVhvrPsDS6KgYfuwdaQ==";

  return (
    <section className="py-40 px-8 md:px-24 bg-beige-200/30 relative overflow-hidden" id="newsletter">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none plaster-surface" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-beige-900/60 mb-8 block font-semibold">
            La Beige Letter
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-beige-950 italic">
            Newsletter
          </h2>
          <p className="text-lg font-light leading-relaxed text-beige-900/80 max-w-xl mx-auto mb-16 font-serif italic">
            Inscrivez-vous pour suivre nos actualités, nos nouveaux arrivages et nos prochains ateliers créatifs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="max-w-md mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-beige-300 to-beige-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-between w-full px-8 py-5 bg-beige-50 border border-beige-300 rounded-full text-beige-900 hover:border-beige-900 transition-all duration-500 group"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-medium text-beige-900/40 group-hover:text-beige-900 transition-colors">
                votre adresse email
              </span>
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-beige-900">
                  S'inscrire
                </span>
                <Send className="w-4 h-4 text-beige-900 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
          <p className="mt-6 text-[9px] uppercase tracking-[0.1em] text-beige-900/40 font-medium italic">
            En vous inscrivant, vous acceptez de recevoir nos emails.
          </p>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-beige-300/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-beige-300/30 to-transparent" />
    </section>
  );
}
