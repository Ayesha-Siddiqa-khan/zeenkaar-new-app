import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShoppingCart, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function TopNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-[#111111]">
          Zeenkaar
        </Link>

        {/* Center: Nav links */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group relative flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-rose-500"
            >
              {item.label}
              <ChevronDown size={14} className="text-slate-400 transition group-hover:text-rose-500" />
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-rose-500 transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Icons + Login */}
        <div className="flex items-center gap-3">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50">
            <Heart size={18} />
          </button>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50">
            <ShoppingCart size={18} />
          </button>
          <button className="rounded-full bg-[#111111] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-black/90">
            Log in
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:bg-rose-50 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <ChevronDown className={`${open ? 'rotate-180' : ''} transition`} size={18} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-200 bg-white shadow-sm md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4 pt-3 sm:px-6 lg:px-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 transition hover:bg-rose-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default TopNavbar
