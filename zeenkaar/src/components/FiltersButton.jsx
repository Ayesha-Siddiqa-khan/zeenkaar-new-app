function FiltersButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 text-slate-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <rect x="3" y="5" width="14" height="2" rx="1" />
        <rect x="5" y="9" width="10" height="2" rx="1" />
        <rect x="7" y="13" width="6" height="2" rx="1" />
      </svg>
      Filters
    </button>
  )
}

export default FiltersButton
