export default function Footer(){
  return (
    <footer id="contact" className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/50 bg-white/60 backdrop-blur-xl p-6 text-center text-slate-700" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
          <div className="text-sm">Available worldwide — let’s build something warm and memorable.</div>
          <div className="mt-2 text-xs text-slate-500">© {new Date().getFullYear()} Studio — Crafted with care.</div>
        </div>
      </div>
    </footer>
  )
}
