import { motion } from 'framer-motion';
import { Code, Palette, Snowflake, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Product Design',
    desc: 'Systems, flows, and interfaces with thoughtful motion.'
  },
  {
    icon: Code,
    title: 'Frontend Engineering',
    desc: 'Robust React apps, accessible and fast.'
  },
  {
    icon: Palette,
    title: 'Visual Direction',
    desc: 'Warm tones with fresh winter accents and clarity.'
  },
  {
    icon: Snowflake,
    title: 'Micro-interactions',
    desc: 'Tasteful animations for delight without distraction.'
  }
];

export default function SectionCards() {
  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
                className="group rounded-3xl border border-white/40 bg-white/50 dark:bg-white/10 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(31,38,135,0.08)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.15)] transition"
                style={{ WebkitBackdropFilter: 'blur(12px)' }}
              >
                <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-rose-400 grid place-items-center shadow-inner mb-4">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900/90 dark:text-white/90">{item.title}</h3>
                <p className="mt-1.5 text-slate-700/80 dark:text-white/70">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
