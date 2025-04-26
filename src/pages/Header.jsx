import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const links = [
  { id: "hero", name: "Home" },
  { id: "projects", name: "Projects" },
  { id: "education-and-experience", name: "Education" },
  { id: "certificate", name: "Certificate" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const smoothScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(`#${id}`);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleClick = (e, id) => {
    smoothScrollTo(e, id);
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="relative z-[99]">
      {/* Hamburger */}
      <div className="fixed left-4 top-4 z-[102] lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-full border border-[#ffcbb4] dark:border-[#ddbea9] bg-white/90 dark:bg-black/90 backdrop-blur-md transition hover:scale-105 shadow-lg"
        >
          {menuOpen ? <X size={24} className="text-zinc-700 dark:text-zinc-200" /> : <Menu size={24} className="text-zinc-700 dark:text-zinc-200" />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden lg:block fixed left-1/2 top-6 -translate-x-1/2 z-40">
        <ul className="flex h-12 items-center justify-center gap-6 rounded-full border border-[#f4f3ee] border-opacity-40 bg-white/90 dark:bg-black/90 px-6 text-sm font-medium shadow-lg backdrop-blur-md">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`relative px-3 py-2 transition-colors ${
                  activeSection === link.id
                    ? "text-black dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#ffcbb4] dark:hover:text-[#ddbea9]"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[#ffcbb4] dark:bg-[#ddbea9]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <motion.aside
        className="fixed top-0 left-0 z-[101] h-full w-64 bg-white/95 dark:bg-black/95 p-6 shadow-lg backdrop-blur-md border-r border-black/20 dark:border-white/20 lg:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col gap-6 mt-16">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={`block text-lg font-semibold uppercase transition ${
                  activeSection === link.id
                    ? "text-[#ffcbb4] dark:text-[#ddbea9]"
                    : "text-zinc-700 dark:text-zinc-200 hover:text-[#ffcbb4] dark:hover:text-[#ddbea9]"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.aside>
    </header>
  );
};

export default Header;
