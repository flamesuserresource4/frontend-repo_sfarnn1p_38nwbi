import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section aria-label="Hero" className="relative min-h-[92vh] w-full isolate overflow-visible">
      {/* Subtle fixed background with Spline and warm scrims */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-white" />
        <div className="absolute inset-0 opacity-60">
          <Spline
            scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/90" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Page chrome overlays (grain + soft light) */}
      <div className="fixed inset-0 -z-10 pointer-events-none mix-blend-soft-light">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_15%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="backdrop-blur-xl bg-white/60 border border-white/50 rounded-3xl p-8 sm:p-12 shadow-[0_8px_32px_rgba(31,38,135,0.1)]"
          style={{ WebkitBackdropFilter: 'blur(14px)' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm bg-gradient-to-r from-amber-100/70 via-rose-100/70 to-white/70 text-slate-700 border border-white/60">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            Currently taking on select projects
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            Warm, elegant interfaces that feel effortless
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-2xl">
            I craft product experiences with a focus on clarity, motion, and subtle delight. Design-led, code-driven.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-slate-900 bg-white hover:bg-white/90 border border-white/70 shadow-inner transition focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-white">
              See projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 hover:from-amber-600 hover:via-rose-600 hover:to-amber-700 shadow-lg shadow-amber-500/25 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2 focus:ring-offset-white">
              Get in touch
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md text-center text-slate-600">
            <div>
              <div className="text-2xl font-semibold text-slate-900">8+ yrs</div>
              <div className="text-sm">Experience</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">40+</div>
              <div className="text-sm">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">100%</div>
              <div className="text-sm">Care</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
