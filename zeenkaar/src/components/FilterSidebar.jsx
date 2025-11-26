import { Flame, Sparkles } from 'lucide-react'

const DEFAULT_CATEGORIES = ['All', 'Clothing', 'Accessories', 'Shoes', 'Bags', 'Jewelry', 'Kids']

function FilterSidebar({ categories = DEFAULT_CATEGORIES, active, onChange }) {
  return (
    <aside className="w-full max-w-xs rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-3 text-sm font-semibold text-[#111111]">
        <span className="flex items-center gap-1.5 text-rose-500">
          <Flame size={16} />
          Popular
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1.5 text-slate-700">
          <Sparkles size={16} />
          New &amp; Noteworthy
        </span>
      </div>
      <div className="mt-4 h-px w-full bg-slate-200/70" />
      <nav className="mt-3 flex flex-col gap-2 text-sm text-slate-700">
        {categories.map((cat) => {
          const isActive = active === cat
          return (
            <button
              key={cat}
              onClick={() => onChange?.(cat)}
              className={`w-full rounded-lg px-2 py-2 text-left transition ${
                isActive ? 'bg-rose-50 text-rose-600 font-semibold' : 'hover:text-[#111111]'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default FilterSidebar
