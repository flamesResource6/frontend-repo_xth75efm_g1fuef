import { LineChart, Landmark, Radar, ChartBarBig } from 'lucide-react'

const items = [
  {
    icon: LineChart,
    title: 'Performance Marketing',
    desc: 'Full-funnel acquisition across search, social, and programmatic with ruthless attribution discipline.'
  },
  {
    icon: Landmark,
    title: 'Commercial Strategy',
    desc: 'Pricing science, unit economics, and offer design to unlock margin and scale simultaneously.'
  },
  {
    icon: Radar,
    title: 'Lifecycle & CRM',
    desc: 'High-intent journeys, segmentation, and automation that compound LTV and retention.'
  },
  {
    icon: ChartBarBig,
    title: 'Brand Systems',
    desc: 'Narratives that command attention and frameworks that keep every channel aligned.'
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(239,68,68,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">What we execute</h2>
          <p className="mt-3 text-slate-300">Cross-functional operators embedded in your revenue engine.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 shadow">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-500/10 blur-2xl transition group-hover:bg-red-500/20" />
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
