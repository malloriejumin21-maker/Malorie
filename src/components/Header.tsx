import { motion } from "motion/react";
import { User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onCartOpen: () => void;
}

export default function Header({ onCartOpen }: HeaderProps) {
  const navLinks = [
    { name: "boutique", href: "/shop" },
    { name: "menu coffee", href: "/menu" },
    { name: "événements", href: "#" },
    { name: "actualités", href: "#" },
    { name: "nous", href: "#" },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 px-8 md:px-12 py-6 flex justify-between items-center bg-beige-900 shadow-md backdrop-blur-sm"
      id="main-header"
    >
      {/* Brand Logo - Left */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-serif tracking-[0.3em] lowercase text-beige-100 hover:text-beige-50 transition-colors duration-500">
          beige
        </Link>
      </div>

      {/* Navigation - Center */}
      <nav className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 items-center">
        {navLinks.map((link) => (
          link.href.startsWith("/") ? (
            <Link
              key={link.name}
              to={link.href}
              className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium text-beige-100/70 hover:text-beige-50 transition-colors duration-500"
            >
              {link.name}
            </Link>
          ) : (
            <a
              key={link.name}
              href={link.href}
              className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-medium text-beige-100/70 hover:text-beige-50 transition-colors duration-500"
            >
              {link.name}
            </a>
          )
        ))}
      </nav>

      {/* Icons - Right */}
      <div className="flex-1 flex justify-end items-center space-x-6">
        <a href="#" className="text-beige-100/80 hover:text-beige-50 transition-colors duration-500">
          <User className="w-5 h-5 stroke-[1.5]" />
        </a>
        <button 
          onClick={onCartOpen}
          className="text-beige-100/80 hover:text-beige-50 transition-colors duration-500 relative"
        >
          <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-beige-400 rounded-full"></span>
        </button>
      </div>
    </motion.header>
  );
}
