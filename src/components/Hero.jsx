import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full isolate overflow-visible">
      {/* Fixed background Spline so it never scrolls/shrinks */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Spline
          scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Fixed scrim to keep text legible and blend to white at bottom */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/90" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0)_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="backdrop-blur-xl bg-white/40 dark:bg-white/10 border border-white/30 rounded-3xl p-8 sm:p-12 shadow-[0_8px_32px_rgba(31,38,135,0.2)]"
          style={{ WebkitBackdropFilter: 'blur(14px)' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-gradient-to-r from-cyan-100/60 via-sky-100/60 to-emerald-100/60 text-slate-700 dark:text-white/80 border border-white/50">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900/90 dark:text-white/90">
            Cozy, minimal, and fresh — an iOS 17/18 vibe for winter
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700/80 dark:text-white/70 max-w-2xl">
            I design and build delightful web experiences with a warm glow and crisp edges. Blending soft glass surfaces with vibrant highlights.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-slate-900 bg-white/80 hover:bg-white/90 border border-white/60 shadow-inner transition">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 hover:from-cyan-600 hover:via-sky-600 hover:to-emerald-600 shadow-lg shadow-sky-500/25">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
