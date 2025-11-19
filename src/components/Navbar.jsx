import { useState } from 'react'
import { Menu, X, FlameKindling } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Approach', href: '#approach' },
    { label: 'Cases', href: '#cases' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative">
                <span className="absolute -inset-1 rounded-full bg-red-500/30 blur opacity-0 transition group-hover:opacity-100" />
                <FlameKindling className="relative h-6 w-6 text-red-500" />
              </div>
              <span className="font-semibold tracking-tight text-white">Obsidian Growth</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-200/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 text-sm font-medium text-white shadow ring-1 ring-white/10 transition hover:from-red-500 hover:to-red-400"
              >
                Engage
              </a>
            </nav>

            <button
              className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-5 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-slate-200/80 transition hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 text-sm font-medium text-white shadow ring-1 ring-white/10 transition hover:from-red-500 hover:to-red-400"
                >
                  Engage
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
