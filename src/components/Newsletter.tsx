import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulation de l'appel API (Brevo)
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

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

          <div className="flex justify-center min-h-[64px]">
            <AnimatePresence mode="wait">
              {!isExpanded ? (
                <motion.button
                  key="button"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setIsExpanded(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-4 bg-[#4f4842] text-beige-100 px-12 py-4 rounded-full hover:bg-beige-950 transition-all duration-500 shadow-xl"
                >
                  <span className="text-sm uppercase tracking-[0.3em] font-semibold">Rejoindre la famille Beige</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </motion.button>
              ) : status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4 text-[#4f4842]"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                  <span className="text-sm uppercase tracking-widest italic font-serif">Bienvenue dans la famille Beige</span>
                  <button 
                    onClick={() => {
                      setIsExpanded(false);
                      setStatus("idle");
                      setEmail("");
                    }}
                    className="text-[9px] uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity"
                  >
                    Fermer
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col md:flex-row gap-4 w-full max-w-md items-center"
                >
                  <input
                    type="email"
                    required
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent border-b border-[#4f4842] py-2 px-4 focus:outline-none text-[#4f4842] placeholder:text-[#4f4842]/30 w-full"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="whitespace-nowrap px-8 py-2 border border-[#4f4842] text-[#4f4842] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#4f4842] hover:text-beige-100 transition-all duration-500 disabled:opacity-50"
                    >
                      {status === "loading" ? "Chargement..." : "S'inscrire"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsExpanded(false)}
                      className="px-4 py-2 text-[#4f4842]/40 hover:text-[#4f4842] transition-colors"
                    >
                      Annuler
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
