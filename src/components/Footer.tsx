import { Instagram, Facebook, Pointer as Pinterest } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-32 px-8 md:px-24 bg-beige-100 border-t border-beige-200" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24 cursor-default">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-serif tracking-[0.5em] lowercase mb-6 text-beige-950">beige</h2>
            <p className="text-[10px] uppercase tracking-[0.3em] text-beige-900/60 font-semibold leading-relaxed">
              Coffee shop<br />
              Ateliers créatifs<br />
              Boutique de matières
            </p>
          </div>

          {/* Visit Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-beige-950 font-bold mb-8">Nous trouver</h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-beige-900/70 font-medium leading-loose">
              12 rue de Picardie<br />
              75003 Paris<br />
              <span className="mt-4 block italic font-serif lowercase tracking-normal text-beige-900/50">Mardi — Dimanche : 10h - 19h</span>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-beige-950 font-bold mb-8">Réseaux</h3>
            <div className="flex items-center justify-center lg:justify-start gap-6 text-beige-900/60">
              <a href="#" className="hover:text-beige-950 transition-all duration-500 hover:scale-110">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-beige-950 transition-all duration-500 hover:scale-110">
                <Pinterest size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:text-beige-950 transition-all duration-500 hover:scale-110">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="text-center lg:text-right">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-beige-950 font-bold mb-8">Informations</h3>
            <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.2em] text-beige-900/70 font-medium">
              <a href="#" className="hover:text-beige-950 transition-colors duration-500 underline-offset-4 hover:underline">Conditions Générales</a>
              <a href="#" className="hover:text-beige-950 transition-colors duration-500 underline-offset-4 hover:underline">Mentions Légales</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-beige-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] uppercase tracking-[0.3em] text-beige-900/40 font-medium">
            © 2024 beige paris. all rights reserved.
          </div>
          <div className="text-[9px] uppercase tracking-[0.3em] text-beige-900/40 font-medium italic">
            créer avec amour
          </div>
        </div>
      </div>
    </footer>
  );
}
