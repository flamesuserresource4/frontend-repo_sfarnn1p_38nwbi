import { Menu, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 backdrop-blur-xl bg-white/60 border border-white/50 shadow-[0_8px_32px_rgba(31,38,135,0.12)] rounded-2xl px-4 py-3 flex items-center justify-between"
          style={{ WebkitBackdropFilter: "blur(12px)" }}
          aria-label="Primary"
        >
          <a href="#" className="flex items-center gap-2" aria-label="Home">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-300 via-rose-400 to-amber-500 shadow-inner grid place-items-center">
              <Sun className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-slate-800">
              Studio
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#projects" className="hover:text-slate-900 transition">Projects</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#contact" className="hover:text-slate-900 transition">Contact</a>
          </div>
          <button className="md:hidden p-2 rounded-xl hover:bg-white/70 transition text-slate-800" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
        </motion.nav>
      </div>
    </div>
  );
}
