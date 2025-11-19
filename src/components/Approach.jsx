export default function Approach() {
  return (
    <section id="approach" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">How we work</h2>
          <p className="mt-3 text-slate-300">Clear governance. Senior operators only. Outcomes over optics.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">01</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Diagnostic</h3>
            <p className="mt-2 text-slate-300">A 21-day forensic audit of demand, product-market fit, and revenue mechanics.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">02</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Architecture</h3>
            <p className="mt-2 text-slate-300">We design the growth system: channels, incentives, measurement, and operating cadence.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">03</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Embedded Ops</h3>
            <p className="mt-2 text-slate-300">A cross-functional pod runs the plan with your team and transfers capability.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
