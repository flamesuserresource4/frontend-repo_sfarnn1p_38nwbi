import { Menu, Snowflake, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 backdrop-blur-xl bg-white/20 dark:bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)] rounded-2xl px-4 py-3 flex items-center justify-between"
          style={{ WebkitBackdropFilter: "blur(12px)" }}
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-rose-400 shadow-inner grid place-items-center">
              <Sun className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800/90 dark:text-white/90">
              Your Name
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-700/80 dark:text-white/70">
            <a href="#work" className="hover:text-slate-900/90 dark:hover:text-white transition">Work</a>
            <a href="#about" className="hover:text-slate-900/90 dark:hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-slate-900/90 dark:hover:text-white transition">Contact</a>
          </div>
          <button className="md:hidden p-2 rounded-xl hover:bg-white/20 transition text-slate-800/80 dark:text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </motion.nav>
      </div>
    </div>
  );
}
