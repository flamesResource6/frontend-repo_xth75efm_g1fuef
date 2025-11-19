import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ae2hGmiZhBrvMhFY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            Mysterious. World-class. Relentlessly effective.
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Growth architecture for brands that expect to win
          </h1>
          <p className="mt-5 text-lg text-slate-300 md:text-xl">
            We are a discreet digital marketing and business consulting group.
            We engineer measurable revenue expansion across paid media, lifecycle, brand and pricing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="pointer-events-auto rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/10 transition hover:from-red-500 hover:to-red-400">
              Start a conversation
            </a>
            <a href="#expertise" className="pointer-events-auto rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
              Explore our playbooks
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
