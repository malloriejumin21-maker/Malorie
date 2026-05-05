import { motion } from "motion/react";
import { Coffee, Info, Clock, MapPin } from "lucide-react";
import { IMAGE_IDS, getImageUrl } from "../constants/images";

const MENU_DATA = {
  coffee: [
    { name: "Espresso", price: "3.5", description: "Notes de chocolat noir et noisettes grillées." },
    { name: "Allongé", price: "4.0", description: "La douceur d'un café long, équilibré." },
    { name: "Flat White", price: "5.5", description: "Texture soyeuse, micro-mousse de lait d'avoine." },
    { name: "Cappuccino", price: "6.0", description: "Équilibre parfait entre café intense et nuage de lait." },
    { name: "Beige Latte", price: "7.0", description: "Notre signature : cardamome, sirop d'agave et lait végétal." },
  ],
  cold_drinks: [
    { name: "Iced Latte", price: "6.5", description: "Fraîcheur intense et douceur lactée." },
    { name: "Cold Brew", price: "5.5", description: "Café infusé à froid pendant 12h, floral et léger." },
    { name: "Thé Glacé Maison", price: "5.0", description: "Hibiscus, menthe fraîche et une touche de citron." },
    { name: "Yuzu Tonic", price: "6.5", description: "Sparkling yuzu, espresso shot et romarin frais." },
  ],
  brunch: [
    { name: "Avocado Toast Beige", price: "14.5", description: "Pain au levain, crème d'avocat au citron vert, œuf poché et dukkah noisette." },
    { name: "Shakshuka Forestière", price: "16.0", description: "Œufs bio, sauce tomate épicée, pleurotes sautées et feta crémeuse." },
    { name: "Açai Bowl Signature", price: "13.0", description: "Granola maison, fruits de saison, beurre d'amande et graines de chia." },
    { name: "Pancakes au Sarrasin", price: "15.0", description: "Mascarpone vanillé, figues rôties au miel et éclats de pistache." },
  ],
  gouter: [
    { name: "Banana Bread Grillé", price: "6.5", description: "Servi avec son beurre à la cannelle et fleur de sel." },
    { name: "Cookie Chocolat-Miso", price: "4.5", description: "Le parfait équilibre entre le sucre et l'umami." },
    { name: "Cake Citron-Pavot", price: "5.5", description: "Zestes de citron bio, texture aérienne et glaçage croquant." },
    { name: "Brownie Noix de Pécan", price: "6.0", description: "Cœur fondant, chocolat 70% et éclats de pécan torréfiées." },
  ]
};

export default function CoffeeMenu() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-beige-100 min-h-screen pt-32 pb-40"
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Title Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif text-[#4f4842] tracking-wide mb-6">
              Le menu coffee shop
            </h1>
            <p className="text-[#4f4842]/60 uppercase tracking-[0.4em] text-[10px] font-medium">
              Une expérience sensorielle & organique
            </p>
          </motion.div>
        </div>

        {/* Info Ribbon */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-32 border-y border-beige-200 py-8">
          <div className="flex items-center gap-3 text-[#4f4842]/70">
            <Clock size={16} strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest">Brunch servi toute la journée</span>
          </div>
          <div className="flex items-center gap-3 text-[#4f4842]/70">
            <Coffee size={16} strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest">Lait végétal sans supplément</span>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="space-y-32">
          {/* Coffee Section */}
          <section>
            <h2 className="text-2xl font-serif text-[#4f4842] mb-12 border-b border-beige-200 pb-4">
              Boissons Chaudes
            </h2>
            <div className="grid gap-8">
              {MENU_DATA.coffee.map((item, i) => (
                <div key={i} className="flex justify-between items-start group">
                  <div className="max-w-md">
                    <h3 className="text-lg font-serif text-[#4f4842] group-hover:text-beige-950 transition-colors">{item.name}</h3>
                    <p className="text-sm text-[#4f4842]/60 font-light mt-1 italic">{item.description}</p>
                  </div>
                  <span className="text-sm font-medium text-[#4f4842]/80">{item.price}€</span>
                </div>
              ))}
            </div>
          </section>

          {/* Cold Drinks */}
          <section>
            <h2 className="text-2xl font-serif text-[#4f4842] mb-12 border-b border-beige-200 pb-4">
              Boissons Fraîches
            </h2>
            <div className="grid gap-8">
              {MENU_DATA.cold_drinks.map((item, i) => (
                <div key={i} className="flex justify-between items-start group">
                  <div className="max-w-md">
                    <h3 className="text-lg font-serif text-[#4f4842] group-hover:text-beige-950 transition-colors">{item.name}</h3>
                    <p className="text-sm text-[#4f4842]/60 font-light mt-1 italic">{item.description}</p>
                  </div>
                  <span className="text-sm font-medium text-[#4f4842]/80">{item.price}€</span>
                </div>
              ))}
            </div>
          </section>

          {/* Brunch Section with Image */}
          <section>
            <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
              <h2 className="text-2xl font-serif text-[#4f4842] border-b border-beige-200 pb-4">
                Le Brunch (all day)
              </h2>
              <div className="hidden md:block h-px bg-beige-200" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-10">
                {MENU_DATA.brunch.map((item, i) => (
                  <div key={i} className="flex justify-between items-start group">
                    <div className="max-w-xs">
                      <h3 className="text-lg font-serif text-[#4f4842] group-hover:text-beige-950 transition-colors uppercase tracking-wider text-sm">{item.name}</h3>
                      <p className="text-sm text-[#4f4842]/60 font-light mt-2">{item.description}</p>
                    </div>
                    <span className="text-sm font-medium text-[#4f4842]/80">{item.price}€</span>
                  </div>
                ))}
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-sm">
                <img 
                  src={getImageUrl(IMAGE_IDS.coffeeMenu)} 
                  alt="Beige Coffee Shop Brunch"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Sips & Sweets / Goûter */}
          <section>
            <h2 className="text-2xl font-serif text-[#4f4842] mb-12 border-b border-beige-200 pb-4">
              Le Goûter
            </h2>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              {MENU_DATA.gouter.map((item, i) => (
                <div key={i} className="flex justify-between items-start group">
                  <div className="max-w-xs">
                    <h3 className="text-lg font-serif text-[#4f4842] group-hover:text-beige-950 transition-colors">{item.name}</h3>
                    <p className="text-sm text-[#4f4842]/60 font-light mt-1 italic">{item.description}</p>
                  </div>
                  <span className="text-sm font-medium text-[#4f4842]/80">{item.price}€</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-40 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#4f4842]/40 font-medium leading-relaxed">
            Tous nos produits sont sourcés localement.<br />
            Nos options sont 100% végétales.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
