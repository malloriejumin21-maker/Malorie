import { motion } from "motion/react";
import { ShoppingBag, ChevronRight, Filter } from "lucide-react";
import { IMAGE_IDS, getImageUrl } from "../constants/images";

const PRODUCTS = [
  {
    id: 1,
    name: "Ballerines rose poudré",
    brand: "Repetto",
    price: "295",
    category: "Chaussures",
    image: getImageUrl(IMAGE_IDS.product1),
  },
  {
    id: 2,
    name: "Robe fleurs marron",
    brand: "Coperni",
    price: "590",
    category: "Vêtements",
    image: getImageUrl(IMAGE_IDS.product2),
  },
  {
    id: 3,
    name: "Casquette personnalisable verte",
    brand: "The Good Fab",
    price: "60",
    category: "Accessoires",
    image: getImageUrl(IMAGE_IDS.product3),
  },
  {
    id: 4,
    name: "Lunettes de soleil",
    brand: "Miu Miu",
    price: "370",
    category: "Accessoires",
    image: getImageUrl(IMAGE_IDS.product4),
  },
  {
    id: 5,
    name: "Tee-shirt blanc",
    brand: "COS",
    price: "35",
    category: "Vêtements",
    image: getImageUrl(IMAGE_IDS.product5),
  },
  {
    id: 6,
    name: "Veste en vinyle noire",
    brand: "Courrèges",
    price: "990",
    category: "Vêtements",
    image: getImageUrl(IMAGE_IDS.product6),
  },
];

const CATEGORIES = ["Tous", "Vêtements", "Accessoires", "Chaussures"];

export default function Shop() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-beige-100 min-h-screen pt-32 pb-40"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif text-[#4f4842] lowercase tracking-tight mb-4">
                la boutique beige
              </h1>
              <p className="text-[#4f4842]/60 text-lg font-light max-w-xl">
                Une sélection d'objets choisis avec soin, privilégiant le fait-main et les matières nobles de nos partenaires.
              </p>
            </motion.div>
          </div>
          
          <div className="flex items-center gap-12 border-b border-beige-200 pb-2">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2">
              {CATEGORIES.map((cat, i) => (
                <button 
                  key={i}
                  className={`text-[10px] uppercase tracking-[0.3em] font-medium whitespace-nowrap transition-colors ${
                    cat === "Tous" ? "text-beige-950" : "text-beige-950/40 hover:text-beige-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 text-[#4f4842]/50 hover:text-[#4f4842] transition-colors">
              <Filter size={14} />
              <span className="text-[10px] uppercase tracking-[0.3em]">Filtres</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-beige-200 mb-8 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#4f4842]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#4f4842] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  <ShoppingBag size={18} strokeWidth={1.5} />
                </motion.button>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#4f4842]/40 font-semibold mb-1">
                      {product.brand}
                    </p>
                    <h3 className="text-xl font-serif text-[#4f4842] group-hover:text-beige-950 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-[#4f4842]/70">{product.price}€</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#4f4842]/30 group-hover:text-[#4f4842]/50 transition-colors">
                  Détails <ChevronRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curation Footer */}
        <div className="mt-48 pt-24 border-t border-beige-200 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-[#4f4842] mb-8 lowercase italic">
              Expédition éthique & Durable
            </h2>
            <p className="text-[#4f4842]/60 font-light leading-relaxed mb-12">
              Chaque commande est emballée sans plastique, avec des matériaux recyclés provenant de notre café. Nous livrons localement à vélo pour réduire notre empreinte.
            </p>
            <div className="inline-flex items-center gap-4 text-[#4f4842] font-medium tracking-[0.3em] text-[10px] uppercase">
              Partager l'esprit Beige <span className="w-12 h-px bg-[#4f4842]/20" /> @beige_atelier
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
