import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, Menu, X, Sparkles } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import AuthButtons from './AuthButtons.jsx'

const navLinkClass =
  'relative text-sm font-semibold uppercase tracking-[0.08em] text-[#2b225a] transition hover:text-[#c21c92] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-[#c21c92] after:transition-all hover:after:w-full'

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
    <header className="sticky top-0 z-40 border-b border-[#E6D2EA] bg-[#FDF2F9]/95 shadow-[0_12px_28px_rgba(0,0,0,0.04)] backdrop-blur animate-fadeIn">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-12">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f500b8]/15 to-[#7a6fd6]/20 text-[#c21c92] shadow-inner ring-1 ring-[#e6d2ea]">
              <Sparkles size={18} />
            </span>
            <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight text-[#1f1848]">
                Zeenkaar
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c21c92]">
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
                  `${navLinkClass} ${isActive ? 'text-[#c21c92] after:w-full' : ''}`
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
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#f500b8] to-[#ff8fd1] text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(245,0,184,0.35)]"
            onClick={() => setOpen(false)}
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[11px] font-bold text-rose-600 shadow">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e6d2ea] bg-white text-[#2b225a] shadow-sm transition hover:-translate-y-0.5 hover:border-[#c21c92]/60 hover:bg-[#fff7fb] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#e6d2ea] bg-[#fff7fb] shadow-lg md:hidden">
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
                      ? 'bg-[#fbe7f3] text-[#c21c92]'
                      : 'text-[#2b225a] hover:bg-[#f6f1ff]'
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
