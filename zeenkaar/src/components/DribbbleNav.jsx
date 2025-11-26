import { ChevronDown } from 'lucide-react'
import AuthButtons from './AuthButtons.jsx'

const NAV_LINKS = ['Explore', 'Categories', 'New Arrivals', 'Trending']

function DribbbleNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12">
        {/* Left: Logo */}
        <div className="text-xl font-bold tracking-tight text-[#0e0e2c]">Zeenkaar</div>

        {/* Center: Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="group relative flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-rose-500"
            >
              {label}
              <ChevronDown size={14} className="text-slate-400 transition group-hover:text-rose-500" />
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-rose-500 transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Auth */}
        <AuthButtons />
      </div>
    </header>
  )
}

export default DribbbleNav
