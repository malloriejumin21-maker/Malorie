import { motion } from "motion/react";

export default function Header() {
  const navLinks = [
    { name: "shop", href: "#" },
    { name: "menu coffee", href: "#" },
    { name: "événements", href: "#" },
    { name: "actualités", href: "#" },
    { name: "nous", href: "#" },
    { name: "nous trouver", href: "#" },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-40 px-8 py-12 flex justify-center items-center"
      id="main-header"
    >
      <nav className="flex space-x-16">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[10px] uppercase tracking-[0.4em] font-medium text-beige-900/70 hover:text-beige-900 transition-colors duration-700"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
