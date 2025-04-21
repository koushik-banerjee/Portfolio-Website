import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ToggleTheme({ switchTheme, theme }) {
  return (
    <div className="relative">
      <div className="hs-tooltip [--placement:bottom] inline-block">
        <button
          onClick={switchTheme}
          className="hs-tooltip-toggle absolute top-5 right-5 text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300"
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={theme}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {theme === "dark" ? <FaSun /> : <BsFillMoonStarsFill />}
            </motion.span>
          </AnimatePresence>

          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm" role="tooltip">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default ToggleTheme;
