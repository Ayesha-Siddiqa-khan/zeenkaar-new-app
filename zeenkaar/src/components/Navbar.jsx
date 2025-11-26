import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import AuthButtons from './AuthButtons.jsx'

const navLinkClass =
  'relative text-sm font-semibold uppercase tracking-[0.08em] text-slate-700 transition hover:text-rose-500 after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-rose-500 after:transition-all hover:after:w-full'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { cartCount } = useCart()
  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur animate-fadeIn">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 shadow-inner">
              <Sparkles size={18} />
            </span>
            <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight text-[#111111]">
                Zeenkaar
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-rose-500">
                curated style
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? 'text-rose-600 after:w-full' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex">
            <AuthButtons />
          </div>
          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-[#111111]/90"
            onClick={() => setOpen(false)}
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-100 px-1 text-[11px] font-bold text-rose-700 shadow">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-50 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-rose-100 bg-white shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 pb-4 pt-3 sm:px-6 lg:px-12">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition ${
                    isActive
                      ? 'bg-rose-50 text-rose-600'
                      : 'text-slate-800 hover:bg-[#f6f6f6]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-2">
              <AuthButtons stacked />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
