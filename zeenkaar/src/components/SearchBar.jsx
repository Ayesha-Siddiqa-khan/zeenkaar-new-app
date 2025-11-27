import { Search } from 'lucide-react'

function SearchBar({ value, onChange, placeholder = 'Search products' }) {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-[#dcd3fa] bg-[#f2eaff] px-5 pr-16 py-3 text-sm text-[#5b4eb6] placeholder:text-[#7a6fd6] shadow-inner transition focus:border-[#c9bcf5] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#c9bcf5]"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#7a6fd6] to-[#4c3aa9] text-white shadow-md transition hover:-translate-y-0.5 hover:brightness-105"
      >
        <Search size={16} />
      </button>
    </div>
  )
}

export default SearchBar
