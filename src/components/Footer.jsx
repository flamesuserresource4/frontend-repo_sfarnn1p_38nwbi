export default function Footer(){
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/40 bg-white/50 dark:bg-white/10 backdrop-blur-xl p-6 text-center text-slate-700/80 dark:text-white/70" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
          © {new Date().getFullYear()} Your Name — Crafted with warmth and a winter breeze.
        </div>
      </div>
    </footer>
  )
}
