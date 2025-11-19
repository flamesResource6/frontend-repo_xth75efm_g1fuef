export default function Cases() {
  return (
    <section id="cases" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Selected outcomes</h2>
          <p className="mt-3 text-slate-300">Quiet brands. Loud numbers.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <p className="text-sm text-slate-400">Category {i}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">$XXM incremental revenue</h3>
              <p className="mt-2 text-sm text-slate-300">CAC -32%, LTV +48%, payback < 3 months. GTM reset and pricing overhaul.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
