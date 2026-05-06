import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-beige-100 shadow-2xl z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="px-8 py-10 flex items-center justify-between border-b border-beige-200">
              <div className="flex items-center gap-4">
                <ShoppingBag size={20} className="text-[#4f4842]" strokeWidth={1.5} />
                <h2 className="text-xl font-serif text-[#4f4842]">Votre Panier</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 -mr-2 hover:bg-beige-200 rounded-full transition-colors text-[#4f4842]"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Content - Empty State */}
            <div className="flex-1 px-8 py-20 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-24 h-24 rounded-full bg-beige-200 flex items-center justify-center mb-8"
              >
                <ShoppingBag size={32} className="text-[#4f4842]/20" strokeWidth={1} />
              </motion.div>
              
              <h3 className="text-2xl font-serif text-[#4f4842] mb-4">
                Le panier est encore vide
              </h3>
              <p className="text-[#4f4842]/60 text-sm font-light max-w-[280px] leading-relaxed mb-12">
                Parcourez notre sélection d'objets choisis avec soin et ajoutez vos coups de cœur ici.
              </p>
              
              <Link 
                to="/shop" 
                onClick={onClose}
                className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-semibold text-[#4f4842] hover:text-beige-950 transition-colors"
              >
                Explorer la boutique 
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Footer */}
            <div className="px-8 py-10 bg-beige-50 border-t border-beige-200">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#4f4842]/60 font-medium">Sous-total</span>
                <span className="text-xl font-serif text-[#4f4842]">0,00€</span>
              </div>
              <button 
                disabled
                className="w-full bg-[#4f4842]/20 text-white/50 py-5 rounded-xl text-[10px] uppercase tracking-[0.3em] font-semibold cursor-not-allowed"
              >
                Passer la commande
              </button>
              <p className="mt-4 text-[9px] text-[#4f4842]/40 text-center uppercase tracking-[0.1em]">
                Livraison gratuite à partir de 150€ d'achats
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
