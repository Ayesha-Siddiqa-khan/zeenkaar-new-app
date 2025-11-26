import { Search } from 'lucide-react'

function SearchBar({ value, onChange, placeholder = 'Search products' }) {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-slate-200 bg-[#f5f5f5] px-5 pr-16 py-3 text-sm text-slate-700 shadow-inner transition focus:border-slate-300 focus:bg-white focus:outline-none focus:ring-1 focus:ring-slate-200"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-rose-500 text-white shadow-md transition hover:-translate-y-0.5 hover:bg-rose-600"
      >
        <Search size={16} />
      </button>
    </div>
  )
}

export default SearchBar
