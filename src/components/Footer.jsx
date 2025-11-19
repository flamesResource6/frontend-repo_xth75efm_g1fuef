export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Begin with a private brief</h3>
              <p className="mt-2 text-slate-300">Share context, constraints, and your definition of victory. We'll respond within 24 hours.</p>
            </div>
            <form className="grid gap-4">
              <input className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-red-500" placeholder="Work email" />
              <input className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-red-500" placeholder="Company" />
              <textarea rows="4" className="rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-red-500" placeholder="What problem are we solving?" />
              <button type="button" className="justify-self-start rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/10 transition hover:from-red-500 hover:to-red-400">Request intro</button>
            </form>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Obsidian Growth Group</p>
      </div>
    </footer>
  )
}
