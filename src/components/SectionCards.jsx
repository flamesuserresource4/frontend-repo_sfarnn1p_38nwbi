import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Design Systems',
    desc: 'Cohesive libraries and tokens with real-world pragmatism.'
  },
  {
    icon: Code,
    title: 'Frontend Engineering',
    desc: 'Accessible, performant React apps with tasteful motion.'
  },
  {
    icon: Palette,
    title: 'Brand & Visual',
    desc: 'Warm palettes, depth, and clarity that carry across surfaces.'
  },
  {
    icon: Rocket,
    title: 'Launch & Iterate',
    desc: 'Fast cycles, crisp handoff, and long-term care.'
  }
];

export default function SectionCards() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">What I do</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Partnering end‑to‑end—from direction and prototyping to refined, production‑ready interfaces.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-3xl border border-white/50 bg-white/60 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.15)] transition"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-300 via-rose-400 to-amber-500 grid place-items-center shadow-inner mb-4">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-slate-700">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
